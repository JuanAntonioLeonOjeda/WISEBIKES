const User = require('../models/user.model')

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'One User found',
      result: user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error getting one user",
      result: error.message
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: "Users not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "All Users found",
      result: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error getting one user",
      result: error.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const user = await User.create(req.body)

    res.status(200).json({
      success: true,
      message: "User created",
      result: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating one user",
      result: error.message,
    });
  }
}

module.exports = {
  getOneUser,
  getAllUsers,
  createCustomer
}