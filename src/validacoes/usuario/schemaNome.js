const joi = require('joi')

const schemaNome = joi.object({
	
	nome: joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	})

})

module.exports = schemaNome
