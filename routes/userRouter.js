const { Router } = require("express");
const {
  addUser,
  logout,
  postMessage,
  deletePost,
  updateMembershipStatus,
  renderPostForm,
  renderMembershipForm,
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

userRouter.get("/post", isAuth, renderPostForm);

userRouter.post("/post", isAuth, postMessage);
userRouter.post("/deletePost", deletePost);
userRouter.get("/joinClub", isAuth, renderMembershipForm);
userRouter.post("/joinClub", isAuth, updateMembershipStatus);

module.exports = userRouter;
