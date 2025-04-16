const mongoose = require("mongoose");
require("dotenv").config(); // Load .env file

const connectDB = async () => {
  try {
    console.log("🔍 MongoDB URI:", process.env.MONGO_URI); // Debugging
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
