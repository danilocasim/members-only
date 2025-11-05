const { body } = require("express-validator");

const postingValidators = [
  body("title")
    .isLength({ min: 10, max: 50 })
    .withMessage("Minimum of 10 char and maximum of 50 char"),
  body("message")
    .isLength({ min: 10, max: 200 })
    .withMessage("Minimum of 10 char and maximum of 200 char"),
];

module.exports = postingValidators;
