const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('project_event', 'root', '', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
})

module.exports = sequelize