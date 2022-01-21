const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupomania-P7', 'user', 'pass',{
    dialect: 'sqlite',
    storage: './dev.db'

})


module.exports = sequelize;