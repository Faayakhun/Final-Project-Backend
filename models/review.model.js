const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    mandor: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "mandor"
        
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
        
    },
    judulReview: {
        type : String,
        require : true
    },
    isiReview: {
        type : String,
        require : true
    },
});

const Review = mongoose.model("review" , ReviewSchema);

module.exports = Review ;