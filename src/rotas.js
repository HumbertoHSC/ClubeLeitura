const express = require('express')
const rotas = express()

const autenticacao = require('./intermediarios/autenticacao')
const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const schemaUser = require('./validacoes/usuario/schemaUser')
const userController = require('./controladores/usuario/userControladores')

rotas.post('/cadastro', validarCorpoReq(schemaUser.cadastro), userController.cadastro)
rotas.post('/login', validarCorpoReq(schemaUser.login), userController.login)

rotas.use(autenticacao)

rotas.patch('/email', validarCorpoReq(schemaUser.email), userController.email)
rotas.patch('/nome', validarCorpoReq(schemaUser.nome), userController.nome)
rotas.patch('/senha', validarCorpoReq(schemaUser.senha), userController.senha)

rotas.delete('/usuario', validarCorpoReq(schemaUser.deletar), userController.deletar)

module.exports = rotas
