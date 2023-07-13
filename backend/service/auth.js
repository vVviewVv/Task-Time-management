const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "view";

router.post("/register", function (req, res, next) {
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
});

router.post("/login", function (req, res, next) {
  User.findOne({ Email: req.body.Email })
    .then((user) => {
      bcrypt.compare(req.body.Password, user.Password, function (err, result) {
        if (result) {
          var token = jwt.sign({ Email: user.Email }, secret, {
            expiresIn: "1h",
          });
          res.json({ user, token });
        } else res.status(401).send("Login failed");
      });
    })
    .catch((err) => {
      res.status(404).send("Email not found");
    });
});

router.post("/", function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    res.json({ decoded });
    res.status(200).send(decoded);
  } catch (err) {
    res.status(498).send(err);
  }
});

module.exports = router;
