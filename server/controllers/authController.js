const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res) => {
  const { username, password, profilePic } = req.body;
  const userid = uuidv4();
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    userid,
    username,
    password: hashedPassword,
    profilePic,
  });

  const token = await generateToken(username);

  res.cookie("token", token, { httpOnly: true });

  return res.status(201).json({ message: "User successully created", user });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "invalid username or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "invalid username or password" });
  }

  const token = await generateToken(username);

  res.cookie("token", token, { httpOnly: true });

  return res.status(200).json({ message: "successfully logged in", user });
};

const user = async (req, res) => {
  const username = req.username;
  const user = await User.findOne({ username }).select("-password");
  if (!user) {
    return res.status(404).json({ message: "user doesn't exist" });
  }

  return res.status(200).json({ message: user, user });
};

const revokeToken = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "cookie successfully cleared" });
};

exports.signup = signup;
exports.login = login;
exports.user = user;
exports.revokeToken = revokeToken;
