const express = require("express");
const { json } = require("sequelize");
const app = express();
const db = require("./models/index");
const userRoute=require("./routes/index")

app.use(express.json());

app.use(userRoute)

db.sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log("Synced db.");
      console.log("Listening On 5000");
    });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
