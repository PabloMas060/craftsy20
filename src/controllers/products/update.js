const { unlinkSync, existsSync } = require('fs');
const { readJSON, writeJSON } = require('../../data');
module.exports = (req, res) => {

    const products = readJSON('products.json')
    const id = req.params.id;
    const { name, brand, description, price, discount } = req.body

    const productsModified = products.map(product => {
        if (product.id === id) {

            req.file &&
                existsSync(`./public/images/${product.image}`) &&
                unlinkSync(`./public/images/${product.image}`)


            product.name = name.trim();
            product.brand = brand;
            product.description = description.trim();
            product.price = +price;
            product.discount = +discount;
            product.image = req.file ? req.file.filename : product.image;
            product.createdAt = new Date();



        }

        return product
    });


    writeJSON(productsModified, 'products.json')


    return res.redirect('/admin');

}