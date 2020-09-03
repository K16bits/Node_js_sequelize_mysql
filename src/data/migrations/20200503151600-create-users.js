'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Pessoas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoas');
  }
};
