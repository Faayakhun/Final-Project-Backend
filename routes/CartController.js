const express = require("express")
const {Cart} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const cart = await Cart.find({}).populate('namaUser', 'userName').populate('vendor', 'vendorName').populate('mandor','mandorName estHarga').populate('jasa', '-user')
    try {
        res.status(200).json({
            message: 'success get cart data',
            data: cart
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const cart = await Cart.findById(req.params.id)
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

router.post('/', async (req,res)=> {
    const cart = await Cart.create(req.body)
    try {
        res.status(200).json({
            message: 'success post jasa',
            data: cart
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router