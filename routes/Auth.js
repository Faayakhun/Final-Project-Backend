const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Mandor} = require('../models')

const router = express.Router()

router.post('/register/mandor', async(req,res)=> {
    const mandorData = req.body
    bcrypt.hash(mandorData.password,10, async function (err,hash){
        const mandor = await Mandor.create({
            mandorName: mandorData.mandorName,
            tukangName: mandorData.tukangName,
            password: hash,
            nomorTelpon: mandorData.nomorTelpon,
            lokasi: mandorData.lokasi,
            estHarga: mandorData.estHarga,
            review: mandorData.review
            
        })
        try {
            res.json({
                message: "mandor added successfully",
                data: mandor
            })
        } catch {
            console.log(err)
            res.status(500).send(err)
        }
    }) 
})

router.post('/login/mandor', async (req,res)=> {
    const {mandorName, password} = req.body
    let mandor = await Mandor.findOne({mandorName})
    if (mandor) {
        if (bcrypt.compareSync(password, mandor.password)){
            mandor = mandor.toObject()
            const {password, ...payload} = mandor
            const token = jwt.sign(payload, "inirahasia")
            res.json({
                message: "login success",
                token
            })
        } else {
            res.json({
                message: 'invalid login credentials'
            })
        }
    }
})

module.exports = router