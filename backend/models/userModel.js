const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
