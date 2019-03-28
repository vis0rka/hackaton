const Expense = require('../models/expense');
const User = require('../models/user');

const postExpense = (id, category, amount) => new Promise((fullfill, reject) => {
  const newExpense = new Expense({
    amount: amount,
    category: category,
  });
  newExpense.save();
  User.findOneAndUpdate({ _id: id }, { $push: { expense: newExpense._id } }, (err) => {
    if (err) {
      reject(err);
    } else {
      fullfill(newExpense);
    }
  });
});

module.exports = {
  postExpense,
}