const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/database.sqlite' // Local onde o banco será salvo
});

module.exports = sequelize;