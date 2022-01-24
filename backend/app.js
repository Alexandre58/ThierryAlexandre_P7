'use strict';
const express = require("express");
//const mysql = require("mysql");
const app = express();
require("dotenv").config();

const messagesRoute = require('./routes/messagesRoutes.js');//route post.js

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/messages', messagesRoute);

app.get('/',(res,req)=> {
    req.send('hello');
});


module.exports= app;


