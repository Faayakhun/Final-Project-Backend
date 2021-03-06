const express = require('express')
const {Portofolio} = require('../models')

const router = express.Router()

router.get('/',async (req,res) => {
    const portofolio = await Portofolio.find({}).populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get portofolio data',
            data: portofolio
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const portofolio = await Portofolio.findById(req.params.id).populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get portofolio data by id',
            data: portofolio
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/mandor', async (req,res)=> {
    const mandorId = req.params.id
    const portofolio = await Portofolio.find({mandor: mandorId}).populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get portofolio data by mandor id',
            data: portofolio
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req,res)=> {
    const portofolio = await Portofolio.findByIdAndDelete(req.params.id)
    try {
        res.status(200).json({
            message: 'success get portofolio data by id',
            data: portofolio
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/', async (req,res)=> {
    const portofolio = await Portofolio.create(req.body)
    try {
        res.status(200).json({
            message: 'success post portofolio',
            data: portofolio
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})




module.exports = router