const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const SPPModel = sequelize.define('spp', {
    uuid_spp: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    tanggal_bayar: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jumlah_bulan_dibayar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jumlah_bayar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = SPPModel;
