const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendor",
    },
    mandor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mandor",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    jasa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jasa",
    },
    status: {
        type: String,
        require: true
    },
    paymentStatus: {
        type: String
    }
})

const Project = mongoose.model("project", ProjectSchema)
module.exports = Project