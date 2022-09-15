const jwtutil = require("../utils/jwtutil");
const User = require("../models/user");
// const jwtutil=require('../utils/jwtutil')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
//   console.log("first");
  if (!token || token === "")
    return Response.error(res, new Error("Token is Required"));

  try {
    const user = await jwtutil.verifyToken(token);
    // console.log(user.id);
    if (!user) return Response.error(res, new Error("Token is Required"));
    const authorizedUser = await User.findByPk(user.id);
    req.user = authorizedUser;
    // console.log(authorizedUser);
    return next();
  } catch (err) {
    if (err) return Response.error(res, new Error("Token is Required"));

    return Response.error(res, new Error("Token is Required"));
  }
};
