const mongoose = require('mongoose');

const { Schema } = mongoose;

const Income = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    timestamp: true,
    default: Date.now,
  }
})

module.exports = mongoose.model('Income', Income);