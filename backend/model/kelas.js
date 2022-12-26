const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const Kelas = sequelize.define('kelas', {
    uuid_kelas: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    nama_kelas: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
});

module.exports = Kelas;
