const cadastro = require('./cadastro')
const login = require('./login')
const deletar = require('./deletar')
const email = require('./email')
const nome = require('./nome')
const senha = require('./senha')

const userController = {
  cadastro,
  login,
  deletar,
  email,
  nome,
  senha
}

module.exports = userController
