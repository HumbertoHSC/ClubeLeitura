const Clube = require('../../modelos/clube')

const listar = async (req, res) => {
  try {
    
    const clubes = await Clube.findAll()

    if (clubes.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum clube encontrado' })
    }

    return res.status(200).json(clubes)

  } catch (error) {
    console.error('Erro ao listar clubes:', error)
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = listar
