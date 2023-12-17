const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String},
    body: { type: String },
    user11: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;
