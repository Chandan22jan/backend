const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const { ACCESS_TOKEN_SECRET } = process.env;
ACCESS_TOKEN_SECRET="Rj2S?RVe9[]8-dCS6A**&b5Tsg$gwbg~Bd{*QTK";


exports.verifyAccessToken = async (req, res, next) => {

  const token = req.header("Authorization");
  if (!token) return res.status(400).json({ status: false, msg: "Token not found" });
  let user;
  try {
    user = jwt.verify(token, ACCESS_TOKEN_SECRET);
    // console.log(token,"token under middleware")
    console.log(user,"under middlerware");
  }
  catch (err) {
    return res.status(401).json({ status: false, msg: "Invalid token" });
  }

  try {
    user = await User.findById(user.id);
    console.log(user ," found" )
    if (!user) {
      return res.status(401).json({ status: false, msg: "User not found" });
    }

    req.user = user;
    next();
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}