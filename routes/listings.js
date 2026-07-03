const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js")
const {isowner} = require("../middleware.js")
const {validateListing} = require("../middleware.js")
const listingController = require("../controllers/listings.js")
const multer  = require('multer')//will bring data from form and  and will save in uploads(automatically created) folder
const { storage } = require("../cloudConfig.js");
const upload = multer({storage })


router.route("/")
  .get(wrapAsync(listingController.index))   // INDEX ROUTE
  .post(isLoggedIn ,upload.single("listing[image]") , validateListing , wrapAsync(listingController.createRoute)); // CREATE ROUTE

router.get(("/search"),wrapAsync(listingController.search))

// NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm );

router.get("/host",isLoggedIn,wrapAsync(listingController.hostDashboard))


router.get("/mylistings",isLoggedIn,wrapAsync(listingController.myListings))

router.get("/cate/:categories",listingController.category)




router.route("/:id")
.get( wrapAsync(listingController.showRoute))// SHOW ROUTE
.put(isLoggedIn,isowner,upload.single("listing[image]"),validateListing , wrapAsync(listingController.updateRoute))// UPDATE ROUTE
.delete(isLoggedIn, isowner,wrapAsync(listingController.deleteRoute));// DELETE ROUTE



// EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isowner, wrapAsync(listingController.editRoute));

router.get("/mylistings",isLoggedIn,wrapAsync(listingController.myListings))




module.exports = router;