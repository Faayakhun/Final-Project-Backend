const mongoose = require('mongoose');

const NegoSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    mandor: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "mandor"
    },
    budget: {
        type: Number,
        require: true
    },
    catatanNego: {
        type: String,
        require: true
    }
});

const Nego = mongoose.model("nego" , NegoSchema);

module.exports=Nego;