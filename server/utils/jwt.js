const jwt = require('jsonwebtoken');

const { JWT_ACCESS_TOKEN_SECRET, JWT_ACCESS_TOKEN_EXPIRE } = process.env;

exports.createJwtAccessToken = (data) => {
  // default : HMAC SHA256
  const token = jwt.sign(data, JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: JWT_ACCESS_TOKEN_EXPIRE * 60,
  });
  return token;
};
