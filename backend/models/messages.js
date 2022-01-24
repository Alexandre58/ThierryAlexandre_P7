'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Messages.init({
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    attachment: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    dateMessages: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};