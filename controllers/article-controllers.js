const db = require("../mySql-connect");
const HttpError = require("../models/http-error");

const getArticleItems = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM article");
  res.json(rows);
};

// const getArticleCollection = async (req, res) => {
//   try {
//     const Id = req.params.collection;
//     const [rows] = await db.query("SELECT * FROM article");
//     if (!rows) return next("Can't find article item", 404);
//     res.json({ collection: rows });
//   } catch (err) {
//     return next(new HttpError("Can't find article item of collection", 404));
//   }
// };

const getArticleItemById = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    // console.log(articleId);
    const [row] = await db.query(
      `SELECT * FROM article WHERE articleId=${articleId}`
    );
    if (!row) return next("Can't find article item", 404);
    res.json(row);
  } catch (err) {
    return next(new HttpError("Can't find article item", 404));
  }
};

module.exports = { getArticleItems, getArticleItemById };
