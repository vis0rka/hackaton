const mongoose = require('mongoose');

const { Schema } = mongoose;

const Debit = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    timestamp: true,
    default: Date.now,
  },
  dueDate: {
    type: Number,
    timestamp: true,
  }
})

module.exports = mongoose.model('Debit', Debit);