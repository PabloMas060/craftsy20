const express = require('express');
const router = express.Router();

const { detail, add, edit, create, update, remove } = require('../controllers/productsController')
const upload = require('../middlewares/upload');
const addProductValidator = require('../validations/addProductValidator');


/* /products */
router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), addProductValidator, create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'), update)
    .delete('/remove/:id', remove)

module.exports = router;
