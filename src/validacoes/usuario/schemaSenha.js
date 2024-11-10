const joi = require('joi')

const schemaSenha = joi.object({

    senhaAtual: joi.string().required().messages({
		'any.required': 'O campo senha atual é obrigatório',
		'string.empty': 'O campo senha atual é obrigatório',
	}),

	senha: joi.string().required().messages({
		'any.required': 'O campo senha é obrigatório',
		'string.empty': 'O campo senha é obrigatório',
	}),

    confirmarSenha: joi.string().valid(joi.ref('senha')).required().messages({
        'any.only': 'As senhas não são idênticas',
        'any.required': 'O campo confirmar senha é obrigatório1',
        'string.empty': 'O campo confirmar senha é obrigatório1',
	})
})

module.exports = schemaSenha
