const { DataTypes } = require("sequelize")
const { connection } = require("../../db")

const Sale = connection.define(
  "sale",
  {
    totalPrice: {
      type: DataTypes.INTEGER
    }
  },
  {}
)

module.exports = Sale
