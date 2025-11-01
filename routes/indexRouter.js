const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("pages/index"));
indexRouter.get("/signup", (req, res) => res.render("pages/signup"));
indexRouter.get("/login", (req, res) => res.render("pages/login"));

module.exports = indexRouter;
