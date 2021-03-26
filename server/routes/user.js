const express = require("express");
const router = new express.Router();
const user = require('./../models/User')

//user listing
router.get("/", (req, res, next) => {
    user
      .find()
      .then((userDocuments) => {
        res.status(200).json(userDocuments);
      })
      .catch((error) => {
        next(error);
      });
  });









module.exports = router;