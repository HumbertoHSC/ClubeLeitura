const schemaAdicionarLivro = require('./schemaAdicionarLivro')
const schemaDeletar = require('./schemaDeletarLivro')
const schemaAvaliacao = require('./schemaAvaliacao')

const schemaLivro = {
  adicionar: schemaAdicionarLivro,
  deletar: schemaDeletar,
  avaliacao: schemaAvaliacao

}

module.exports = schemaLivro
