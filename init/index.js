require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

main().catch(err => console.log(err));

async function main() {
  // Connect to local database where your mongosh user lives!
  await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb");
  console.log("Connected to DB, initializing data...");
  await initDB();
  console.log("Done.");
  process.exit(0);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Using the Anjani ID that exists in your local mongosh
  const id = '6903ce07a876d0284ac21a98';

  // Find the owner locally to confirm!
  const user = await User.findById(id);

  if (!user) {
    console.log("ERROR: User not found! Please check mongosh again.");
    return;
  }

  const updatedData = initdata.data.map((listing) => ({
    ...listing,

    owner: id,
  }));

  await Listing.insertMany(updatedData);
  console.log("data was initialized");
}

initDB();
