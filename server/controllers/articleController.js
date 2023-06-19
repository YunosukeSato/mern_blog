const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const Article = require("../models/Article");

const createArticle = async (req, res) => {
  const { userid, author, title, body, category } = req.body;
  const id = uuidv4();
  const created_at = new Date();
  const dayAndYear = created_at.toDateString().slice(4);
  // implement image upload later
  // const cover = req.file.buffer;

  const article = await Article.create({
    id,
    userid,
    author,
    title,
    // cover,
    body,
    category,
    created_at: dayAndYear,
  });

  return res
    .status(201)
    .json({ message: "Article successfully created", article });
};

const editArticle = async (req, res) => {
  const { id, title, cover, body, category, created_at } = req.body;

  const updatedArticle = await Article.findByIdAndUpdate(
    id,
    { title, cover, body, category, created_at },
    { new: true }
  );

  if (!updatedArticle) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res
    .status(200)
    .json({ message: "Article successfully updated", updatedArticle });
};

const getAllArticles = async (req, res) => {
  const articles = await Article.find();

  if (!articles) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res.status(200).json({ articles });
};

const getArticlesByCategory = async (req, res) => {
  const { category } = req.query;
  const articles = await Article.find({ category });

  if (!articles) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res.status(200).json({ articles });
};

const getArticleById = async (req, res) => {
  const { id } = req.query;
  const article = await Article.find({ id });

  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res.status(200).json({ article });
};

const getArticlesByAuthor = async (req, res) => {
  const { userid } = req.query;
  const articles = await Article.find({ userid });

  if (!articles) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res.status(200).json({ articles });
};

const deleteArticle = async (req, res) => {
  const { id } = req.body;
  const deletedArticle = await Article.findByIdAndDelete(id);

  if (!deletedArticle) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res
    .status(200)
    .json({ message: "Article successfuly deleted", deletedArticle });
};

exports.createArticle = createArticle;
exports.editArticle = editArticle;
exports.getAllArticles = getAllArticles;
exports.getArticlesByCategory = getArticlesByCategory;
exports.getArticlesByAuthor = getArticlesByAuthor;
exports.getArticleById = getArticleById;
exports.deleteArticle = deleteArticle;
