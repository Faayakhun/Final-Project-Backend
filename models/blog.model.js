const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    Gambar: [{
        type: String,
        require: true,
    }],
    Judul: [{
        type: String,
        require: true,
    }],
    Isi: [{
        type: String,
        require: true,
    }],
})

const Blog = mongoose.model("blog", BlogSchema)
module.exports = Blog