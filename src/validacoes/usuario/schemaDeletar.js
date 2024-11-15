const joi = require('joi')

const schemaDeletar = joi.object({

	email: joi.string().required().messages({
		'any.required': 'O campo email é obrigatório',
		'string.empty': 'O campo email é obrigatório',
	}),

	senha: joi.string().required().messages({
		'any.required': 'O campo senha é obrigatório',
		'string.empty': 'O campo senha é obrigatório',
	}),

})

module.exports = schemaDeletar
