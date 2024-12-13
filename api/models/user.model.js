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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "Wise2024",
    },
    role: {
      type: DataTypes.ENUM,
      values: ["customer", "staff", "admin"],
      defaultValue: "customer",
    },
  },
  {
    updatedAt: false,
  }
);

module.exports = User
