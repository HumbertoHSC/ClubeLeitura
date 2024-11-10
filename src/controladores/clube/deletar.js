const Clube = require('../../modelos/clube')

const deletar = async (req, res) => {
    const { nome } = req.body
    const usuarioId = req.userId

    try {
        
        const clube = await Clube.findOne({ where: { nome: nome } })
        
        if (!clube) {
        return res.status(404).json({ mensagem: 'Clube não encontrado' })
        }

        if (clube.usuarioId !== usuarioId) {
        return res.status(403).json({ mensagem: 'Você não tem permissão para excluir este clube' })
        }

        await clube.destroy()

        return res.status(200).json({ mensagem: 'Clube excluído com sucesso' })

    } catch (error) {
        console.error('Erro ao excluir usuário:', error)
        res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message })
    }
}

module.exports = deletar
