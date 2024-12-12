const userRouter = require("express").Router()

const {
  getOneUser,
  getAllUsers,
  createCustomer
} = require('../controllers/user.controller')

userRouter
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .post("/customer", createCustomer)

module.exports = userRouter
