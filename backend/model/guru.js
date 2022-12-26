const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const Guru = sequelize.define('guru', {
    uuid_guru: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nip: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    nomor_telp: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
});

module.exports = Guru;
