'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories',
      [
        {
          name: 'visited',
          image: null,
          createdAt: new Date(),
          updateAt: new Date()
        },
        {
          name: 'in-sale',
          image: null,
          createdAt: new Date(),
          updateAt: new Date()
        }
      ], 
        {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
