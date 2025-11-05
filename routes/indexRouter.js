const { Router } = require("express");
const {
  renderIndex,
  renderSignup,
  renderLogin,
} = require("../controller/indexController");
const { isUnAuth } = require("../middlewares/auth/authMiddleware");
const indexRouter = Router();

indexRouter.get("/", renderIndex);
indexRouter.get("/signup", isUnAuth, renderSignup);
indexRouter.get("/login", isUnAuth, renderLogin);

module.exports = indexRouter;
