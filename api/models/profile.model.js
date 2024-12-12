const {  DataTypes } = require("sequelize")
const { connection } = require("../../db")

const Profile = connection.define(
  "profile",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: 'Wise2024'
    },
    phone: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
  }
);

module.exports = Profile
