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

const updateExpense = (expenseId, amount, category, ) => new Promise((fullfill, reject) => {
  Expense.findOneAndUpdate({ _id: expenseId },
    { $set: { amount: amount, category: category } }, (err, data) => {
      if (err || data === null) {
        reject(err);
      } else {
        fullfill(data);
      }
    });
});

const deleteExpense = (userId, expenseId) => new Promise((fullfill, reject) => {
  Expense.findOneAndDelete({ _id: expenseId }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      User.findOneAndUpdate({ _id: userId }, { $pull: { expense: expenseId } }, (err) => {
        if (err) {
          reject(err);
        } else {
          fullfill(data);
        }
      });
    }
  });
});

module.exports = {
  postExpense,
  updateExpense,
  deleteExpense,
}