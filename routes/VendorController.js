const express = require("express")
const {Vendor} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const vendor = await Vendor.find({})
    try {
        res.status(200).json({
            message: 'success get vendor data',
            data: vendor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const vendor = await Vendor.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get vendor data by id',
            data: vendor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router