const ProductModel = require("../../models/productModel.js");

async function getAllProducts(req, res) {
  try {
    const allProducts = await ProductModel.find();

    res.json({
      message: "All products: ",
      data: allProducts,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = getAllProducts;
