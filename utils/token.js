const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const createAccessToken = (payload) => {
  return jwt.sign(payload, "Rj2S?RVe9[]8-dCS6A**&b5Tsg$gwbg~Bd{*QTK");
}

module.exports = {
  createAccessToken,
}