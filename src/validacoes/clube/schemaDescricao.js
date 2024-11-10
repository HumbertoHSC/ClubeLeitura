const joi = require('joi')

const schemaDescricao = joi.object({

    descricao: joi.string().required().messages({
		'any.required': 'O campo nome é obrigatório',
		'string.empty': 'O campo nome é obrigatório',
	})

})

module.exports = schemaDescricao
