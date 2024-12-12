require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const { 
  DBSync,
  checkConnection
 } = require("./db")

 const addRelationsToDB = require('./db/relations')

const connectToDB = async () => {
  try {
    await checkConnection()
    addRelationsToDB()
    DBSync()
  } catch (error) {
    console.error('Error connecting to DB')
  }
}

const startExpress = () => {
  const app = express()

  app.use('/api', require('./api/routes'))
  app.listen(process.env.PORT, () => {
    console.log("listening")
  })
}

const start = async () => {
  await connectToDB()
  startExpress()
}

start()
