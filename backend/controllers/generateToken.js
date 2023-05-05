const jwt = require('jsonwebtoken');
const generateToken = (id) => {
    return jwt.sign({ id }, "password", {
      expiresIn: "30d",
    });
  };
  module.exports = generateToken;