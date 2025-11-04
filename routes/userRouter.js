const { Router } = require("express");
const {
  addUser,
  logout,
  postMessage,
  deletePost,
} = require("../controller/userController");
const passport = require("passport");
const userRouter = Router();

userRouter.post("/signup", addUser);

userRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

userRouter.get("/logout", logout);

userRouter.get("/post", (req, res) => res.render("pages/post"));

userRouter.post("/post", postMessage);
userRouter.post("/deletePost", deletePost);

module.exports = userRouter;
