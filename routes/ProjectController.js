const express = require('express')
const {Project} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const project = await Project.find({}).populate('vendor', 'vendorName').populate('mandor','mandorName estHarga').populate('user', 'userName').populate('jasa', '-user -mandor')
    try {
        res.status(200).json({
            message: 'success get project data',
            data: project
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const project = await Project.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get project data by id',
            data: project
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/user', async (req,res)=> {
    const userId = req.params.id
    const project = await Project.find({user: userId}).populate('user', 'userName').populate('vendor', 'namaVendor').populate('mandor','mandorName').populate('jasa', '-user -mandor')
    try {
        res.status(200).json({
            message: 'success get project data by user id',
            data: project
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/mandor', async (req,res)=> {
    const mandorId = req.params.id
    const project = await Project.find({mandor: mandorId}).populate('vendor', 'namaVendor').populate('mandor','mandorName').populate('user', 'userName').populate('jasa', '-user -mandor')
    try {
        res.status(200).json({
            message: 'success get project data by mandor id',
            data: project
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/', async (req,res)=> {
    const project = await Project.create(req.body)
    try {
        res.status(200).json({
            message: 'success post jasa',
            data: project
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



module.exports = router