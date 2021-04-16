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
    areaPekerjaan: {
        type: String,
        require: true,
    },
    jenisProperti: {
        type: String,
        require: true,
    },
    lokasiProyek: {
        type: String,
        require: true,
    },
    penyediaMaterial: {
        type: String,
        require: true,
    },
    luasAreaPekerjaan: {
        type: Number,
        require: true,
    },
    durasiPekerjaan: {
        type: String,
        require: true,
    },
    budgetUser: {
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