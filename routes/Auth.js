const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Mandor,User,Vendor} = require('../models')

const router = express.Router()

router.post('/register/user', async(req,res)=> {
    const userData = req.body
    bcrypt.hash(userData.password,10, async function (err,hash){
        const user = await User.create({
            userName: userData.userName,
            password: hash,
            email: userData.email,
            noTelepon: userData.noTelepon,
            alamat: userData.alamat
            
        })
        try {
            res.json({
                message: "user added successfully",
                data: user
            })
        } catch {
            console.log(err)
            res.status(500).send(err)
        }
    }) 
})

router.post('/login/user', async (req,res)=> {
    const {userName, password} = req.body
    let user = await User.findOne({userName})


    try {


        if (user) {
            if (bcrypt.compareSync(password, user.password)){
                user = user.toObject()
                const {password, ...payload} = user
                const token = jwt.sign(payload, "inirahasia")
                res.json({
                    message: "login success",
                    token,
                    user
                })
            } else {
                res.json({
                    message: 'invalid login credentials'
                })
            }
        }
        
    } catch (e) {
        console.log("terjadi kesalahan" ,e);
        
    }
   

    
})

router.post('/register/mandor', async(req,res)=> {
    const mandorData = req.body
    bcrypt.hash(mandorData.password,10, async function (err,hash){
        const mandor = await Mandor.create({
            mandorName: mandorData.mandorName,
            tukangName: mandorData.tukangName,
            password: hash,
            email: mandorData.email,
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
                token,
                mandor
            })
        } else {
            res.json({
                message: 'invalid login credentials'
            })
        }
    }
})

router.post('/register/vendor', async(req,res)=> {
    const vendorData = req.body
    bcrypt.hash(vendorData.passwordVendor,10, async function (err,hash){
        const vendor = await Vendor.create({
            namaVendor: vendorData.namaVendor,
            passwordVendor: hash,
            email: vendorData.email,
            nomorTelepon: vendorData.nomorTelepon,
            alamatKantor: vendorData.alamatKantor
            
        })
        try {
            res.json({
                message: "vendor added successfully",
                data: vendor
            })
        } catch {
            console.log(err)
            res.status(500).send(err)
        }
    }) 
})

router.post('/login/vendor', async (req,res)=> {
    const {namaVendor, passwordVendor} = req.body
    let vendor = await Vendor.findOne({namaVendor})
    if (vendor) {
        if (bcrypt.compareSync(passwordVendor, vendor.passwordVendor)){
            vendor = vendor.toObject()
            const {passwordVendor, ...payload} = vendor
            const token = jwt.sign(payload, "inirahasia")
            res.json({
                message: "login success",
                token,
                vendor
            })
        } else {
            res.json({
                message: 'invalid login credentials'
            })
        }
    }
})

module.exports = router