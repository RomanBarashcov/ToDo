'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    descriptions: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    completed: DataTypes.BOOLEAN,
    priority: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};