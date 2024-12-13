const User = require('../models/user.model')

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findByPk(userId , {
      include: 'profile' //EAGER LOADING
    })

    // let profile
    // if (user.role !== 'customer') {
    //   profile = await user.getProfile() //LAZY LOADING
    // }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'One User found',
      result: {user}
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
    const users = await User.findAll({
      where: req.query
    })

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

const createStaff = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password, 
      phone,
      role
    } = req.body

    const user = await User.create({
      firstName, 
      lastName,
      role
    })

    await user.createProfile({
      email,
      password,
      phone
    })

    res.status(200).json({
      success: true,
      message: "Staff created",
      result: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating Staff",
      result: error.message,
    });
  }
};

module.exports = {
  getOneUser,
  getAllUsers,
  createCustomer,
  createStaff
}