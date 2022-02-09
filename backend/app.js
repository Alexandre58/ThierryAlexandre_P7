// Imports
const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const userRoute = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");
const likeRoute = require("./routes/likeRoute");
const commentRoute = require("./routes/commentRoute");
require("dotenv").config();
const morgan = require('morgan')
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
/*management of the POST request coming from the front-end application, extraction of the JSON body*/
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
//***************************************************USER
app.use("/api/", userRoute);
//**************************************************POSTS
app.use("/api/", messageRoute);
//**************************************************LIKES
app.use("/api/", likeRoute);
//**************************************************COMMENTS
app.use("/api/", commentRoute);



//images
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("*", (req, res) => {
  res.json({ error: 404 });
});

module.exports = app;
