const mongoose = require('mongoose');

// Define schemas 

const custSchema = new mongoose.Schema({
    name: { type: String, required: true },

    password: { type: String, required: true },
    email: { type: String, required: true }
});
const purchSchema = new mongoose.Schema({
    product: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: String, required: true }
});
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description : { type: String, required: true },
    image : { type: String, required: true },
    color: { type: String, required: true },
});
const panierSchema = new mongoose.Schema({
    user: { type: String, required: true },
    product: { type: Object , required: true },
});
const orderSchema = new mongoose.Schema({
    user: {type: String, required: true},
    product: {type: Object, required: true},
});

const customers = mongoose.model('customers', custSchema);
const purchases = mongoose.model('purchases', purchSchema);
const products = mongoose.model('products', productSchema);
const panier = mongoose.model('panier', panierSchema);
const orders = mongoose.model('orders', orderSchema);

const mySchemas = { 'customers': customers, 'purchases': purchases, 'products': products, 'panier': panier , 'orders': orders};

module.exports = mySchemas

