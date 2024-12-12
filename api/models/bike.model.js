const { DataTypes } = require("sequelize")
const { connection } = require('../../db')

const Bike = connection.define("bike", {
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER
  },
  engineCapacity: {
    type: DataTypes.INTEGER,
    defaultValue: 125
  },
  year: {
    type: DataTypes.INTEGER
  },
  color: {
    type: DataTypes.STRING,
    defaultValue: 'divina'
  }
},{
  updatedAt: false
})

module.exports = Bike
