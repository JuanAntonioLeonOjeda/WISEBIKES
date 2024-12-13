const userRouter = require("express").Router()

const {
  getOneUser,
  getAllUsers,
  getOwnAccount,
  createCustomer,
  createStaff,
  updateOwnAccount,
  updateOneAccount,
  deleteOneUser
} = require("../controllers/user.controller")

userRouter
  .get('/', getAllUsers)
  .get('/me', getOwnAccount)
  .get('/:id', getOneUser)
  .post('/customer', createCustomer)
  .post('/staff', createStaff)
  .put('/me', updateOwnAccount)
  .put('/:id', updateOneAccount)
  .delete('/:id', deleteOneUser)

module.exports = userRouter
