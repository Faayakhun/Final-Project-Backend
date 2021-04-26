const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
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
    noTelepon: {
        type: String,
        require: true,
    },
    alamat: {
        type: String,
        require: true,
    },
    fotoProfilUser: String,
})

const User = mongoose.model("user", UserSchema)
module.exports = User