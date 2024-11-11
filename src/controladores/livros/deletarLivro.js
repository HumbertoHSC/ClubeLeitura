const Livro = require('../../modelos/livro')

const deletarLivro = async (req, res) => {
  const { nome } = req.body
  const usuarioId = req.userId

  try {
    const livro = await Livro.findByPk(nome)

    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' })
    }

    if (livro.usuarioId !== usuarioId) {
      return res.status(403).json({ mensagem: 'Você não tem permissão para excluir este livro' })
    }

    await livro.destroy()

    res.status(200).json({ mensagem: 'O livro foi excluído com sucesso' })

  } catch (error) {
    console.error('Erro ao excluir usuário:', error)
    res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message })
  }
}

module.exports = deletarLivro
