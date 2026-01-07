const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash")
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
  secret: "mysupersecretstring",   // key to sign/encode the session ID cookie
  resave: false,                   // don't save session if nothing is changed
  saveUninitialized: true          // save new sessions even if they're empty
}));
app.use(flash())


app.get("/register", (req, res) => {
    let { name='anonymus' } = req.query;   // get ?name=value from URL
    req.session.name = name ;
    if(name==='anonymus'){
      req.flash("error","user not registered ")
    }else{
      req.flash("success","user successfully registered")
    }
    
    res.redirect("/hello");             // send it back as response
});


app.get("/hello", (req, res) => {
  // store flash message (only for this request-response cycle)
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");

  // render 'page.ejs' and pass session data (name) to the template
  res.render("page.ejs", { name: req.session.name });
});


// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`you sent request ${req.session.count} times `)
// })

// app.get("/test",(req,res)=>{
//     res.send("test successfull")
// })

app.listen(3000,()=>{
    console.log("server is listening on page 3000")
})