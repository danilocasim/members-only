const { Router } = require("express");
const { addUser } = require("../controller/userController");

const userRouter = Router();

userRouter.post("/signup", addUser);

module.exports = userRouter;
