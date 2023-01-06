const mongoose = require('mongoose')


const Schema = mongoose.Schema


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    imgUrl: {
        type: String,
        required: true
    }, 
})

module.exports = mongoose.model('Product', productSchema)

// Comments
// 1. Mongoose takes 'Product' and makes a collection out of it - 'products'