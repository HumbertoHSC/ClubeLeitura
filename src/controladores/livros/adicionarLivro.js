const Livro = require('../../modelos/livro')

const adicionarLivro = async (req, res) => {
    const { titulo, autor, clube } = req.body
    const usuarioId = req.userId

    try {

        const novoLivro = await Livro.create({
            titulo,
            autor,
            clube,
            usuarioId
        })

        return res.status(201).json(novoLivro)

    } catch (error) {
        console.error('Erro ao criar tarefa:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports =  adicionarLivro
