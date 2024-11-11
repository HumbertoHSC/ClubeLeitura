const express = require('express')
const rotas = express()

const autenticacao = require('./intermediarios/autenticacao')
const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const schemaUser = require('./validacoes/usuario/schemaUser')
const schemaClube = require('./validacoes/clube/schemaClube')
const schemaLivro = require('./validacoes/livro/schemaLivro')

const userController = require('./controladores/usuario/userControladores')
const clubeControladores = require('./controladores/clube/clubeControladores')
const livroControladores = require('./controladores/livros/livrosControladores')

rotas.post('/cadastro', validarCorpoReq(schemaUser.cadastro), userController.cadastro)
rotas.post('/login', validarCorpoReq(schemaUser.login), userController.login)

rotas.use(autenticacao)

rotas.patch('/email', validarCorpoReq(schemaUser.email), userController.email)
rotas.patch('/nome', validarCorpoReq(schemaUser.nome), userController.nome)
rotas.patch('/senha', validarCorpoReq(schemaUser.senha), userController.senha)

rotas.delete('/usuario', validarCorpoReq(schemaUser.deletar), userController.deletar)

rotas.post('/clubes', validarCorpoReq(schemaClube.criar), clubeControladores.criar)
rotas.post('/livro/adicionar', validarCorpoReq(schemaLivro.adicionarLivro), livroControladores.adicionar)

rotas.delete('/clubes', validarCorpoReq(schemaClube.deletar), clubeControladores.deletar)
rotas.delete('/livro/deletar', validarCorpoReq(schemaLivro.deletar), livroControladores.deletar)

rotas.get('/clubes', clubeControladores.listar)

rotas.patch('/clubes/nome',  validarCorpoReq(schemaClube.nome), clubeControladores.nomeClube)
rotas.patch('/clubes/descricao',  validarCorpoReq(schemaClube.descricao), clubeControladores.descricao)


module.exports = rotas
