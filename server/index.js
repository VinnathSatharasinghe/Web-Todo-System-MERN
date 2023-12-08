const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const TodoModel = require("./models/Todo")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vinnath:acerlaptop111@cluster0.acbjy23.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  EmployeeModel.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  EmployeeModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("nopass");
      }
    } else {
      res.json("null");
    }
  });
});


app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
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
    .catch((err) => res.json(err))
});


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


app.delete("/deleteemployee/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});


app.get("/todo/find", (req, res) => {
  TodoModel.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.json(err));
});

app.post("/todo/work", (req, res) => {
  TodoModel.create(req.body)
    .then((todos) => res.json(todos))
    .catch((err) => res.json(err));
});

app.delete("/todo/delete/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

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

app.put("/todo/view/:id", (req, res) => {
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



app.listen(3001, () => {
  console.log("Server is Running !!");
});
