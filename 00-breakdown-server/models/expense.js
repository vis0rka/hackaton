const mongoose = require('mongoose');

const { Schema } = mongoose;

const Expense = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others'],
    required: true,
  },
  date: {
    type: Number,
    timestamp: true,
    default: Date.now,
  }
})

module.exports = mongoose.model('Expense', Expense);