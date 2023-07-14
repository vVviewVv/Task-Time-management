const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/Task");

//for testing
router.get("/", (req, res, next) => {
  Task.find()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
