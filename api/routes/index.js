const router = require('express').Router()

const userRouter = require('./user.router')
const bikeRouter = require("./bike.router")
const saleRouter = require("./sale.router")
const authRouter = require('./auth.router')

router
  .use('/users', userRouter)
  .use('/bikes', bikeRouter)
  .use('/sales', saleRouter)
  .use('/auth', authRouter)

module.exports = router