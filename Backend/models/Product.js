const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    id:Number,

    category:String,

    name:String,

    description:String,

    image:String,

    price:Number,

    oldPrice:Number,

    rating:String,

    specs:[String]

});

module.exports = mongoose.model(
    "Product",
    productSchema
);

