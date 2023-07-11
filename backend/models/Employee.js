const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    Firstname: {type: String},
    Lastname: {type: String},
    JobTitle: {type: String},
    Email: {type: String},
    EmployeeCode: {type: Number},
    DepartmentName: {type: String, default: "Resources Pool Unit"},
    Company: {type: String, default: "gosoft (Thailand) Company Limited"}
})

module.exports = mongoose.model('Employee', EmployeeSchema)