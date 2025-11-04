const { Router } = require("express");
const { renderIndex } = require("../controller/indexController");
const indexRouter = Router();

indexRouter.get("/", renderIndex);
indexRouter.get("/signup", (req, res) => res.render("pages/signup"));
indexRouter.get("/login", (req, res) => res.render("pages/login"));

module.exports = indexRouter;
