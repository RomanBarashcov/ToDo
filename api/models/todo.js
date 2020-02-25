'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        notNull: true
      }
    },

    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },

    completed: DataTypes.BOOLEAN,
    priority: DataTypes.INTEGER

  }, {});

  return Todo;
};