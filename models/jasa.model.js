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
    alamatProyek: {
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
    mandor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mandor",
    },
})

const Jasa = mongoose.model("jasa", JasaSchema)
module.exports = Jasa