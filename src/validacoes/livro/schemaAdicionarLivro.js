const joi = require('joi')

const schemaAdicionarLivro = joi.object({
	
	titulo: joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	}),

    autor: joi.string().required().messages({
		'any.required': 'O campo autor é obrigatório',
		'string.empty': 'O campo autor é obrigatório',
	}),

    clube : joi.string().required().messages({
		'any.required': 'O campo clube é obrigatório',
		'string.empty': 'O campo clube é obrigatório',
	})

})

module.exports = schemaAdicionarLivro