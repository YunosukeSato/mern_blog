const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  profilePic: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
