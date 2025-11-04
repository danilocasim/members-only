const { validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");
const signupValidators = require("../middlewares/validators/signupValidators");

module.exports.addUser = [
  signupValidators,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("../views/pages/signup", {
        errors: errors.array(),
      });
    }
    const { firstName, lastName, username, password, isAdmin } =
      matchedData(req);

    const isAdminStatus = isAdmin === "on" ? true : false;
    await db.addUser(firstName, lastName, username, password, isAdminStatus);
    res.redirect("/login");
  },
];

module.exports.logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);
    res.redirect("/");
  });
};

module.exports.postMessage = async (req, res) => {
  const { id } = req.user;
  const { title, message } = req.body;
  await db.postMessage(id, title, message);

  res.redirect("/");
};

module.exports.deletePost = async (req, res) => {
  const { postId } = req.body;
  await db.deletePost(postId);
  res.redirect("/");
};
