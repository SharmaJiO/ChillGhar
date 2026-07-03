const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { saveRedirecturl } = require("../middleware.js");
const userController = require("../controllers/users.js")

router.route("/signup")
.get(userController.signupRender )
.post(
  wrapAsync(userController.signupPost)
);


// This route renders the login page on GET, and on POST it saves the redirect URL, authenticates the user using Passport, flashes errors on failure, and redirects the user appropriately on success.
router.route("/login")
.get(userController.loginRender )
.post(saveRedirecturl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.loginpost
);



router.get("/logout",userController.logout)


module.exports = router;
