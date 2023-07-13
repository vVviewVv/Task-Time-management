const User = require("../models/User");
const Task = require("../models/Task");
const authController = require("./authController");

exports.addTask = async (req, res, next) => {
  // const userId = authController.decodedToken(req.headers.authorization);
  // console.log(userId);
  // res.status(200);
  //   req.body.UserId = JSON.stringify(userId.getData());
  //   Task.create(req.body)
  //     .then((task) => {
  //       res.json(task);
  //     })
  //     .catch((err) => {
  //       next(err);
  //     });
  //   req.body.UserId = "1000";
  //   userId.then((e) => (req.body.UserId = e));
};

// exports.getTask = async (req, res, next) => {
//   const userId = authController.decodedToken(req.headers.authorization);
//   userId.then((task) => {

//   });
// };
