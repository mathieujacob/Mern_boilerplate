const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  author: String,
  contenu:String,
  publiDate: Date,
  //   userId:{type: Schema.Types.ObjectId,
  //     ref: "apicall",}
  userId: {type: Schema.Types.ObjectId,
    ref: "User",},
});

const article = mongoose.model("article", articleSchema);

module.exports = article;
