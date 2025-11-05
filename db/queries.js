const pool = require("./pool");
const bycrypt = require("bcryptjs");

module.exports.addUser = async (
  firstName,
  lastName,
  username,
  password,
  isAdmin
) => {
  const hashedPassword = await bycrypt.hash(password, 10);
  await pool.query(
    `INSERT INTO users (firstname, lastname, username, password, isadmin)
    VALUES ($1, $2, $3, $4, $5)`,
    [firstName, lastName, username, hashedPassword, isAdmin]
  );
};

module.exports.getAllPosts = async () => {
  const allPosts = await pool.query(
    "SELECT posts.id, users.firstname, users.lastname, posts.title, posts.message, posts.timestamp FROM posts INNER JOIN users ON posts.userid = users.id ORDER BY posts.id DESC"
  );
  return allPosts;
};

module.exports.postMessage = async (userId, title, message) => {
  await pool.query(
    `INSERT INTO posts (userid, title, message, timestamp)
    VALUES ($1, $2, $3, $4)`,
    [userId, title, message, new Date()]
  );
};

module.exports.deletePost = async (postId) => {
  await pool.query(`DELETE FROM posts WHERE id = $1`, [postId]);
};

module.exports.updateMembershipStatus = async (userId) => {
  await pool.query(
    `UPDATE users
    SET ismember = true 
    WHERE id = $1`,
    [userId]
  );
};

module.exports.checkUsernameDuplication = async (username) => {
  await pool.query("SELECT * FROM users WHERE username = $1", [username]);
};
