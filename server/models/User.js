const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
