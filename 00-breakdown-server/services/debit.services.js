const Debit = require('../models/debit');
const User = require('../models/user');


const postDebit = ( userId, amount
  // , date, dueDate 
  ) => new Promise((fullfill, reject) => {
  const newDebit = new Debit({
    amount: amount,
    // date: date, 
    // dueDate: dueDate,
  });
  newDebit.save();
  User.findOneAndUpdate({ _id: userId }, { $push: { debit: newDebit._id } }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      Debit.findById(newDebit._id, (error, data) => {
        if (error) {
          reject(error);
        } else {
          fullfill(data);
        }
      });
    }  
  });
});

const putDebit = ( debitId, amount, date, dueDate ) => new Promise((fullfill, reject) => {
  Debit.findOneAndUpdate({ _id: debitId }, 
    { $set: { amount: amount, date: date, dueDate: dueDate } }, (error) => {
      if (error) {
        reject(error);
      } 
    })
    .then(
      Debit.findById(debitId, (error, data) => {
        if (error) {
          reject(error);
        } else {
          fullfill(data);
        }
      }))
    .catch(error => reject(error));
});

const deleteDebit = (userId, debitId) => new Promise((fullfill, reject) => {
  Debit.findOneAndDelete({ _id: debitId }, (error, data) => {
    if (error || !data) {
      reject({"message": "no debit found"});
    } else {
      User.findOneAndUpdate( { _id: userId }, { $pull: { debit: debitId } }, (err, data) => {
        if (err || !data) {
          reject({"message": "no user found"});
        } else {
          fullfill({
            "message": "debit deleted",
          });
        }
      });
    }
  })
  .catch(error => reject(error));
});

module.exports = {
  postDebit,
  putDebit,
  deleteDebit,
};