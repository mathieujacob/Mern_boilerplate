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
    photo :{type:String,
    default:"https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1911&q=80"}
    
});

const article = mongoose.model("article", articleSchema);

module.exports = article;
