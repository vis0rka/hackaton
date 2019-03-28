const expenseService = require('../services/expenses.service');

const postExpenseController = ( req, res) => {
  const { userId, amount, category } = req.body;
  const expenseCategory = ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others']
  if (!expenseCategory.includes(category) || !userId || !amount || amount <= 0) {
    res.status(400).json({ status: 'error', message: 'You missed something or you give invalid amount' })
  } else {
    expenseService.postExpense(userId, category, amount)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
}

const updateExpenseController = (req, res) => {
  const { expenseId, amount, category } = req.body;
  const expenseCategory = ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others']
  if (!expenseCategory.includes(category) || !expenseId || !amount || amount <= 0) {
    res.status(400).json({ status: 'error', message: 'You missed something or you give invalid amount' })
  } else {
    expenseService.postExpense(expenseId, category, amount)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
}

module.exports = {
  postExpenseController,
  updateExpenseController,
}