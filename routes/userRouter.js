const { Router } = require("express");
const {
  addUser,
  logout,
  postMessage,
  deletePost,
  updateMembershipStatus,
} = require("../controller/userController");
const passport = require("passport");
const { isAuth } = require("../middlewares/auth/authMiddleware");
const userRouter = Router();

userRouter.post("/signup", addUser);

userRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

userRouter.get("/logout", isAuth, logout);

userRouter.get("/post", isAuth, (req, res) => res.render("pages/post"));

userRouter.post("/post", isAuth, postMessage);
userRouter.post("/deletePost", deletePost);
userRouter.get("/joinClub", isAuth, (req, res) => res.render("pages/clubForm"));
userRouter.post("/joinClub", isAuth, updateMembershipStatus);

// middleware for checking authorized user
module.exports = userRouter;
