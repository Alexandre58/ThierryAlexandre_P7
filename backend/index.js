/*****************import express**************** */
const express = require("express");
const sequelize = require('./database');
const User = require("./User");
sequelize.sync()
.then(()=>{
    console.log('******************************');
    console.log('database is ready');
    console.log('******************************');
});

const app = express();
/**
 * middleware express.json replace bodu-parser
 */
app.use(express.json());
  /******************************************************************************* */
 app.post('/users', async(req, res)=> {
    await  User.create(req.body)
      .then(()=> {
          res.send('user is inserted');
      })
  })

app.listen(process.env.SERVER_CONNECT,()=> {
    console.log("app is running");
});