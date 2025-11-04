const { Router } = require("express");
const { renderIndex } = require("../controller/indexController");
const { isUnAuth } = require("../middlewares/auth/authMiddleware");
const indexRouter = Router();

indexRouter.get("/", renderIndex);
indexRouter.get("/signup", isUnAuth, (req, res) => res.render("pages/signup"));
indexRouter.get("/login", isUnAuth, (req, res) => res.render("pages/login"));

module.exports = indexRouter;
