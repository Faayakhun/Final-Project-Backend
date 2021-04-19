const express = require("express")
const {Jasa} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const jasa = await Jasa.find({}).populate('user','userName').populate('mandor','mandorName')
    try {
        res.status(200).json({
            message: 'success get jasa data',
            data: jasa
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const jasa = await Jasa.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get jasa data by id',
            data: jasa
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/:id/user', async (req,res)=> {
    const budgetUpdate = req.body
    const jasa = await Jasa.findByIdAndUpdate(req.params.id,budgetUpdate)
    try {
        res.status(200).json({
            message: 'success update jasa data by user id',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/:id/mandor', async (req,res)=> {
    const budgetUpdate = req.body
    const jasa = await Jasa.findByIdAndUpdate(req.params.id,budgetUpdate)
    try {
        res.status(200).json({
            message: 'success update jasa data by user id',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/', async (req,res)=> {
    const jasa = await Jasa.create(req.body)
    try {
        res.status(200).json({
            message: 'success post jasa',
            data: jasa
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router