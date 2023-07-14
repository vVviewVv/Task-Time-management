const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

/* GET users listing. */
router.get("/", userController.getUser);

module.exports = router;
