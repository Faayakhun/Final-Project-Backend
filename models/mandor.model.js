const mongoose = require('mongoose')

const MandorSchema = new mongoose.Schema({
    mandorName: {
        type: String,
        require: true,
    },
    tukangName: [{
        type: String,
        require: true,
    }],
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    nomorTelpon: String,
    lokasi: String,
    estHarga: Number,
    rating: {
        type: Number
    },
    review: [{
        type: String
    }],
    fotoProfil: String,
    portofolio: [{
        type: String
    }]
})

const Mandor = mongoose.model("mandor", MandorSchema)
module.exports = Mandor