// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: String,
    name: String,
    message: String,
    reviewAreas: JSON
  },
  { timestamps: true }
);


module.exports = mongoose.model("Review", DataSchema);