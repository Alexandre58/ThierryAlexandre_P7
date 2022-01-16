const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupomania-database', 'user', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'

})

module.exports = sequelize;