const bcrypt = require("bcryptjs");
const UserModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Email ??");
    }
    if (!password) {
      throw new Error("Password ???");
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("Người dùng không tồn tại!!");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    console.log("checkPassoword", checkPassword);

    if (checkPassword) {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY);
      const expireDate = new Date(Date.now() + 3600000);

      res
        .cookie("access_token", token, { httpOnly: true, expires: expireDate })
        .status(200)
        .json({
          message: "Đăng nhập thành công!!",
          user: user,
          token: token,
          success: true,
          error: false,
        });
    } else {
      throw new Error("Please check Password");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
