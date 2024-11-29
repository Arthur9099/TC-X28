const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const googleLogIn = require("../controller/user/googleLogin");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const getAllProducts = require("../controller/product/allProduct");
const addProduct = require("../controller/product/addProduct");

router.post("/sign-up", userSignUpController);
router.post("/sign-in", userSignInController);
router.post("/google", googleLogIn);
router.get("/user-details", authToken, userDetailsController);
router.get("/sign-out", userLogout);
//admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user/:id", authToken, updateUser);

router.get("/get-all-product", getAllProducts);
router.post("/add-product", addProduct);

module.exports = router;
