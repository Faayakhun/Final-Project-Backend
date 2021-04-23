const mongoose = require('mongoose');

const PortofolioSchema = new mongoose.Schema({
    mandor: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "mandor"
        
    },
    judulPortofolio: {
        type : String,
        require : true
    },
    fotoPortofolio: {
        type : String,
        require : true
    },
});

const Portofolio = mongoose.model("portofolio" , PortofolioSchema);

module.exports = Portofolio ;