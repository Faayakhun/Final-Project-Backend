const express = require("express")
const {Payment} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const payment = await Payment.find({}).populate('namaUser', 'userName')
    try {
        res.status(200).json({
            message: 'success get payment data',
            data: payment
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const payment = await Payment.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get payment data by id',
            data: payment
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/', async (req,res)=> {
    const payment = await Payment.create(req.body)
    try {
        res.status(200).json({
            message: 'success post payment',
            data: payment
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router