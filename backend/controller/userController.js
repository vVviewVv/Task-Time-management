const User = require("../models/User");
const authController = require("./authController");

exports.getUser = async (req, res, next) => {
  const userId = await authController.decodedToken(req.headers.authorization);

  User.findById(userId)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUserById = async (req, res, next) => {
  User.findById(req.params.id)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};
