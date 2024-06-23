const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const authMiddleware = require("../middleware/auth.middleware");
const {
  getById,
  putById,
  deleteById,
  getAll,
} = require("../controller/user.controller");

router.get("/all", async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      res.status(404).json("N user found");
    }
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all users
router.get("/", getAll);


// authMiddleware is used to protect the route from unauthorized access
router.get("/:id",authMiddleware, getById);

//  get value by id

// delete user by id

router.delete("/:id", authMiddleware, deleteById);


// update user by id
router.put("/:id", authMiddleware, putById);

//  get all values from DB

module.exports = router;
