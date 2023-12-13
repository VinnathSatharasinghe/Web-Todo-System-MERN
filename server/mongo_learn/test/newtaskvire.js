const TodoModel = require("../models/todo");
const { app } = require("../..");

app.put("todo/view/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      body: req.body.body,
      name: req.body.work,
    }
  )
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});
