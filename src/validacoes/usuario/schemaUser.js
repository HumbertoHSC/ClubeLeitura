const schemaCadastro = require('./schemaCadastro')
const schemaLogin = require('./schemaLogin')
const schemaEmail = require('./schemaEmail')
const schemaNome = require('./schemaNome')
const schemaSenha = require('./schemaSenha')
const schemaDeletar = require('./schemaDeletar')

const schemaUser = {
  cadastro: schemaCadastro,
  login: schemaLogin,
  email: schemaEmail,
  nome: schemaNome,
  senha: schemaSenha,
  deletar: schemaDeletar
}

module.exports = schemaUser
