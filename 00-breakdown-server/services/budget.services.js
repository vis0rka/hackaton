const User = require('../models/user');
const Budget = require('../models/budget');

const addBudget = (id, category, maxValue) => new Promise((fullfill, reject) => {
  const newBudget = new Budget({
    maxValue: maxValue,
    category: category,
  });
  newBudget.save((error, newBudgetEntry) => {
    if (error) {
      reject(error)
    } else {
      User.findOneAndUpdate({ _id: id }, { $push: { budget: newBudget._id } }, (err) => {
        if (err) {
          reject(err);
        } else {
          fullfill(newBudgetEntry);
        }
      });
    }
  });
});

const modifyBudget = (budgetId, category, maxValue) => new Promise((fullfill, reject) => {
  Budget.findOneAndUpdate({ _id: budgetId }, { $set: { category: category, maxValue: maxValue } }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      fullfill(data);
    }
  });
});

const deleteBudget = (userId, budgetId) => new Promise((fullfill, reject) => {
  Budget.findOneAndDelete({ _id: budgetId }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      User.findOneAndUpdate({ _id: userId }, { $pull: { budget: budgetId } }, (err) => {
        if (err) {
          reject(err);
        } else {
          fullfill(data);
        }
      });
    }
  });
});

const getAllBudget = (userId) => new Promise((fullfill, reject) => {
  User.findById(userId)
  .populate('budget')
  .select('budget')
  .exec((error, myBudget) => (error ? reject(error) : fullfill(myBudget.budget)));
});

module.exports = {
  addBudget,
  modifyBudget,
  deleteBudget,
  getAllBudget,
};