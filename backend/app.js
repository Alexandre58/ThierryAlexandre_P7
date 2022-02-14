// Imports
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const userRoute = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");
const likeRoute = require("./routes/likeRoute");
const commentRoute = require("./routes/commentRoute");
require("dotenv").config();
const morgan = require("morgan");
const auth = require("./middlewares/auth");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

/*management of the POST request coming from the front-end application, extraction of the JSON body*/
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

/*
app.use("*", (req, res) => {
  res.json({ error: 404 });
});
*/

app.use("tokenRecup", auth, (req, res) => {
  res.status(200).json(res);
});

//***************************************************USER
app.use("/api", userRoute);
//**************************************************POSTS
app.use("/api", messageRoute);
//**************************************************LIKES
app.use("/api", likeRoute);
//**************************************************COMMENTS
app.use("/api", commentRoute);

//images
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
