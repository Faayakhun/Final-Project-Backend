const express = require('express')
const router = express.Router()

const userRouter = require('./UserController')
const mandorRouter = require('./MandorController')
const authRouter = require('./Auth')

router.use('/user', userRouter)
router.use('/mandor', mandorRouter)
router.use('/auth', authRouter)

module.exports = router