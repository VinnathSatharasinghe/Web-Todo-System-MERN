const TodoModel = require("../models/Todo");
const { app } = require("..");

app.put("/todo/update/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      work: req.body.work,
    }
  )
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});
