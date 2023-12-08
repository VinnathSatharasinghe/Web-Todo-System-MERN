const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: String,
  work: String,
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;