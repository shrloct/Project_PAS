const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const event = sequelize.define('event', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_guru: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {

    }
});