require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const { listings, users } = require("./data.js");

const MONGO_URL = process.env.ATLASDB_URL;
const COMMON_PASSWORD = "Test@1234";

async function seed() {
  await mongoose.connect(MONGO_URL);
  console.log("✅ Connected to MongoDB");

  await User.deleteMany({});
  await Listing.deleteMany({});
  console.log("🗑️  Cleared existing data");

  // Create users
  const createdUsers = [];
  for (const u of users) {
    const user = new User({ username: u.username, email: u.email, identity: u.identity });
    const registered = await User.register(user, COMMON_PASSWORD);
    createdUsers.push(registered);
    console.log(`👤 Created user: ${u.username}`);
  }

  // Create listings — assign owner in round-robin
  for (let i = 0; i < listings.length; i++) {
    const owner = createdUsers[i % createdUsers.length];
    const listing = new Listing({ ...listings[i], owner: owner._id });
    await listing.save();
    console.log(`🏠 Created: ${listing.title}`);
  }

  console.log("\n✅ Seeding complete!");
  console.log(`📊 ${createdUsers.length} users | ${listings.length} listings`);
  console.log(`🔑 Password for all users: ${COMMON_PASSWORD}`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌ Seed error:", err);
  mongoose.disconnect();
});