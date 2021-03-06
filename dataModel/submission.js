// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: String,
    reviewAreas: JSON,
    completeReview: JSON
  },
  { timestamps: true }
);


module.exports = mongoose.model("Submission", DataSchema);