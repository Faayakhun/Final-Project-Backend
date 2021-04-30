const express = require("express")
const {Nego} = require("../models")

const router = express.Router()

router.get('/', async (req,res)=> {
    const nego = await Nego.find({}).populate("user","userName").populate("mandor","mandorName").populate("project")
    try {
        res.status(200).json({
            message: 'success get nego data',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/user', async (req,res)=> {
    const userId = req.params.id
    const nego = await Nego.find({user: userId}).populate("user","userName").populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get nego data by user id',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id/mandor', async (req,res)=> {
    const mandorId = req.params.id
    const nego = await Nego.find({mandor: mandorId}).populate("user","userName").populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get nego data by mandor id',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



router.post('/',async (req,res)=> {
    const nego = await Nego.create(req.body)
    try {
        res.status(200).json({
            message: 'success post nego',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/:id/project',async (req,res)=> {
    const projectId = req.params.id
    const statusUpdate = req.body
    const nego = await Nego.updateMany({project: projectId},statusUpdate)
    try {
        res.status(200).json({
            message: 'success post nego',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/:id/project',async (req,res)=> {
    const projectId = req.params.id
    const nego = await Nego.deleteMany({project: projectId})
    try {
        res.status(200).json({
            message: 'success delete nego',
            data: nego
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router