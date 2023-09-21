const { v4: uuidv4 } = require('uuid');

const Product = function ({ name, price, discount, brand, description, image }) {

    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.discount = +discount;
    this.description = description.trim();
    this.image = image;
    this.createdAt = new Date();
}

module.exports = Product;