'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tasks', 
          [{ description: "Buy milk", createdAt: new Date(), completed: false, priority: 1}, 
           { description: "Buy bread", createdAt: new Date(), completed: false, priority: 2}, 
           { description: "Do exercise", createdAt: new Date(), completed: false, priority: 3}, 
           { description: "Go cycling", createdAt: new Date(), completed: false, priority: 4}, ], 
        {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tasks', null, {});

  }
};
