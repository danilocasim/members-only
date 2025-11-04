const db = require("../db/queries");

module.exports.renderIndex = async (req, res) => {
  const { rows } = await db.getAllPosts();
  res.render("pages/index", { posts: rows });
};
