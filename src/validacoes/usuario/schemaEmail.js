const joi = require('joi')

const schemaEmail = joi.object({

	email: joi.string().required().messages({
		'any.required': 'O campo email é obrigatório',
		'string.empty': 'O campo email é obrigatório',
	})

})

module.exports = schemaEmail
