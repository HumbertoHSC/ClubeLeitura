const { DataTypes } = require('sequelize')
const sequelize = require('../conexao')

const Avaliacao = sequelize.define('Avaliacao', {
    nome: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    opiniao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Avaliacao',
});

module.exports = Avaliacao;