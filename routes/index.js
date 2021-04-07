const express = require('express')
const router = express.Router()

const userRouter = require('./UserController')
const mandorRouter = require('./MandorController')
const projectRouter = require('./ProjectController')
const blogRouter = require('./BlogController')
const authRouter = require('./Auth')

router.use('/user', userRouter)
router.use('/mandor', mandorRouter)
router.use('/auth', authRouter)
router.use('/project', projectRouter)
router.use('/blog', blogRouter)

module.exports = router