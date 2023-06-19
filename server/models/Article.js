const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  // cover: {
  //   type: Buffer,
  //   required: true,
  // },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
