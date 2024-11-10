const joi = require('joi')

const schemaNomeCLube = joi.object({

    nome: joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	}),

	novoNome: joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	})

})

module.exports = schemaNomeCLube
