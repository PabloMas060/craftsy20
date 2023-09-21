const { body, check } = require('express-validator');
const { readJSON } = require('../data');
const { compareSync } = require('bcryptjs');


module.exports = [
    body('email')
        .notEmpty().withMessage('Debe completar el campo').bail()
        .isEmail().withMessage('Formato inválido'),
    body('password')
        .notEmpty().withMessage('Campo obligatorio').bail()
        .custom((value, { req }) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email);
            if (!user || !compareSync(value, user.password)) {
                return false
            } else {

                return true

            }

        }).withMessage('Credenciales inválidas')
]