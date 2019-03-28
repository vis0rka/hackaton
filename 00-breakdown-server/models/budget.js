const mongoose = require('mongoose');

const { Schema } = mongoose;

const Budget = new Schema({
  maxValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others'],
    required: true,
  },
})

module.exports = mongoose.model('Budget', Budget);