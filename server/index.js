const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs");
const cors = require("cors");
app.use(cors());

const User = require("./mongo_learn/models/user");
const List = require("./mongo_learn/models/todo");
const TodoModel = require("./mongo_learn/models/todo");
const UserModel = require("./mongo_learn/models/user");

// const auth = require("./mongo_learn/auth(index)");
// app.use("/api/v1", auth);

mongoose.connect(
  "mongodb+srv://vinnath:acerlaptop111@cluster0.acbjy23.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.send("helxxlo");
});

app.post("/singup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ name, email, password: hashpassword });
    await user.save().then(() => {
      res.status(200).json({ user: user });
    });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

app.post("/logingg", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (!user) {
      res.status(400).json({ message: "nouser" });
      console.log("no user");
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "nopass" });
      console.log("no pass");
    } else {
      const { password, ...others } = user._doc;
      res.status(200).json({
        message: "success",
        name: user.name,
        email: user.email,
        id: user.id,
        list: user.list,

        // others,
        // user: {
        //   name: user.name,
        //   email: user.email,
        //   id: user._id,
        // },
      });

      // res.status(200).json({
      //   message: "success",
      //   others,
      // });

      // res.status(200).json({ message: "success" });
      // const { password, ...others } = user._doc;
      // res.status(200).json({ others });
      // console.log("ok");
      // res.status(200).json({ message: "success" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something Wrong" });
    console.log("something error");
  }
});

app.post("/addtask", async (req, res) => {
  try {
    const { title, body, name } = req.body;
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      const list = new List({ title, body, user11: existingUser });
      const { ...others } = existingUser._doc;
      await list.save().then(() =>
        res.status(200).json({
          message: "success11",
          title: list.title,
          body: list.body,
          email: existingUser.email,
          id: existingUser._id,
          name: existingUser.name,
        })
      );
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});


app.put("/updatetask/:id", async (req, res) => {
  try {
    const { title, body, name } = req.body;
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list
        .save()
        .then(() => res.status(200).json({ message: "Task Updated!" }));
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deletetask/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      await List.findByIdAndUpdate(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/viewuser", async (req, res) => {
  const user = await User.find({ user: User });
  res.status(200).json(user);
});

// app.get("/viewtask1", async (req, res) => {
//   const list = await List.find({ user: User });
//   res.status(200).json(list);
// });

// app.get("/viewuser/:id", async (req, res) => {
//   const user = await User.find({ user: req.params.id });
//   res.status(200).json({ User: user });
// });

// app.get("/viewuser/:id", async (req, res) => {
//   const id = req.params.id;
//   const list = await UserModel.find({ _id: id });
//   res.status(200).json({ List: list });
// });

app.get("/viewtask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const list = await TodoModel.find({ _id: id });
    res.status(200).json({ list: list });
    console.log("id found");
  } catch {
    res.status(200).json({ message: "No one found" });
    console.log("mo one related to id");
  }
});

app.get("/viewuser/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const user = await UserModel.find({ _id: id });
    res.status(200).json({ user: user });
    console.log(" user id found");

  } catch {
    res.status(200).json({ message: "No one found" });
    console.log("no user related to id");
  }

});



// app.get("/viewtask1/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;

//     // Assuming your List model has a 'user' field representing the user ID
//     const list = await List.find({ user: userId });

//     res.status(200).json({ List: list });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/viewtask1/:id", async (req, res) => {
//   const list = await List.find({user :req.params.id});
//   res.status(200).json({ List: list});
// });

app.get("/viewtask2/:id", async (req, res) => {
  const list = await List.find({ user11: req.params.id }).sort({
    createdAt: -1,
  });
  if (list.length !== 0) {
    res.status(200).json({ list: list });
  } else {
    res.status(200).json({ message: "No Tasks In The List" });
  }
});

app.listen(3001, () => {
  console.log("Server is Running on PORT - 3001");
});




























// app.get("/todo", (req, res) => {
//   TodoModel.find()
//     .then((todos) => res.json(todos))
//     .catch((err) => res.json(err));
// });

// app.post("/todo/find/:id", (req, res) => {
//   const id = req.params.id;
//   TodoModel.create({_id: id})
//     .then((todos) => res.json(todos))
//     .catch((err) => res.json(err));
// });

// app.post("/login", (req, res) => {
//   const { name, password } = req.body;
//   UserModel.findOne({ name: name }).then((user) => {
//     if (user) {
//       if (user.password === password) {
//         res.json("success");
//       } else {
//         res.json("nopass");
//       }
//     } else {
//       res.json("null");
//     }
//   });
// });

// app.post("/register", (req, res) => {
//   UserModel.create(req.body)
//     .then((employees) => res.json(employees))
//     .catch((err) => res.json(err));
// });

// app.put("/update/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndUpdate(
//     { _id: id },
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       work: req.body.work,
//     }
//   )
//     .then((employee) => res.json(employee))
//     .catch((err) => res.json(err))
// });

// app.put("/view/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndUpdate(
//     { _id: id },
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       work: req.body.work,
//     }
//   )
//     .then((employee) => res.json(employee))
//     .catch((err) => res.json(err));
// });

// app.delete("/deleteemployee/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndDelete({ _id: id })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// app.get("/todo/find/view/:id", (req, res) => {
//   const id = req.params.id;
//   TodoModel.find({_id: id})
//     .then((todos) => res.json(todos))
//     .catch((err) => res.json(err));
// });

// app.post("/todo/add", (req, res) => {
//   TodoModel.create(req.body)
//     .then((todos) => res.json(todos))
//     .catch((err) => res.json(err));
// });

// app.delete("/todo/delete/:id", (req, res) => {
//   const id = req.params.id;
//   TodoModel.findByIdAndDelete({ _id: id })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// app.put("/todo/update/:id", (req, res) => {
//   const id = req.params.id;
//   TodoModel.findByIdAndUpdate(
//     { _id: id },
//     {
//       name: req.body.name,
//       work: req.body.work,
//     }
//   )
//     .then((todo) => res.json(todo))
//     .catch((err) => res.json(err));
// });

// app.put("/todo/view/:id", (req, res) => {
//   const id = req.params.id;
//   TodoModel.findByIdAndUpdate(
//     { _id: id },
//     {
//       name: req.body.name,
//       work: req.body.work,
//     }
//   )
//     .then((todo) => res.json(todo))
//     .catch((err) => res.json(err));
// });
