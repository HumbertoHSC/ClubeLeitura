const Usuario = require('../../modelos/usuario')
const bcrypt = require('bcrypt')

const senha = async (req, res) => {
    const { senhaAtual, senha, confirmarSenha } = req.body
    const usuario_id = req.userId

    try {
        const usuario = await Usuario.findOne({ where: { id: usuario_id } })

        const senhaValida = await bcrypt.compare(senhaAtual, usuario.senha)

        if (!senhaValida) {
            return res.status(401).json({ mensagem: 'Senha atual incorreta!' })
        }

        const senhaHash = await bcrypt.hash(senha, 10)

        const dadosAtualizados = { senha: senhaHash }

        await Usuario.update(dadosAtualizados, { where: { id: usuario_id } })

        return res.status(200).json({ mensagem: 'Senha atualizada com sucesso!' })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
};

module.exports = senha
