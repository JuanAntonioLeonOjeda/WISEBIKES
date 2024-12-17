require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require('cors')

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
    .use(cors())
    .use(express.json())

    .use('/api', require('./api/routes'))
    .listen(process.env.PORT, () => {
      console.log("listening")
    })
}

const start = async () => {
  await connectToDB()
  startExpress()
}

start()
