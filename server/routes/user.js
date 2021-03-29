const express = require("express");
const router = new express.Router();
const user = require("./../models/User");
const uploader = require("./../config/cloudinary");

//user listing

router.get("/", (req, res, next) => {
  user
    .find()
    .select("-password")
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  user
    .findById(req.params.id)
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

router.patch("/edit/:id", (req, res, next) => {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.json({ message: `user ${req.params.id} is updated.` });
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  user
    .findByIdAndDelete(req.params.id)

    .then((deleteduser) => {
      res.status(200).json({
        message: "The user has been deleted",
      });
    });
});

module.exports = router;
