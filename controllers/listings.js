const Listing = require("../models/listing.js");
const cloudConfig = require("../cloudConfig.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  const categories = [
    "Club",
    "Cafe",
    "Live Music",
    "Rooftop",
    "Gaming Zone",
    "Nature",
    "Event"
  ];
  res.render("listings/index.ejs", { allListings , categories });
};

module.exports.category = async(req,res)=>{
  const category = req.params.categories;
    const allListings = await Listing.find({category})
    const categories = [
      "Club",
      "Cafe",
      "Live Music",
      "Rooftop",
      "Gaming Zone",
      "Nature",
      "Event"
    ];
    // console.log(allListings)
    res.render("listings/index.ejs",{allListings , categories})
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  .populate("owner") // populate the owner field
  .populate({
    path: "reviews", // populate reviews array
    populate: {
      path: "author", // for each review, populate its author
      model: "User"
    }
  } );
  if (!listing) {
    req.flash("error", "Listing you requested does not exists");
    return res.redirect("/listings");
  }
  console.log(listing)
  res.render("listings/show.ejs", { listing, currUser: req.user });
};

module.exports.createRoute = async (req, res) => {
  let url = req.file.path; //req.file comes from Multer , URL of uploaded image
  let filename = req.file.filename; // unique identifier for the image
  
  // console.log(url)night;
  // console.log(filename);
  const newlisting = new Listing(req.body.listing);
  
  newlisting.owner = req.user._id;
  
  newlisting.image = { url, filename };
  
  await newlisting.save();
  console.log(newlisting)
  req.flash("success", "New Listing Created !");
  res.redirect("/listings");
};

module.exports.editRoute = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exists");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateRoute = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated Created !");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteRoute = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted !");
  res.redirect(`/listings`);
};

module.exports.search=async(req,res)=>{
  let{title}=req.query;
  if (!title || title.trim() === "") {
    return res.redirect("/listings");
  }
  const categories = [
    "Club",
    "Cafe",
    "Live Music",
    "Rooftop",
    "Gaming Zone",
    "Nature",
    "Event"
  ];
  const allListings = await Listing.find({title:{ $regex:title, $options: "i" }});
  console.log(allListings)
  res.render("listings/index.ejs",{allListings , categories})
}
