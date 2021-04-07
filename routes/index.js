const express = require('express')
const router = express.Router()

const mandorRouter = require('./MandorController')
const authRouter = require('./Auth')


router.use('/mandor', mandorRouter)
router.use('/auth', authRouter)

module.exports = router