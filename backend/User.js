const { Model,DataTypes } = require('sequelize');
const sequelize = require('./database');


class User extends Model {}

User.init({
      firstname: {
          type:DataTypes.STRING
      },
      lastname: {
          type:DataTypes.STRING
      },
      email: {
          type:DataTypes.STRING
      },
      password: {
          type:DataTypes.STRING
      },
      bio: {
        type:DataTypes.STRING
      },
      avatar: {
        type:DataTypes.STRING
      },
      isadmin: {
          type:DataTypes.BOOLEAN
      }
    },
      {
          sequelize,
          modelName: 'user'

})

module.exports = User;