const express = require('express')
const rotas = express()

const autenticacao = require('./intermediarios/autenticacao')
const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const schemaUser = require('./validacoes/usuario/schemaUser')
const schemaClube = require('./validacoes/clube/schemaClube')
const userController = require('./controladores/usuario/userControladores')
const clubeControladores = require('./controladores/clube/clubeControladores')

rotas.post('/cadastro', validarCorpoReq(schemaUser.cadastro), userController.cadastro)
rotas.post('/login', validarCorpoReq(schemaUser.login), userController.login)

rotas.use(autenticacao)

rotas.patch('/email', validarCorpoReq(schemaUser.email), userController.email)
rotas.patch('/nome', validarCorpoReq(schemaUser.nome), userController.nome)
rotas.patch('/senha', validarCorpoReq(schemaUser.senha), userController.senha)

rotas.delete('/usuario', validarCorpoReq(schemaUser.deletar), userController.deletar)

rotas.post('/clubes', validarCorpoReq(schemaClube.criar), clubeControladores.criar)

rotas.delete('/clubes/:id', validarCorpoReq(schemaClube.deletar), clubeControladores.deletar)

rotas.get('/clubes', clubeControladores.listar)

rotas.patch('/clubes/:id/nome',  validarCorpoReq(schemaClube.nome), clubeControladores.nome)
rotas.patch('/clubes/:id/descricao',  validarCorpoReq(schemaClube.descricao), clubeControladores.descricao)

module.exports = rotas
