const { Sequelize } = require("sequelize");
require('dotenv').config()
const {DB_NAME, DB_USER, DB_PASSWORD} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
})

module.exports = sequelize