const tutorials = require('../data/tutorials.json');
const products = require('../data/products.json');
const { readJSON } = require('../data')


module.exports = {
    index: (req, res) => {
        const tutorials = readJSON('tutorials.json')
        const products = readJSON('products.json')
        return res.render('index', {
            tutorials,
            products /* : products.filter(product => product.discount > 0) */
        })
    },
    admin: (req, res) => {
        const tutorials = readJSON('tutorials.json')
        const products = readJSON('products.json')
        return res.render('admin', {
            products,
            tutorials
        })
    }
}