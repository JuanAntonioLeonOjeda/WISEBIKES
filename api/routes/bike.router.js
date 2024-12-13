const bikeRouter = require("express").Router()

const {
  getOneBike,
  getAllBikes,
  createBike,
  updateOneBike,
  deleteOneBike,
} = require("../controllers/bike.controller")

bikeRouter
  .get("/", getAllBikes)
  .get("/:id", getOneBike)
  .post('/', createBike)
  .put("/:id", updateOneBike)
  .delete("/:id", deleteOneBike)

module.exports = bikeRouter
