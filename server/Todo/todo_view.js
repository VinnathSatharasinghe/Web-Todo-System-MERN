const TodoModel = require("../models/Todo");
const { app } = require("..");

app.put("todo/view/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndUpdate(
    { _id: id },
    {
      work: req.body.work,
    }
  )
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

