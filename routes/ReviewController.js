const express = require('express')
const {Review} = require('../models')

const router = express.Router()

router.get('/',async (req,res) => {
    const review = await Review.find({}).populate("mandor","mandorName")
    try {
        res.status(200).json({
            message: 'success get review data',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const review = await Review.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get review data by id',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/', async (req,res)=> {
    const review = await Review.create(req.body)
    try {
        res.status(200).json({
            message: 'success post review',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})




module.exports = router