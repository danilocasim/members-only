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
