const express = require("express");
const router = express.Router();
const activityController = require("../controller/activityController.js");

router.post("/add", activityController.addTask);
router.get("/getAll", activityController.getTasks);
router.post("/getTasksByDay", activityController.getTasksByDay);
router.put("/edit/:id", activityController.editTask);
router.delete("/:id", activityController.deleteTask);

module.exports = router;
