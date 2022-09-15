const db = require("../models");
const User = require("../models/user");
const jwtutil = require("../utils/jwtutil");

async function newuser(req, res) {
  const user = req.body;
  const response = {};
  try {
    const newuser = await User.create({ ...user });

    console.log(newuser);

    response.user = newuser;

    res.send(response);
  } catch (error) {
    throw error;
  }
}

const login = async (req, res) => {
  const data = req.body;
  let d = data.dob.slice(0, 2);
  let m = data.dob.slice(2, 4);
  let y = data.dob.slice(4);
  let resp = {};
  const dob = y + "-" + m + "-" + d;
  try {
    const user = await User.findOne({ where: { scholar: data.scholar } });
    if (user.dob === dob) {
      const newuser = user.dataValues;
      console.log(newuser);
      const token = jwtutil.getToken(newuser);
      console.log(token);
      resp.message = "Verified";
      resp.token = token;
      resp.user = user;
      res.send(resp);
    } else {
      console.log("Wrong Password");
      throw new Error("Wrong Password");
    }
  } catch (error) {
    throw error;
  }
};

const updateuser = async (req, res) => {
  const data = req.body;
  const user = req.user;
  //   console.log("user")
  try {
    const resp = await User.update({ ...data }, { where: { id: user.id } });
    res.send(resp);
  } catch (error) {
    throw error;
  }
};

const deleteuser = async (req, res) => {
  const user = req.user;
  console.log(user);
  try {
     await User.destroy({ where: { id: user.id } });
    res.send("Destroyed");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newuser,
  login,
  updateuser,
  deleteuser,
};
