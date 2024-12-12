const Bike = require("../api/models/bike.model")
const User = require('../api/models/user.model')
const Sale = require('../api/models/sale.model')
const Profile = require('../api/models/profile.model')

const addRelationsToDB = () => {
  try {
    User.hasOne(Profile)
    Profile.belongsTo(User, {
      foreignKey: {
        allowNull: false
      }
    })

    User.hasMany(Sale)
    Sale.belongsTo(User)

    Bike.belongsToMany(Sale, { through: 'BikeSale' })
    Sale.belongsToMany(Bike, { through: 'BikeSale' })

    console.log('Relations added')
  } catch (error) {
    console.error('Error adding relations')
    console.log(error)
  }
}

module.exports = addRelationsToDB