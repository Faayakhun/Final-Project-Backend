const mongoose = require('mongoose')

const JasaSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
    },
    catatan: {
        type: String,
        require: true,
    },
    jumlahHari: {
        type: Number,
        require: true,
    },
    jumlahTukang: {
        type: Number,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
})

const Jasa = mongoose.model("jasa", JasaSchema)
module.exports = Jasa