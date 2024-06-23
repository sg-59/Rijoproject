const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user, "user from get by id route");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const putById = async (req, res, next) => {
  console.log(req.body, "req.body from put by id route");
  if (
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.userName &&
    !req.body.email &&
    !req.body.age &&
    !req.body.gender &&
    !req.body.password &&
    !req.body.confirmPassword
  ) {
    return res
      .status(400)
      .json({ message: "You can't update fields with empty values." });
  }

  if (req.body.email) {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser?.email === req.body.email) {
      return res.status(400).json({ message: "Email already exists" });
    }
  }
  if (req.body.password && req.body.password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    next();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteById = async (req, res, next) => {
  console.log(req.params.id, "id from delete by id route");
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    console.log(data, "data from delete by id route");
    next();
    res.status(200).json("User deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    let users = await User.find({}, { password: 0 });

    let usersIncludingFullName = users.map((user) => ({
      ...user.toObject(),
      fullName: user.fullName,
    }));
    next();

    res
      .status(200)
      .json({ msg: "Fetched Users", users: usersIncludingFullName });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getById,
  putById,
  deleteById,
  getAll,
};
