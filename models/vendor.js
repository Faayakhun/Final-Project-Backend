const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    namaVendor: {
        type: String,
        require: true
    },
    passwordVendor: {
        type: String,
        require: true
    },
    nomorTelepon: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    alamatKantor: {
        type: String,
        require: true
    },
    logoKantor : String,
    portfolio : [{
        type: String
    }],
    rating: {
        type: Number
    },
    review: [{
        type: String
    }]

});

const Vendor = mongoose.model("vendor" , VendorSchema);

module.exports=Vendor;