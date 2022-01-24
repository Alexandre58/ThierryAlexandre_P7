'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentsLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentsLikes.init({
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    userLike: DataTypes.BOOLEAN,
    userDislike: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CommentsLikes',
  });
  return CommentsLikes;
};