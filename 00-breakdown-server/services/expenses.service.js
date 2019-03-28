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

const updateExpense = (id, amount, category, ) => new Promise((fullfill, reject) => {
  Expense.findOneAndUpdate({ _id: id },
    { $set: { amount: amount, category: category } }, (err, data) => {
      if(err || data === null) {
        reject(err)
      } else {
        fullfill(data)
      }
    }
  )
})

module.exports = {
  postExpense,
  updateExpense,
}