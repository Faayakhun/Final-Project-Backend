const express = require("express")
const {User,Cart} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const user = await User.find({})
    try {
        res.status(200).json({
            message: 'success get user data',
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const user = await User.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get user data by id',
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/cart', async (req,res)=> {
    const userId = req.params.id
    const cart = await Cart.findOne({namaUser: userId}).populate('namaUser', 'userName').populate('vendor', 'namaVendor').populate('mandor','mandorName estHarga').populate('jasa', '-user')
    try {
        res.status(200).json({
            message: 'success get cart data by id',
            data: cart
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router