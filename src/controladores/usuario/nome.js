const Usuario = require('../../modelos/usuario')

const nome = async (req, res) => {
    const { nome } = req.body;
    const usuario_id = req.userId

    try {

        const dadosAtualizados = { nome: nome }

        await Usuario.update(dadosAtualizados, { where: { id: usuario_id } })

        return res.status(200).json({ mensagem: 'Nome atualizado com sucesso!' })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = nome
