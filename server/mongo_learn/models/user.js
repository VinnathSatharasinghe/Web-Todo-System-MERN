const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String },
  password: { type: String },
  list: [{ type: mongoose.Types.ObjectId, ref: "Task" }],
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
