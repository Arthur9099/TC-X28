const ProductModel = require("../../models/productModel.js");

async function addProduct(req, res) {
  try {
    const {
      productName,
      productPrice,
      productMainboard,
      productCPU,
      productRAM,
      productVGA,
      productHDD,
      productSSD,
      productPSU,
      productCase,
      productCooling,
    } = req.body;

    const product = await ProductModel.findOne({ productName });

    if (product) {
      throw new Error("Sản phẩm đã tồn tại !!");
    }

    const newProduct = new ProductModel({
      productName,
      productPrice,
      productMainboard,
      productCPU,
      productRAM,
      productVGA,
      productHDD,
      productSSD,
      productPSU,
      productCase,
      productCooling,
    });
    await newProduct.save();

    res.status(201).json({
      data: newProduct,
      success: true,
      error: false,
      message: "Thêm sản phẩm thành công !",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = addProduct;
