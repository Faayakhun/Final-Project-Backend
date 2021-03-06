const express = require("express")
const {Mandor} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const mandor = await Mandor.find({})
    try {
        res.status(200).json({
            message: 'success get mandor data',
            data: mandor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const mandor = await Mandor.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get mandor data by id',
            data: mandor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/:id',async (req,res) => {
    const mandorUpdate = req.body
    const mandor = await Mandor.findByIdAndUpdate(req.params.id,mandorUpdate)
    try {
        res.status(200).json({
            message: 'success update mandor data by id',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router