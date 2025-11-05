const { body } = require("express-validator");
require("dotenv").config();
const db = require("../../db/queries");

const { ADMIN_PASSWORD } = process.env;

const signupValidators = [
  body("firstName")
    .isLength({ min: 5 })
    .withMessage("firstname must consists of 5 char"),
  body("lastName")
    .isLength({ min: 5 })
    .withMessage("lastName must consists of 5 char"),
  body("username")
    .isLength({ min: 5 })
    .withMessage("username must consists of 5 char")
    .custom(async (value, { req }) => {
      const username = await db.checkUsernameDuplication(value);
      if (username.length === 0) return false;
      else return true;
    })
    .withMessage("Username already exists!"),
  ,
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must consists of 5 char"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must consist of minimum 5 characters"),
  body("confirmPassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("please input same password"),
  body("isAdmin")
    .custom((value, { req }) => {
      const isAdminStatus = value === "on" ? true : false;

      if (isAdminStatus) {
        return req.body.adminPassword === ADMIN_PASSWORD;
      }
      return true;
    })
    .withMessage("Admin password is incorrect please try again"),
];

module.exports = signupValidators;
