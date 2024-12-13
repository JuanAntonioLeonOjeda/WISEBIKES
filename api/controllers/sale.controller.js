const Sale = require("../models/sale.model")

const getOneSale = async (req, res) => {
  try {
    const saleId = req.params.id

    const sale = await Sale.findByPk(saleId, {
      include: 'bike'
    })

    if (!sale) {
      return res.status(404).json({
        success: false,
        message: "Sale not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "One Sale found",
      result: sale,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error getting one sale",
      result: error.message,
    })
  }
}

const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({
      where: req.query,
    })

    if (!sales.length) {
      return res.status(404).json({
        success: false,
        message: "No sales found",
      })
    }

    res.status(200).json({
      success: true,
      message: "All Sales found",
      result: sales,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error getting all sales",
      result: error.message,
    })
  }
}

const createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body)

    res.status(201).json({
      success: true,
      message: "Sale created",
      result: sale,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error creating sale",
      result: error.message,
    })
  }
}

const updateOneSale = async (req, res) => {
  try {
    const [result] = await Sale.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No changes made or sale not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Sale updated",
      result: `${result} rows changed`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error updating sale",
      result: error.message,
    })
  }
}

const deleteOneSale = async (req, res) => {
  try {
    const result = await Sale.destroy({
      where: {
        id: req.params.id,
      },
    })

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Sale not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Sale deleted",
      result: `${result} rows deleted`,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Error deleting sale",
      result: error.message,
    })
  }
}

module.exports = {
  getOneSale,
  getAllSales,
  createSale,
  updateOneSale,
  deleteOneSale,
}
