const db = require("../db/queries");
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

module.exports.renderIndex = async (req, res) => {
  const { rows } = await db.getAllPosts();

  const transformedDate = rows.map((row) => {
    row.timestamp = dayjs(row.timestamp).fromNow();
    return row;
  });

  res.render("pages/index", { posts: transformedDate });
};

module.exports.renderSignup = async (req, res) => {
  res.render("pages/signup");
};

module.exports.renderLogin = async (req, res) => {
  res.render("pages/login");
};
