const { DataTypes } = require('sequelize');
const sequelize = require('../conexao');

const Livro = sequelize.define('Livro', {
  
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clube: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'livros'
});

module.exports = Livro;
