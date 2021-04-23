const mongoose = require('mongoose')

const MandorSchema = new mongoose.Schema({
    mandorName: {
        type: String,
        require: true,
    },
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
    rating: {
        type: Number
    },
    fotoProfil: String,
})

const Mandor = mongoose.model("mandor", MandorSchema)
module.exports = Mandor