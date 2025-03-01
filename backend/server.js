const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/authDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define Resource schema and model
const ResourceSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
});
const Resource = mongoose.model("Resource", ResourceSchema);

// Register (Signup) Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ success: true, message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Compare password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, message: "Login successful" });

  } catch (error) {
    res.status(500).json({ success: false, message: "Error logging in" });
  }
});

// Get all resources
app.get("/resources", async (req, res) => {
  try {
      const resources = await Resource.find();
      res.json(resources);
  } catch (error) {
      res.status(500).json({ message: "Error fetching resources" });
  }
});

// Add a new resource
app.post("/resources", async (req, res) => {
  try {
      const { title, description, link } = req.body;
      const newResource = new Resource({ title, description, link });
      await newResource.save();
      res.status(201).json({ message: "Resource added successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error adding resource" });
  }
});

app.post("/resources", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newResource = new Resource({ title, description, link });
    await newResource.save();
    res.status(201).json({ message: "Resource added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding resource" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));