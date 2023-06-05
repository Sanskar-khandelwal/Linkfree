const User = require("../models/User");
const registerUser = (req, res) => {
  res.status(200).json({
    register_post: "working ok",
  });
};
const loginUser = (req, res) => {
  res.status(200).json({
    Login_post: "working ok",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
