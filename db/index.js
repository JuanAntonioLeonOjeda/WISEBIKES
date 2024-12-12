const { Sequelize } = require('sequelize')

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
)

const checkConnection = async () => {
  try {
  await connection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

const DBSync = async () => {
  try {
    await connection.sync()
    console.log('Models synched :D')
  } catch (error) {
    console.error('Oh no D:')
    console.log(error)
  }
}

module.exports = {
  connection,
  checkConnection,
  DBSync
}