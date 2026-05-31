if (process.env.NODE_ENV != "production") { require('dotenv').config() };



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session")
const MongoStore = require('connect-mongo');

const flash = require("connect-flash")

const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");
// Joi is a data validation library for Node.js.
// You use it to validate incoming request data (like req.body, req.query, req.params) before saving it to your database. This prevents invalid or malicious data from breaking your app.
const Joi = require('joi');
const cookieParser = require("cookie-parser");

const listingsRouter = require("./routes/listings.js")
const reviewsRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")

app.engine("ejs", ejsmate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// Changed back to local MongoDB since you are checking mongosh locally!
//const dbUrl = "mongodb://127.0.0.1:27017/Airbnb";
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}
main().catch(err => console.log(err));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET_CODE
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Error  in Mongo session store", err)
})

const sessionOption = {
  store,
  secret: process.env.SECRET_CODE,   // key used to sign the session ID cookie
  resave: false,                 // don't save session if it wasn't modified
  saveUninitialized: true,       // save new sessions even if empty
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // cookie expiry date (1 week from now)
    maxAge: 7 * 24 * 60 * 60 * 1000,               // cookie valid duration (1 week)
    httpOnly: true,                                // prevents client-side JS from accessing cookie
  },
};





app.use(session(sessionOption)); //activates session middleware for your entire app
app.use(flash())

app.use(passport.initialize());//middleware to initialize passport
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())) //use static authenticate method of model localStrategy

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser()); // to store information related to user in session
passport.deserializeUser(User.deserializeUser());// to unstore information related to user  after the session ends.


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user
  next();
})


app.use("/listings", listingsRouter)
app.use("/listings/:id/reviews", reviewsRouter)
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.redirect("/listings");
});

// 404 handler (regex for Express 5)
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Invalid input. Please check your form fields.";
  }
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err })
  //res.status(statusCode).send(message);
});

// app.listen(8080, () => {
//   console.log("Your server is listening on port 8080");
// });
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Your server is listening on port ${port}`);
});