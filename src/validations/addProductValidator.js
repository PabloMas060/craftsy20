const { check, body } = require('express-validator');

/* ATRIBUTO NAME DE CADA PARTE DEL FORMULARIO */

/* bail() se utiliza para varias validaciones en un mismo campo */

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es obligatorio').bail()
        .isLength({
            min: 2,
            max: 50
        }).withMessage('El nombre debe tener entre 2 y 50 caractéres'),
    check('brand')
        .notEmpty().withMessage('La marca es requerida'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número'),
    check('description')
        .notEmpty().withMessage('Debes agregar una descripción').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caractéres'),
    body('image')
        .custom((value, { req }) => {
            if (req.file) {
                return true
            }
            return false
        }).withMessage('No has subido ninguna imagen')
]