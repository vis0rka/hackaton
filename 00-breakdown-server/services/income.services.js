const User = require("../models/user");
const Income = require("../models/income");

const addNewIncome = (userId, amount) =>
  new Promise((resolve, reject) => {
    new Income({ amount }).save((error, newIncomeEntry) => {
      if (error) {
        reject({
          error,
          message: "Failed to save data!"
        });
      } else {
        User.findOneAndUpdate(
          { _id: userId },
          { $push: { income: newIncomeEntry._id } },
          err => {
            if (err) {
              reject({
                err,
                message: "Failed to add Income to user!"
              });
            } else {
              resolve(newIncomeEntry);
            }
          }
        );
      }
    });
  });

const updateIncome = (incomeId, amount) =>
  new Promise((resolve, reject) => {
    Income.findOneAndUpdate(
      { _id: incomeId },
      { $set: { amount } },
      (err, data) => {
        if (err || data === null) {
          reject({
            err,
            message: "Failed to update!"
          });
        } else {
          resolve(data);
        }
      }
    );
  });

const deleteIncome = (userId, incomeId) =>
  new Promise((resolve, reject) => {
    Income.findByIdAndDelete({ _id: incomeId }, (err, data) => {
      if (err || data === null) {
        reject(err);
      } else {
        User.findByIdAndUpdate(
          { _id: userId },
          { $pull: { income: incomeId } },
          (err, data) => {
            if (err) {
              reject({
                err,
                message: "Failed to update user/incomeId"
              });
            } else
              resolve({
                message: "Successfully deleted!"
              });
          }
        );
      }
    });
  });

module.exports = {
  addNewIncome,
  updateIncome,
  deleteIncome
};
