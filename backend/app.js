'use strict';
const express = require("express");
const path = require("path");
const helmet = require("helmet");
//const mysql = require("mysql");
const app = express();
require("dotenv").config();

const userRoute = require("./routes/userRoute");




app.use(helmet());
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);





module.exports= app;


