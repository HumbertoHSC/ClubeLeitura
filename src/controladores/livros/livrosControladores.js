const adicionarLivro = require('./adicionarLivro')
const deletar = require('./deletarLivro')

const livroControladores = {
  adicionar: adicionarLivro,
  deletar: deletar
}

module.exports = livroControladores