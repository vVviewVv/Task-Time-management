const User = require("../models/User");
const Task = require("../models/Task");
const authController = require("./authController");

exports.addTask = async (req, res, next) => {
  const userId = await authController.decodedToken(req.headers.authorization);
  req.body.UserId = userId;
  Task.create(req.body)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getTasks = async (req, res, next) => {
  const userId = await authController.decodedToken(req.headers.authorization);
  Task.find({ UserId: userId })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getTasksByDay = async (req, res, next) => {
  const userId = await authController.decodedToken(req.headers.authorization);
  Task.find({ UserId: userId, DateOfTask: req.body.DateOfTask })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};

exports.editTask = async (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteTask = async (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};
