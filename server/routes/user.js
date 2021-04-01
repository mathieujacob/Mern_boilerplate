const express = require("express");
const router = new express.Router();
const user = require("./../models/User");
const uploader = require("./../config/cloudinary");

//user listing

router.get("/", (req, res, next) => {
  user
    .find()
    .select("-password")
    .populate("article", "title")
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
    .populate("article")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      next(error);
    });
});

router.patch("/edit/:id", uploader.single("avatar"), (req, res, next) => {
  
 
  req.body.avatar = req.file.path;

  user
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
    
      res.json({ message: `user ${req.params.id} is updated.` });
    })

    .catch((error) => {
      next(error);
    });
});

router.patch("/addFaves/:id", (req, res, next) => {
 
  const id = req.params.id

  console.log("------")
  console.log(id)
   
  
  user.findByIdAndUpdate(id, {favoriteCryptos: "ETH"}   )
  .then(() =>{
    res.json({message: 'cryptos updated'})
  })
    .catch((error) => {
      next(error);
    });
  
  

});


router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  user
    .findByIdAndDelete(req.params.id)

    .then((deleteduser) => {
      res
        .status(200)
        .json({
          message: "The user has been deleted",
        })
        .catch((error) => {
          next(error);
        });
    });
});

module.exports = router;
