const Basket = require('.//basket');
const productCatalog = require('../config/products');
const deliveryTiers = require('../config/deliveryTiers');
const promotions = require('./promotions');


function getCartTotal(products) {
    const basket = new Basket(productCatalog, deliveryTiers, promotions);
    basket.addItems(products);
    return { 
        products,
        ...basket.calculateTotal()
    }
}

module.exports = {
    getCartTotal
}