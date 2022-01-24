const { Sequelize, DataTypes } = require("sequelize");

/*********************CONNEXION SQLITE***************** */
//renommer le fichier groupomania-P7 au lieu de squelize si cela ne fonctionne pas

const sequelize = new Sequelize("sequelize", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./devGoupo.db",
});
sequelize.sync({ force: false }).then(() => {
  console.log("*********************");
  console.log("db sqlite connected");
  console.log("*********************");
});
sequelize
  .authenticate()
  .then(() => console.log("dbconnect"))
  .catch((error) => console.log(error));

const db = {};
db.sequelize = sequelize;
db.Messages = require("./models/messages")(sequelize, DataTypes);
db.Messages = require("./models/comment")(sequelize, DataTypes);
db.Messages = require("./models/commentslikes")(sequelize, DataTypes);
db.Messages = require("./models/likes")(sequelize, DataTypes);
db.Messages = require("./models/messages")(sequelize, DataTypes);
db.Messages = require("./models/user")(sequelize, DataTypes);
module.exports = db;

/********************CONNEXION MYSQL********************* */
/*
const sequelize = new Sequelize("dev.db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("*******************");
    console.log("db mysql connected");
    console.log("*******************");
    //creer des données sur la base
    //       sequelize.query("CREATE DATABASE `test`;").then(([results,metadata])=> {
    //         console.log(`create!!`);
    //     }).catch(error){
    //        console.error('not créate');
    //    }
  })
  .catch((err) => console.log(err));
  const db ={}
  db.sequelize = sequelize;
  db.sequelize.sync({ force: true }).then(() => {
    console.log("*********************");
    console.log("db sql Synced");
    console.log("*********************");
  }).catch(error => console.log(error));
*/
module.exports = sequelize;
