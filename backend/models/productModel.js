const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productMainboard: {
      type: String,
      required: true,
    },
    productCPU: {
      type: String,
      required: true,
    },
    productRAM: {
      type: String,
      required: true,
    },
    productVGA: {
      type: String,
      required: true,
    },
    productHDD: {
      type: String,
      default: "Có thể tuỳ chọn nâng cấp",
    },
    productSSD: {
      type: String,
      default: "Có thể tuỳ chọn nâng cấp",
    },
    productPSU: {
      type: String,
      required: true,
    },
    productCase: {
      type: String,
      required: true,
    },
    productCooling: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
