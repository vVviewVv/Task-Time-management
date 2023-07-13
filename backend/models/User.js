const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Firstname: { type: String },
  Lastname: { type: String },
  JobTitle: { type: String, default: "Software Engineer" },
  Email: { type: String },
  Password: { type: String },
  DepartmentName: { type: String, default: "Resources Pool Unit" },
  Company: { type: String, default: "gosoft (Thailand) Company Limited" },
});

module.exports = mongoose.model("User", UserSchema);
