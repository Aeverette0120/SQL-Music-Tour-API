'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages_events', {
      stages_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages_events');
  }
};