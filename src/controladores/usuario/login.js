const bcrypt = require('bcrypt')
const Usuario = require('../../modelos/usuario')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senhajwt')

const login = async (req, res) => {
    const { email, senha } = req.body

    try {

        const usuario = await Usuario.findOne({ where: { email } })

        if (!usuario) {
            return res.status(400).json({ mensagem: 'Email ou senha inválidos' })
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: 'Email ou senha inválidos' })
        }

        const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '4h' })

        const usuarioSemSenha = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }

        return res.json({ usuario: usuarioSemSenha, token })

    } catch (error) {
        console.error('Erro ao realizar login:', error)
        res.status(500).json({ mensagem: 'Erro ao realizar login, tente novamente mais tarde' })
    }
}

module.exports = login
