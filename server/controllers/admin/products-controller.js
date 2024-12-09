const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

//add a new product
const addProduct = async (req, res) => {
  try {
    const {
      productImg,
      productName,
      productDescription,
      productCategory,
      productBrand,
      productPrice,
      productSalePrice,
      productTotalStock,
      productAverageReview,
    } = req.body;

    console.log(productAverageReview, "averageReview");

    const newlyCreatedProduct = new Product({
      productImg,
      productName,
      productDescription,
      productCategory,
      productBrand,
      productPrice,
      productSalePrice,
      productTotalStock,
      productAverageReview,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

//fetch all products

const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      data: listOfProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

//edit a product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productImg,
      productName,
      productDescription,
      productCategory,
      productBrand,
      productPrice,
      productSalePrice,
      productTotalStock,
      productAverageReview,
    } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    findProduct.productName = productName || findProduct.productName;
    findProduct.productDescription =
      productDescription || findProduct.productDescription;
    findProduct.productCategory =
      productCategory || findProduct.productCategory;
    findProduct.productBrand = productBrand || findProduct.productBrand;
    findProduct.productPrice =
      productPrice === "" ? 0 : productPrice || findProduct.productPrice;
    findProduct.productSalePrice =
      productSalePrice === ""
        ? 0
        : productSalePrice || findProduct.productSalePrice;
    findProduct.productTotalStock =
      productTotalStock || findProduct.productTotalStock;
    findProduct.productImg = productImg || findProduct.productImg;
    findProduct.productAverageReview =
      productAverageReview || findProduct.productAverageReview;

    await findProduct.save();
    res.status(200).json({
      success: true,
      data: findProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

//delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    res.status(200).json({
      success: true,
      message: "Product delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};
