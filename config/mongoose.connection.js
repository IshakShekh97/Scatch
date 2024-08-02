const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://localhost:27017/scatch")
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
