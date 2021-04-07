const express = require("express")
const {User} = require('../models')

const router = express.Router()

router.get('/', async (req,res)=> {
    const user = await User.find({})
    try {
        res.status(200).json({
            message: 'success get user data',
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/:id', async (req,res)=> {
    const user = await User.findById(req.params.id)
    try {
        res.status(200).json({
            message: 'success get user data by id',
            data: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router