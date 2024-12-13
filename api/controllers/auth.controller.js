const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(req.body.password, salt)
    req.body.password = newPassword

    const user = await User.create(req.body)

    res.status(200).json({
      success: true,
      message: "Signup succesful",
      result: user
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Signup Error",
      result: error.message,
    });
  }
}

const login = async(req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Email or password wrong",
      })
    }

    const result = bcrypt.compareSync(req.body.password, user.password)

    if (!result) {
      return res.status(200).json({
        success: false,
        message: "Email or password wrong"
      })
    }

    const token = jwt.sign({
      email: user.email
    }, process.env.JWT_KEY, { expiresIn: '1h' })

    res.status(200).json({
      success: true,
      message: "Login succesful",
      result: token,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Login Error",
      result: error.message,
    })
  }
}

module.exports = {
  signup,
  login
}