// const { Sequelize, DataTypes } = require("sequelize");
// const db = require("./index");
// const User = require("./user");

// const Users_detail = db.sequelize.define(
//   "users_detail",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

// User.hasOne(Users_detail);
// Users_detail.belongsTo(User);

// module.exports = Users_detail;
