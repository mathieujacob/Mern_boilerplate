const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const Article = require("./../models/Article");
const { title } = require("process");

const bcryptSalt = 10;

require("./../config/dbConnection");

let articleDocs = [
  new Article({
    title: "The importance of being a Homie",
    author: "bouba Sidibe",
    contenu: "What it is Homeboy?",
    publiDate: "1987-09-28",
    // userId: userDocs[0]._id,
    photo:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1911&q=80",
  }),
  new Article({
    title: "Teach you how to dougie",
    author: "Mathieu Jacob",
    contenu:
      "It go, right foot up, left foot slide Left foot up, right foot slide Basically, I'm saying either way, we 'bout to slide, ayy Cant let this one slide, ayy",
    publiDate: "1995-09-28",
    // userId: userDocs[1]._id,
    photo:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1911&q=80",
  }),
];

let userDocs = [
  new User({
    userName: "Bouba",
    email: "boobs@boobs.com",
    password: bcrypt.hashSync("boobs", bcrypt.genSaltSync(bcryptSalt)),
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    myCrypto: "doki",
    article: articleDocs[0]._id,
  }),
  new User({
    userName: "Mat",
    email: "Mat@mat.com",
    password: bcrypt.hashSync("mat", bcrypt.genSaltSync(bcryptSalt)),
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    myCrypto: "okay",
    article: articleDocs[1]._id,
  }),
];

Promise.all([User.deleteMany(), Article.deleteMany()])
  .then(() => {
    console.log("All Users, and Articles have been deleted");

    return Promise.all([User.create(userDocs), Article.create(articleDocs)]);
  })
  .then(() => {
    console.log(userDocs);
    console.log(articleDocs);

    console.log(`${userDocs.length} users created`);
    console.log(`${articleDocs.length} articles created`);

    for (let i = 0; i < articleDocs.length; i++) {
      const userId = userDocs[i]._id;
      const articleId = articleDocs[i]._id;
      console.log(userId);
      Article.findByIdAndUpdate(articleId, { userId: userId }).then((toto) => {
        console.log(toto);
      })
      

    }


  })
  .catch((err) => {
    mongoose.disconnect();
    throw err;
  });
