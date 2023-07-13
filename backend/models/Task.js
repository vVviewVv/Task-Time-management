const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  UserId: { type: String, required: true },
  ProjectId: { type: String, required: true },
  DateOfTask: { type: Date, default: Date.now },
  Hours: { type: Number, default: 0 },
  Minutes: { type: Number, default: 0 },
  Detail: { type: String },
});

module.exports = mongoose.model("Task", TaskSchema);
