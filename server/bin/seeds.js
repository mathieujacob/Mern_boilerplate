const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const Article = require("./../models/Article");

const bcryptSalt = 10;

require("./../config/dbConnection");

let userDocs = [
  new User({
    userName: "Bouba",
    email: "boobs@boobs.com",
    password: bcrypt.hashSync("boobs", bcrypt.genSaltSync(bcryptSalt)),
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    myCrypto: "doki",
    article: ["article1", "article2", "article666"],
  }),
  new User({
    userName: "Mat",
    email: "Mat@mat.com",
    password: bcrypt.hashSync("mat", bcrypt.genSaltSync(bcryptSalt)),
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    myCrypto: "okay",
    article: ["article1", "article2", "article666"],
  }),
];

let articleDocs = [
  new Article({
    title: "The importance of being a Homie",
    author: "bouba Sidibe",
    contenu: "What it is Homeboy?",
    publiDate: "1987-09-28",
    userId: userDocs[0]._id,
  }),
  new Article({
    title: "Teach you how to dougie",
    author: "Mathieu Jacob",
    contenu:
      "It go, right foot up, left foot slide Left foot up, right foot slide Basically, I'm saying either way, we 'bout to slide, ayy Cant let this one slide, ayy",
    publiDate: "1995-09-28",
    userId: userDocs[1]._id,
  }),
];

Promise.all([User.deleteMany(), Article.deleteMany()])
  .then(() => {
    console.log("All Users, and Articles have been deleted");

    return Promise.all([User.create(userDocs), Article.create(articleDocs)]);
  })
  .then(() => {
    console.log(`${userDocs.length} users created`);
    console.log(`${articleDocs.length} articles created`);
    
    mongoose.disconnect();
  })
  .catch((err) => {
    mongoose.disconnect();
    throw err;
  });
