const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const id = req.params.id;
    const products = readJSON('products.json')
    const brands = readJSON('brands.json')

    const product = products.find(product => product.id === id)

    return res.render('editProduct', {
        ...product,
        brands: brands.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    })
}