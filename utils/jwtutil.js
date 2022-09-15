const secert = "hello";
const jwt = require("jsonwebtoken");

class jwtutil {
  static getToken(user) {
    // console.log(user)
    const days = 30;
    const token = jwt.sign(user, String(secert), {
      algorithm: "HS256",
      expiresIn: 60 * 60 * (24 * days),
    });
    // console.log(token)
    return token;
  }

  static verifyToken(token) {
    var result = null;
    // console.log("1")
    jwt.verify(
      token,
      secert,
      {
        algorithms: ["HS256"],
      },
      function (err, user) {
        if (err) throw err;
        result = user;
      }
    );
    // console.log(result)
    return result;
  }
}

module.exports = jwtutil;
