const express = require("express");
const router = new express.Router();
const articles = require("./../models/Article");
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

router.post("/", (req, res, next) => {
  let { title, author, contenu, publiDate } = req.body;
  console.log(req.body);
  console.log("je suis dans le post");

  articles
    .create({
    
      title: title,
      author: author,
      contenu: contenu,
      publiDate: publiDate,
      userId: req.session.currentUser,
    
    })
    .then((createdArticles) => {
      console.log("je suis dans le then");
      res.json(createdArticles);
    })
    .catch((err) => next(err));
});

router.patch("/edit/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("hello'");
  articles.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).json({ message: `article updated!` });
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id
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
