const Avaliacao = require('../../modelos/avaliacao')

const avaliacao = async (req, res) => {
    const { titulo, nota, opiniao } = req.body
    const usuarioId = req.userId

    try {
        const novaAvaliacao = await Avaliacao.create({
            titulo,
            usuarioId,
            nota,
            opiniao
        })

        return res.status(201).json(novaAvaliacao)

    } catch (error) {
        console.error('Erro ao registrar avaliação:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = avaliacao
