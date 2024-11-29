const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const errorHandler = require("../middleware/error.js");

dotenv.config();

async function authToken(req, res, next) {
  const token = req.cookies.access_token;
  console.log(token);

  if (!token) return next(errorHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid!"));

    req.user = user;
    next();
  });
}

module.exports = authToken;
