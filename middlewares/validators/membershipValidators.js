const { body } = require("express-validator");
require("dotenv").config();

const { MEMBERSHIP_PASSWORD } = process.env;

const membershipValidators = [
  body("membershipPassword")
    .custom((value, { req }) => {
      return value === MEMBERSHIP_PASSWORD;
    })
    .withMessage("Membership Key is incorrect please try again"),
];

module.exports = membershipValidators;
