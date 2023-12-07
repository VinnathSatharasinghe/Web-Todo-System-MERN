const EmployeeModel = require("./models/Employee");
const { app } = require(".");

app.put("/view/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
  )
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

