const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const User = sequelize.define('user', {
    uuid_user: {
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
    tempatLahir: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tanggalLahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    nomor_telp: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(1024),
        allowNull: false,
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = User;
