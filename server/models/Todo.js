const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: { type: String},
  work: [{ type: String}],
});

const TodoModel = mongoose.model("", TodoSchema);
module.exports = TodoModel;