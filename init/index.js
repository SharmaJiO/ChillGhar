const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js")


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Airbnb');
}

const initDB = async()=>{
    await Listing.deleteMany({});
    const id = '6903ce07a876d0284ac21a98';
    const updatedData = initdata.data.map((listing) => ({
      ...listing,
       owner:id ,
    }));
  
    await Listing.insertMany(updatedData);
    console.log("data was initialized");
}

initDB();
