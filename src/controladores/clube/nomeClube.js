const Clube = require('../../modelos/clube')

const nomeClube = async (req, res) => {
    const { nome, novoNome } = req.body
    const usuarioId = req.userId

    try {
        
        const clube = await Clube.findOne({ where: { nome: nome } })
        
        if (!clube) {
        return res.status(404).json({ mensagem: 'Clube não encontrado' })
        }

        if (clube.usuarioId !== usuarioId) {
        return res.status(403).json({ mensagem: 'Você não tem permissão para editar este clube' })
        }

        const dadosAtualizados = { nome: novoNome }

        await Clube.update(dadosAtualizados, { where: { nome: nome } })

        return res.status(200).json({ mensagem: 'Clube atualizado com sucesso' })

    } catch (error) {
        console.error('Erro ao excluir usuário:', error)
        res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message })
    }
}

module.exports = nomeClube
