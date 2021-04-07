const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    namaUser: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    vendor: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vendor"
        
    },
    mandor: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "mandor"
        
    },
    jasa: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "jasa"
    },
});

const Cart = mongoose.model("cart" , CartSchema);

module.exports=Cart;