const Usuario = require('../../modelos/usuario')
const bcrypt = require('bcrypt')

const excluir = async (req, res) => {
  const { email, senha } = req.body
  const usuarioId = req.userId

  try {
    const usuario = await Usuario.findByPk(usuarioId)

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' })
    }

    if (email !== usuario.email) {
      return res.status(403).json({ mensagem: 'Você só pode excluir sua própria conta' })
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
    
    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: 'Senha inválida' })
    }

    await usuario.destroy()

    res.status(200).json({ mensagem: 'Usuário excluído com sucesso' })

  } catch (error) {
    console.error('Erro ao excluir usuário:', error)
    res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message })
  }
}

module.exports = excluir
