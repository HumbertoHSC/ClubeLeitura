const Usuario = require('../../modelos/usuario')

const email = async (req, res) => {
    const { email } = req.body
    const usuario_id = req.userId

    try {
        const emailExistente = await Usuario.findOne({ where: { email } })

        if (emailExistente) {
            return res.status(400).json({ mensagem: 'E-mail informado já está cadastrado!' })
        }

        const dadosAtualizados = { email: email }

        await Usuario.update(dadosAtualizados, { where: { id: usuario_id } })

        return res.status(200).json({ mensagem: 'E-mail atualizado com sucesso!' })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = email
