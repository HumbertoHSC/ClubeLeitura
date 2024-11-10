const Clube = require('../../modelos/clube')

const criar = async (req, res) => {
    const { nome, descricao } = req.body
    const usuarioId = req.userId

    try {

        const clubeExistente = await Clube.findOne({ where: { nome } })

        if (clubeExistente) {
            return res.status(400).json({ mensagem: 'nome informado já está cadastrado!' })
        }
    
        const novoClube = await Clube.create({
            nome,
            descricao,
            usuarioId
        })

        return res.status(201).json(novoClube)

    } catch (error) {
        console.error('Erro ao criar clube:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = criar
