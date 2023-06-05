const User = require("../models/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);

  try {
    const defaultLink = { url: "google.com", title: "google", icon: "blank" };

    const user = await User.create({
      handle,
      email,
      password,
      role: category,
      links: [defaultLink],
    });
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET) || "fakevalue";
    console.log("user", user);

    return res.json({
      message: "user created",
      status: "success",
      id: user._id,
      "token": token,
    });
  } catch (err) {
    if (err.code == "11000") {
      return res.json({
        message: "try different handle or email",
        status: "error",
      });
    }
    return res.status(404).json({ message: err.message, status: "error" });
  }
};

const loginUser = (req, res) => {
  res.status(200).json({
    message: "success",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
