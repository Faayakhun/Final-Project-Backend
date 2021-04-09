const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    namaUser: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    buktiTransaksi: {
        type: String,
        require: true
    }
});

const Payment = mongoose.model("payment" , PaymentSchema);

module.exports=Payment;