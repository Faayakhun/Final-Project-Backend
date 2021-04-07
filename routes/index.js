const express = require('express')
const router = express.Router()

const userRouter = require('./UserController')
const mandorRouter = require('./MandorController')
const vendorRouter = require('./VendorController')
const projectRouter = require('./ProjectController')
const jasaRouter = require('./JasaController')
const cartRouter = require('./CartController')
const blogRouter = require('./BlogController')
const authRouter = require('./Auth')

router.use('/user', userRouter)
router.use('/mandor', mandorRouter)
router.use('/vendor',vendorRouter)
router.use('/auth', authRouter)
router.use('/project', projectRouter)
router.use('/blog', blogRouter)
router.use('/jasa', jasaRouter)
router.use('/cart', cartRouter)

module.exports = router