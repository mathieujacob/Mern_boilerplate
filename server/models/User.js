const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  avatar: String,
  // myCrypto: {
  //   type: Schema.Types.ObjectId,
  //   ref: "apicall",
  // },
  myCrypto:String,
  article: [""],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
