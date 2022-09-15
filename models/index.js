const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("test", "root", "Hellono", {
  host: "localhost",
  dialect: "mysql",
});

async function fn() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
fn();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
