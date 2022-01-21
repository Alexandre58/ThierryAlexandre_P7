/*****************import express**************** */
const express = require("express");
/*****************file.env********************* */
require("dotenv").config();
const sequelize = require("./database");
const User = require("./models/User");
sequelize.sync({ force: false }).then(() => {
  console.log("******************************");
  console.log("database is ready");
  console.log("******************************");
});

const app = express();
/**
 * middleware express.json replace bodu-parser
 */
app.use(express.json());
/**************************mettre a jour l'user get post put delete***************************************************** */
//post one user
app.post("/api/users", async (req, res) => {
  // const user = await  User.create(req.body);
  // await user.save();
  // res.send('user is inserted');
  const { firstname, lastname, email, password, bio, avatar, isadmin } =
    req.body;
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      bio,
      avatar,
      isadmin,
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
});
//get all users
app.get("/api/users", async (req, res) => {
  User.findAll().then(fetchedData => {
      res.json(fetchedData);
  })
/*  const users = await User.findAll();
  res.send(users);*/
});
//get one user
app.get("/api/users/:id", async (req, res) => {
  const requestId = req.params.id;
  const user = await User.findOne({ where: { id: requestId } });
  res.send(user);
});
//put user id
app.put("/api/users/:id", async (req, res) => {
  const requestId = req.params.id;
  const user = await User.findOne({ where: { id: requestId } });
  user.firstname = req.body.firstname;
  await user.save();
  res.send("updated");
});
//delete user id
app.delete("/api/users/:id", async (req, res) => {
  const requestId = req.params.id;
  await User.destroy({ where: { id: requestId } });
  res.send("removed");
});

module.exports = app;
