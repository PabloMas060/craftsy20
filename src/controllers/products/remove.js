const { readJSON, writeJSON } = require('../../data');



module.exports = (req,res) => {

    const products = readJSON('products.json');
    const id = req.params.id;


    const productsModified = products.filter(product => product.id !== id);

    writeJSON(productsModified, 'products.json')


    return res.redirect('/admin')
}