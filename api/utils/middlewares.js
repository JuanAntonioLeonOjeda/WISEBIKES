const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.token
    if(!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found"
      })
    }

    const result = jwt.verify(token, process.env.JWT_KEY)
    
    const user = await User.findOne({
      where: {
        email: result.email
      }
    })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found in authentication process",
      })
    }

    res.locals.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Authentication Error",
      result: error.message
    })
  }
}

const checkAdmin = (req, res, next) => {
  try {
    if (res.locals.user.role !== 'admin') {
      res.status(500).json({
        success: false,
        message: "User not Authorized"
      })
    } else {
      next()
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Authorization Error on CheckAdmin",
      result: error.message,
    })
  }
}

const checkStaff = (req, res, next) => {
  try {
    if (res.locals.user.role === "customer") {
      res.status(500).json({
        success: false,
        message: "User not Authorized",
      })
    } else {
      next()
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Authorization Error on CheckAdmin",
      result: error.message,
    })
  }
}

module.exports = {
  checkAuth,
  checkAdmin,
  checkStaff
}