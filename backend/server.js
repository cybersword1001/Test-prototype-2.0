require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
