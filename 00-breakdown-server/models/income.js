const mongoose = require("mongoose");

const { Schema } = mongoose;

const Income = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: "Other"
  },
  date: {
    type: Number,
    timestamp: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Income", Income);
