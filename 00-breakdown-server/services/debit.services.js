const Debit = require('../models/debit');
const User = require('../models/user');


const postDebit = ( userId, amount, date, dueDate ) => new Promise((fullfill, reject) => {
  const newDebit = new Debit({
    amount: amount,
    date: date, 
    dueDate: dueDate,
  });
  newDebit.save();
  User.findOneAndUpdate({ _id: userId }, { $push: { debit: newDebit._id } }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      Debit.findById(newDebit._id, (error, data) => {
        if (error) {
          reject(error);
          console.log(error)
        } else {
          console.log(data)
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

const deleteDebit = (debitId) => new Promise((fullfill, reject) => {
  Debit.findOneAndDelete({ _id: debitId}, (error) => {
    if (error) {
      reject(error);
    } else {
      fullfill({
        "message": "debit deleted",
      });
    }
  });
});

module.exports = {
  postDebit,
  putDebit,
  deleteDebit,
};