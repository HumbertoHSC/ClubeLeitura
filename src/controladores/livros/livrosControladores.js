const adicionarLivro = require('./adicionarLivro')
const deletar = require('./deletarLivro')
const avaliacao = require('./avaliacao')

const livroControladores = {
  adicionar: adicionarLivro,
  deletar: deletar,
  avaliacao: avaliacao
}

module.exports = livroControladores