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

const {
  checkAuth,
  checkAdmin,
  checkStaff
} = require('../utils/middlewares')

userRouter
  .get("/", getAllUsers)
  .get("/me", checkAuth, getOwnAccount)
  .get("/:id", checkAuth, checkStaff, getOneUser)
  .post("/customer", checkAuth, checkStaff, createCustomer)
  .post("/staff", checkAuth, checkAdmin, createStaff)
  .put("/me", checkAuth, updateOwnAccount)
  .put("/:id", checkAuth, checkStaff, updateOneAccount)
  .delete("/:id", checkAuth, checkAdmin, deleteOneUser)

module.exports = userRouter
