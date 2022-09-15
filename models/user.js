const { Sequelize, DataTypes } = require("sequelize");
const db = require("./index");
const moment = require("moment");

const Users = db.sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scholar: {
      type: DataTypes.INTEGER,
      unique:true,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section: {
      type: DataTypes.ENUM("A", "B", "C", "D"),
      allowNull: false,
    },
    roll_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      // get: function () {
      //   return moment(this.getDataValue("DateTime")).format("DD.MM.YYYY");
      // },
      allowNull: false,
    },
    in_word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: false,
    },
    caste: {
      type: DataTypes.STRING,
      // allowNull:false,
    },
    catagory: {
      type: DataTypes.ENUM("SC", "ST", "OBC", "Genral"),
      allowNull: false,
      defaultValue: "Genral",
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_tongue: {
      type: DataTypes.STRING,
      defaultValue: "Hindi",
      allowNull: false,
    },
    blood_group: {
      type: DataTypes.ENUM("A", "B", "A+", "A-", "B+", "B-", "AB"),
      allowNull: false,
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp_no: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    father_dob: {
      type: DataTypes.DATEONLY,
      // get: function () {
      //   return moment(this.getDataValue("DateTime")).format("DD.MM.YYYY");
      // },
    },
    father_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_dob: {
      type: DataTypes.DATEONLY,
    },
    mother_number: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    // Other model options go here
  }
);

module.exports = Users;
