const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'tpq_baitussalam',
    'root',
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

module.exports = sequelize;
