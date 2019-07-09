'use strict';
var uuid = require('uuid-random');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Todos', 
          [{ id: uuid(), description: "Go to picnick", createdAt: new Date(), completed: false, priority: 1}, 
           { id: uuid(), description: "Buy a new Porche GT3", createdAt: new Date(), completed: false, priority: 2}, 
           { id: uuid(), description: "Drive car on racing", createdAt: new Date(), completed: false, priority: 3}, 
           { id: uuid(), description: "Buy a new Porche GT3, becouse previus car I was broken", createdAt: new Date(), completed: true, priority: 4}, ], 
        {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Todos', null, {});

  }
};
