const schemaAdicionarLivro = require('./schemaAdicionarLivro')
const schemaDeletar = require('./schemaDeletarLivro')

const schemaLivro = {
  adicionar: schemaAdicionarLivro,
  deletar: schemaDeletar
}

module.exports = schemaLivro
