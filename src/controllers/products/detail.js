const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const id = req.params.id;
    const products = readJSON('products.json')
    const product = products.find(product => product.id === id)

    return res.render('detail', {
        product
    })
}