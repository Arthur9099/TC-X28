const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    productPrice: Number,
    productMainboard: String,
    productCPU: String,
    productRAM: String,
    productVGA: String,
    productHDD: String,
    productSSD: String,
    productPSU: String,
    productCase: String,
    productCooling: String,
    productSalePrice: Number,
    productTotalStock: Number,
    productAverageReview: Number,
    productDescription: String,
    productCategory: String,
    productBrand: String,
    productImg: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
