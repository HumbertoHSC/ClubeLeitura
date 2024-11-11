const { DataTypes } = require('sequelize')
const sequelize = require('../conexao')

const Clube = sequelize.define('Clube', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'Clubes'
});

module.exports = Clube;
