const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
});

const UserModel = mongoose.model("", UserSchema);
module.exports = UserModel;
