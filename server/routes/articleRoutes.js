const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createArticle,
  editArticle,
  getAllArticles,
  getArticlesByCategory,
  getArticlesByAuthor,
  deleteArticle,
  getArticleById,
} = require("../controllers/articleController");
const verifyToken = require("../middleware/verifyToken");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/save", verifyToken, upload.single("image"), createArticle);
router.post("/edit", verifyToken, editArticle);
router.get("/get/all", getAllArticles);
router.get("/get/category", getArticlesByCategory);
router.get("/get/author", getArticlesByAuthor);
router.get("/get/id", getArticleById);
router.delete("/delete", verifyToken, deleteArticle);

module.exports = router;
