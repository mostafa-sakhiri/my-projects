const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a product schema
const productSchema = {

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    processor: {
        type: String,
        required: [true, 'Processor field is required']
    },
    ram: {
        type: Number,
        required: [true, 'Ram field is required']
    },
    size: {
        type: Number,
        required: [true, 'Size field is required']
    },
    weight: {
        type: Number,
        required: [true, 'Weight field is required']
    },
    qty: {
        type: Number,
        required: [true, 'Quantity field is required']
    }

}

const Product = mongoose.model("product" , productSchema);
module.exports = Product;