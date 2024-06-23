const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const upload = require("../middleware/upload.middleware");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const path = require("path");

router.post("/register", upload.single("image"), async (req, res) => {
  
  const {
    first_name,
    last_name,
    username,
    age,
    gender,
    email,
    password,
    confirmPassword,
  } = req.body;

  // Validation
  if (
    !first_name ||
    !last_name ||
    !username ||
    !gender ||
    !email ||
    !password ||
    !confirmPassword ||
    !age ||
    !req?.file
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    const uploadedImage =  await cloudinary.uploader.upload(req.file.path, {
      folder: "user/profile",
      tags: "profile",
    });

    const imagePath = uploadedImage.secure_url;

 
    const newUser = new User({
      firstName: first_name,
      lastName: last_name,
      userName: username,
      image: imagePath,
      ...req.body,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during registration" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist" });
    }
    const passwordValid = await bcrypt.compare(password, existingUser.password);
    if (!passwordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // create a token
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET_KEY
    );

    return res.status(200).json({
      message: "User Logged in successfully",
      token: token,
      success: true,
      userID: existingUser._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// age, 10 data, gender
