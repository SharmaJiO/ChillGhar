const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview} = require("../middleware.js")
const {isLoggedIn} = require("../middleware.js")
const {isReviewAuthor} = require("../middleware.js")
const viewController = require("../controllers/reviews.js")



 

// post REVIEWS
router.post("/",validateReview ,isLoggedIn, wrapAsync(viewController.postReview))

//Delete review
router.delete("/:reviewId",isLoggedIn, isReviewAuthor , wrapAsync(viewController.deleteReview))


module.exports = router;