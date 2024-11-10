const criar = require('./criar')
const descricao = require('./descricao')
const deletar = require('./deletar')
const listar = require('./listar')
const nome = require('./nome')

const clubeControladores = {
    criar,
    descricao,
    deletar,
    listar,
    nome
}

module.exports = clubeControladores
