const express = require('express')
const rotas = express()

const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const schemaClube = require('./validacoes/clube/schemaClube')
const clubeControladores = require('./controladores/clube/clubeControladores')

rotas.post('/clubes', validarCorpoReq(schemaClube.criar), clubeControladores.criar)

rotas.delete('/clubes/:id', validarCorpoReq(schemaClube.deletar), clubeControladores.deletar)

rotas.get('/clubes', clubeControladores.listar)

rotas.patch('/clubes/:id/nome',  validarCorpoReq(schemaClube.nome), clubeControladores.nome)
rotas.patch('/clubes/:id/descricao',  validarCorpoReq(schemaClube.descricao), clubeControladores.descricao)

module.exports = rotas