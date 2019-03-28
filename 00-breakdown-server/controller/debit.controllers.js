require('dotenv').config();
const debitService = require('../services/debit.services');

const postDebit = (req, res) => {
  const { userId, amount, date, dueDate } = req.body;
  debitService.postDebit(userId, amount, date, dueDate)
  .then((debit) => res.status(200).json(debit))
  .catch(error => res.status(500).json(error));
}

const putDebit = (req, res) => {
  const { debitId, amount, date, dueDate } = req.body;
  debitService.putDebit(debitId, amount, date, dueDate)
  .then((debit) => res.status(200).json(debit))
  .catch(error => res.status(500).json(error));
}

const deleteDebit = (req, res) => {
  const { debitId } = req.body;
  debitService.deleteDebit(debitId)
  .then((message) => res.status(200).json(message))
  .catch(error => res.status(500).json(error));
}

module.exports = {
  postDebit,
  putDebit,
  deleteDebit,
};