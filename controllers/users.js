const User = require("../models/user.js");

module.exports.signupRender = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signupPost = async (req, res) => {
    try {
      let { username, email, password } = req.body.SignUp;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser,(err)=>{
        if(err){
          return next(err);
        }
        req.flash("success", "Welcome to ChillGhar");
      res.redirect("/listings");
      })
      
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("signup");
    }
  };


  module.exports.loginRender = (req, res) => {
  res.render("users/login.ejs");
};
  module.exports.loginpost =(req, res) => {
    req.flash("success", "Welcome back to ChillGhar!");
   res.redirect(res.locals.redirectUrl || "/listings");// redirect after successful login
  } ;

  
  module.exports.logout =(req,res)=>{
  req.logout((err)=>{
    if(err){
      return next(err);
    }
    req.flash("success","You are logged out");
    res.redirect("/listings");
  })
} ;