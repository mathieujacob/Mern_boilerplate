const express = require("express");
const router = new express.Router();
const articles = require("./../models/Article");
// const user = require("./../models/User")

router.get("/", (req, res, next) => {
  console.log("je suis dans le get");
  articles.find()
    .then((articlesDocuments) => {
      console.log("je suis dans le then");
      res.status(200).json(articlesDocuments);
    })
    .catch((error) => {
      console.log("je suis dans le error");
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

router.post("/", (req, res, next) => {
  let { title, author, contenu, publiDate } = req.body;
  console.log(req.body);
  console.log(req.session.currentUser);
  articles
    .create({
      title: title,
      author: author,
      contenu: contenu,
      publiDate: publiDate,
      userId: req.session.currentUser,
    })

    .then((createdArticles) => {
      res.json(createdArticles);
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  let id = req.session.currentUser;
  console.log(id);
  articles
    .findByIdAndDelete(req.params.id)

    .then((deletedarticle) => {
      res.status(200).json({
        message: "The article has been deleted",
      });
    });
  //         .catch((err) => next(err));
  //     }
  //   })
  //   .catch((err) => next(err));
});

module.exports = router;
