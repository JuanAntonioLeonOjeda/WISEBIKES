const Bike = require("../models/bike.model")

const getOneBike = async (req, res) => {
  try {
    const bikeId = req.params.id
    const bike = await Bike.findByPk(bikeId)

    if (!bike) {
      return res.status(404).json({
        success: false,
        message: "Bike not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "One Bike found",
      result: bike,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error getting one bike",
      result: error.message,
    })
  }
}

const getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.findAll({
      where: req.query,
    })

    if (!bikes.length) {
      return res.status(404).json({
        success: false,
        message: "No bikes found",
      })
    }

    res.status(200).json({
      success: true,
      message: "All bikes found",
      result: bikes,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error getting all bikes",
      result: error.message,
    })
  }
}

const createBike = async (req, res) => {
  try {
    const bike = await Bike.create(req.body)

    res.status(201).json({
      success: true,
      message: "Bike created",
      result: bike,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error creating bike",
      result: error.message,
    })
  }
}

const updateOneBike = async (req, res) => {
  try {
    const [result] = await Bike.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No changes made or bike not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Bike updated",
      result: `${result} rows changed`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error updating bike",
      result: error.message,
    })
  }
}

const deleteOneBike = async (req, res) => {
  try {
    const result = await Bike.destroy({
      where: {
        id: req.params.id,
      },
    })

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Bike not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Bike deleted",
      result: `${result} rows deleted`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error deleting bike",
      result: error.message,
    })
  }
}

module.exports = {
  getOneBike,
  getAllBikes,
  createBike,
  updateOneBike,
  deleteOneBike
}
