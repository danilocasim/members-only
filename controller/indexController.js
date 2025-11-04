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
