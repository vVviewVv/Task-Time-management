const User = require("../models/User");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const secret = "view";

exports.register = async (req, res, next) => {
  bcrypt.hash(req.body.Password, saltRounds, function (err, hash) {
    req.body.Password = hash;
    User.create(req.body)
      .then((task) => {
        res.json(task);
      })
      .catch((err) => {
        next(err);
      });
  });
};

exports.login = async (req, res, next) => {
  User.findOne({ Email: req.body.Email })
    .then((user) => {
      bcrypt.compare(req.body.Password, user.Password, function (err, result) {
        if (result) {
          var token = jwt.sign({ _id: user._id }, secret, {
            expiresIn: "1h",
          });
          res.json({ user, token });
        } else res.status(401).send("Login failed");
      });
    })
    .catch((err) => {
      res.status(404).send("Email not found");
    });
};

exports.checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    res.status(200).send(decoded);
  } catch (err) {
    res.status(498).send(err);
  }
};

exports.decodedToken = async (req, res) => {
  const token = req.split(" ")[1];
  const decoded = jwt.verify(token, secret, (err, verifiedJwt) => {
    if (err) {
    } else {
      return verifiedJwt._id;
    }
  });
  return decoded;
};
