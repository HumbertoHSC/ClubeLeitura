const joi = require('joi')

const schemaAvaliacao = joi.object({
	
	titulo: joi.string().required().messages({
		'any.required': 'O campo titulo é obrigatório',
		'string.empty': 'O campo titulo é obrigatório',
	}),

    nota: joi.string().required().messages({
		'any.required': 'O campo nota é obrigatório',
		'string.empty': 'O campo nota é obrigatório',
	}),

    opiniao: joi.string().required().messages({
		'any.required': 'O campo opiniao é obrigatório',
		'string.empty': 'O campo opiniao é obrigatório',
	})

})

module.exports = schemaAvaliacao