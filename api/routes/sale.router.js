const saleRouter = require("express").Router()

const {
  getOneSale,
  getAllSales,
  createSale,
  updateOneSale,
  deleteOneSale
} = require("../controllers/sale.controller")

saleRouter
  .get("/", getAllSales)
  .get("/:id", getOneSale)
  .post('/', createSale)
  .put("/:id", updateOneSale)
  .delete("/:id", deleteOneSale)

module.exports = saleRouter
