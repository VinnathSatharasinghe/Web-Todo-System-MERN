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
    } else {
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
          message: "Login success",
          // others,
          name: user.name,
          email: user.email,
          id: user.id,
          list: user.list,

        });
      }
    }

    // res.status(200).json({ message: "success" });
    // const { password, ...others } = user._doc;
    // res.status(200).json({ others });
    // console.log("ok");
    // res.status(200).json({ message: "success" });

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
    const { id } = req.body;
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      await User.findByIdAndUpdate(req.params.id).then(() =>
        res.status(200).json({ message: "User Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/deletetask/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      await List.findByIdAndUpdate(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/viewuser", async (req, res) => {
  const user = await User.find({ user: User });
  res.status(200).json(user);
});

app.get("/viewtask", async (req, res) => {
  const list = await List.find({ user: User });
  res.status(200).json(list);
});


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
  try {
    const id = req.params.id;
    const user = await UserModel.find({ _id: id });
    res.status(200).json({ user: user });
    console.log(" user id found");
  } catch {
    res.status(200).json({ message: "No one found" });
    console.log("no user related to id");
  }
});


app.listen(3001, () => {
  console.log("Server is Running on PORT - 3001");
});


// app.get("/viewuser/:id", async (req, res) => {
//   const user = await User.find({ user: req.params.id });
//   res.status(200).json({ User: user });
// });

// app.get("/viewuser/:id", async (req, res) => {
//   const id = req.params.id;
//   const list = await UserModel.find({ _id: id });
//   res.status(200).json({ List: list });
// });


// app.get("/viewtask1/:id", async (req, res) => {
//   const list = await List.find({user :req.params.id});
//   res.status(200).json({ List: list});
// });