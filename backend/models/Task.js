const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    EmployeeId: {type: String, required: true},
    ProjectId: {type: String, required: true},
    DateOfTask: {type: Date, default: Date.now},
    Hours: {type: Number, required: true, default: 0},
    Minutes: {type: Number, required: true, default: 0},
    Detail: {type: String}
})

module.exports = mongoose.model('Task', TaskSchema)