const User = require("../models/User");
const authController = require("./authController");

exports.getUser = async (req, res, next) => {
  const userId = await authController.decodedToken(req.headers.authorization);

  User.find({ _id: userId })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};
