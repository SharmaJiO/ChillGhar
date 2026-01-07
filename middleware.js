const Listing = require("./models/listing.js");
const Review = require("./models/review.js")
const {listingSchema}=require("./schema.js")
const ExpressError = require("./utils/ExpressError.js");
const {reviewSchema}=require("./schema.js");


// listingSchema is a Joi schema
// req.body contains form data submitted by the user
// Joi checks if req.body matches the required structure

const validateListing = (req,res,next)=>{
let {error} = listingSchema.validate(req.body);
     if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
//         error.details is an array of validation errors
// .map(el => el.message) extracts human-readable messages
// .join(",") combines multiple messages into one string
        throw new ExpressError(400,errMsg);
     }else{
        next();
     }
}

const validateReview = (req,res,next)=>{
let {error} = reviewSchema.validate(req.body);
     if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
     }else{
        next();
     }
}

// req.session → session object (from express-session)
// redirectUrl → custom property you create
// req.originalUrl → the URL the user originally tried to access

const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
    req.flash("error","User needs to login first");
    return res.redirect("/login");
  }
  next();
}

const saveRedirecturl = (req,res,next)=>{
    if(req.session.redirectUrl){
      res.locals.redirectUrl = req.session.redirectUrl;
   }
    next();
}

const isowner = async(req,res,next)=>{
    const { id } = req.params;
      let listing = await Listing.findById(id);
if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error","You are not the owner of this listing");
   return  res.redirect('/listings/${id}');
  }
  next();
};

const isReviewAuthor = async(req,res,next)=>{
   let {id,reviewId}=req.params;
      let review = await Review.findById(reviewId);
if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","This review wasn't created by you");
   return res.redirect(`/listings/${id}`);
  }
  next();
};





module.exports =  {isLoggedIn , saveRedirecturl,isowner,validateListing,validateReview,isReviewAuthor}