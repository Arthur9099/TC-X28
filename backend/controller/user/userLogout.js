async function userLogout(req, res) {
  try {
    res.clearCookie("access_token");

    res.json({
      message: "Đăng xuất thành công!!",
      error: false,
      success: true,
      data: [],
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userLogout;
