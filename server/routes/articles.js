const express = require("express");
const router = new express.Router();
const articles = require("./../models/Article");
const uploader = require("./../config/cloudinary");

// const user = require("./../models/User")

router.get("/", (req, res, next) => {
  articles
    .find()
    .then((articlesDocuments) => {
      res.status(200).json(articlesDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  articles
    .findById(req.params.id)

    .then((articlesDocument) => {
      res.status(200).json(articlesDocument);
    })
    .catch(next);
});

router.post("/", uploader.single("photo"), (req, res, next) => {
  let { title, author, contenu, publiDate } = req.body;
  const photo = req.file.path;

  const newArticle = { title, author, contenu, publiDate, photo };

  articles
    .create(newArticle)

    .then((createdArticles) => {
      console.log("je suis dans le then");
      res.json(createdArticles);
    })
    .catch((err) => next(err));
});

router.patch("/edit/:id", uploader.single("photo"), (req, res, next) => {
  req.body.photo = req.file.path;

  articles
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      console.log(req.body);
      console.log(req.params.id);
      res.status(200).json({ message: `article updated!` });
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  articles
    .findByIdAndDelete(req.params.id)

    .then((deletedarticle) => {
      res
        .status(200)
        .json({
          message: "The article has been deleted",
        })
        .catch((err) => next(err));
    });
});

module.exports = router;
