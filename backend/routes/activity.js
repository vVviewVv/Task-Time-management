const express = require("express");
const router = express.Router();
const activityController = require("../controller/activityController.js");

router.post("/add", activityController.addTask);

module.exports = router;
