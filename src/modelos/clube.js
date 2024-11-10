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
  }
})

module.exports = Clube
