const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: String,

 products:[
    {

        productId:String,

        name:String,

        image:String,

        description:String,

        category:String,

        rating:String,

        price:Number,

        quantity:Number

    }
],

  total: Number,

  paymentMethod: String,

  orderStatus: {
    type: String,
    default: "Order Confirmed"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Order",
  orderSchema
);

