const express = require("express")
const {Blog} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const blog = await Blog.find({})
    try {
        res.status(200).json({
            message: 'success get mandor data',
            data: blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const blog = await Blog.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get mandor data by id',
            data: blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router