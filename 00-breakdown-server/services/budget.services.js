const User = require('../models/user');
const Budget = require('../models/budget');

const addBudget = (id, category, maxValue) => new Promise((fullfill, reject) => {
  const newBudget = new Budget({
    maxValue: maxValue,
    category: category,
  });
  newBudget.save();
  User.findOneAndUpdate({ _id: id }, { $push: { budget: newBudget._id } }, (err) => {
    if (err) {
      reject(err);
    } else {
      fullfill(newBudget);
    }
  });
});

const modifyBudget = (budgetId, category, maxValue) => new Promise((fullfill, reject) => {
  Budget.findOneAndUpdate({ _id: budgetId }, { $set: { category: category, maxValue:maxValue } }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      fullfill(data);
    }
  });
});

const deleteBudget = (budgetId) => new Promise((fullfill, reject) => {
  Budget.findOneAndDelete({ _id: budgetId }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      fullfill(data);
    }
  });
});

const getBudget = (budgetId) => new Promise((fullfill, reject) => {
  Budget.findOne({ _id: budgetId }, (err, data) => {
    if (err || data === null) {
      reject(err);
    } else {
      fullfill(data);
    }
  });
});

module.exports = {
  addBudget,
  modifyBudget,
  deleteBudget,
  getBudget,
};