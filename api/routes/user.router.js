const userRouter = require("express").Router()

const {
  getOneUser,
  getAllUsers,
  createCustomer,
  createStaff
} = require('../controllers/user.controller')

userRouter
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .post('/customer', createCustomer)
  .post('/staff', createStaff)

module.exports = userRouter
