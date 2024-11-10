const criar = require('./criar')
const descricao = require('./descricao')
const deletar = require('./deletar')
const listar = require('./listar')
const nomeClube = require('./nomeClube')

const clubeControladores = {
    criar,
    descricao,
    deletar,
    listar,
    nomeClube
}

module.exports = clubeControladores
