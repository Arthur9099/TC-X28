const UserModel = require("../../models/userModel.js");
const errorHandler = require("../../middleware/error.js");

async function updateUser(req, res, next) {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          phoneNumber: req.body.phoneNumber,
          gender: req.body.gender,
          dateOfBirth: req.body.dateOfBirth,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

module.exports = updateUser;
