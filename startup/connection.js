const Sequelize = require('sequelize');
const winston = require('winston');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    winston.info('Connection has been established successfully.');
  })

  module.exports = sequelize;