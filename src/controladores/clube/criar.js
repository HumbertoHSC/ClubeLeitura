const Clube = require('../../modelos/clube')

const criar = async (req, res) => {
    const { nome, descricao } = req.body
    const usuario_id = req.userId

    try {
    
        const novoClube = await Clube.create({
            nome,
            descricao,
            usuario_id
        })

        return res.status(201).json(novoClube)

    } catch (error) {
        console.error('Erro ao criar clube:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = criar
