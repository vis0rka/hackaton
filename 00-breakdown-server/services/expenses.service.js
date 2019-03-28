const Expense = require('../models/expense');
const User = require('../models/user');

const postExpense = body => new Promise((resolve, reject) => {
  const { userId, category, amount } = body;
  new Expense({
    category,
    amount,
  })
    .save((error, user) => {
      if (error) {
        reject(error);
      } else {
        User.findOneAndUpdate({ _id: userId },
          { $push: { expense: { amount: amount, category: category} } }, { new: true })
          .then(data => resolve(data))
          .catch(error => reject(error));
        resolve(user);
      }
    });
});

module.exports = {
  postExpense,
}