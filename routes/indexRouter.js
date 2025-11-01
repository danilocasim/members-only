const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("HOME"));
indexRouter.get("/signup", (req, res) => res.render("pages/signup"));

module.exports = indexRouter;
