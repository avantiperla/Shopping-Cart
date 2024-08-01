const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    items: [
        {
            name:String,
            description:String,
            price: Number,
        }
    ],
    totalPrice: {
        type: Number,
    },
    createdAt : {
        type :Date,
        default: Date.now
    }

  });
   
module.exports = mongoose.model("Order", orderSchema);