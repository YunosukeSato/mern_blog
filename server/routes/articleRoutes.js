const express = require("express");
const router = express.Router();

const {
  createArticle,
  editArticle,
  getAllArticles,
  getArticlesByCategory,
  getArticlesByAuthor,
  deleteArticle,
} = require("../controllers/articleController");
const verifyToken = require("../middleware/verifyToken");

router.post("/new", verifyToken, createArticle);
router.post("/edit", verifyToken, editArticle);
router.get("/get/all", getAllArticles);
router.get("/get/category", getArticlesByCategory);
router.get("/get/author", getArticlesByAuthor);
router.delete("/delete", verifyToken, deleteArticle);

module.exports = router;
