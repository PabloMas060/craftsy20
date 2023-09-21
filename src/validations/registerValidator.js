const { check, body } = require('express-validator');
const { readJSON, writeJSON } = require('../data');


module.exports = [

    check('name')
        .notEmpty().withMessage("Campo obligatorio").bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo 2 caracteres").bail()
        .isAlpha('es-ES').withMessage("Sólo caracteres alfabéticos"),
    check('surname')
        .isLength({
            min: 2
        }).withMessage("Mínimo 2 caracteres").bail()
        .isAlpha('es-ES').withMessage("Sólo caracteres alfabéticos"),
    check('email')
        .notEmpty().withMessage("Campo obligatorio").bail()
        .isEmail().withMessage("Formato de email no válido").bail()
        .custom((value) =>{
            const users = readJSON('users.json');
            const user = users.find(user => user.email === value);
            if(user){
                return false
            } 
            return true
        }).withMessage("El email ya está en uso"),
    check('password')
        .isLength({
            min: 6,
            max: 12
        }).withMessage("Entre 6 y 12 caracteres"),
    body('password2')
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                return false;
              }
              return true;
        }).withMessage("Las contraseñas no coinciden")

]