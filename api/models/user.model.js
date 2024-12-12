const {  DataTypes } = require("sequelize")
const { connection } = require("../../db")

const User = connection.define(
  "user",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ['customer', 'staff', 'admin']
    }
  },
  {
    updatedAt: false,
  }
);

module.exports = User
