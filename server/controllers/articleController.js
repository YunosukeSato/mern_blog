const { v4: uuidv4 } = require("uuid");

const Article = require("../models/Article");
const { create } = require("../models/User");

const createArticle = async (req, res) => {
  const { userid, author, title, cover, body, category, created_at } = req.body;
  const id = uuidv4();

  const article = await Article.create({
    id,
    userid,
    author,
    title,
    cover,
    body,
    category,
    created_at,
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
  const { category } = req.body;
  const articles = await Article.find({ category });

  if (!articles) {
    return res.status(404).json({ message: "Article not found" });
  }

  return res.status(200).json({ articles });
};

const getArticlesByAuthor = async (req, res) => {
  const { userid } = req.body;
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
exports.deleteArticle = deleteArticle;
