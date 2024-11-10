const schemaCriar = require('./schemaCriar')
const schemaNome = require('./schemaNomeClube')
const schemaDescricao = require('./schemaDescricao')
const schemaDeletar = require('./schemaDeletarClube')

const schemaClube = {
  criar: schemaCriar,
  nome: schemaNome,
  descricao: schemaDescricao,
  deletar: schemaDeletar
}

module.exports = schemaClube
