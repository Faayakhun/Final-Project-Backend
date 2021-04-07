const mongoose = require('mongoose')

const MandorSchema = new mongoose.Schema({
    mandorName: {
        type: String,
        require: true,
    },
    tukangName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    nomorTelpon: String,
    lokasi: String,
    estHarga: Number,
    review: String
})

const Mandor = mongoose.model("user", MandorSchema)
module.exports = Mandor