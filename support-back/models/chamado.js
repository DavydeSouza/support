const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chamado = sequelize.define('Chamado', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    prioridade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Baixa', 'Média', 'Alta']],
        },
    },
});

module.exports = Chamado;