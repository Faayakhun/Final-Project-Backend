const mongoose = require('mongoose')

const JasaSchema = new mongoose.Schema({
    jasa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jasa",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
})

const Jasa = mongoose.model("jasa", JasaSchema)
module.exports = Jasa