const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const LogsModel = sequelize.define('logs', {
    uuid_logs: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    waktu: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
});

module.exports = LogsModel;
