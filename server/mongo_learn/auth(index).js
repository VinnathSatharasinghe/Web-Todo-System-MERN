// test don't 


const express = require("express").Router();
const bcrypt = require("bcryptjs")
const User = require("./models/user");
const List = require("./models/todo");


router.post("/register", async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User ({ name, email, password: hashpassword });
        await user.save().then(() => {
            res.status(200).json({ user: user});
        });
    }
    catch (error) {
        res.status(400).json({ message: "User Already Exists"});
    }    
  });


  router.post("/singin", async (req,res) => {
    try {
        const user = await User.findOne({ name: req.body.name});
        if(!user) {
            res.status(400).json({ message: "Please Sing Up First"});
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Password is Not Correct"});
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others });

    } catch (error) {
        res.status(400).json({ message: "User Already Exists"});
    }
  });





  router.post("/addTask", async (req, res) => {
    try{
        const { title, body, name } = req.body;
        const existingUser = await List.findOne({ name });
        if (existingUser) {
            const todo = new todo({ title, body, user: existingUser});
            await todo.save().then(() => res.status(200).json({todo}));
            existingUser.todo.push(todo);
            existingUser.save();
        }
    }
    catch (error) {
        res.status(400).json({ message: "User Already Exists"});
    }    
  });


module.exports = router;