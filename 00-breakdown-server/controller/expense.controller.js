const expenseService = require('../services/expenses.service');

const postExpenseController = (req, res) => {
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
    expenseService.updateExpense(expenseId, category, amount)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
}

const deleteExpenseController = (req, res) => {
  const { userId, expenseId } = req.body;
  if (!userId || !expenseId) {
    res.status(400).json({
      status: 'error',
      message: 'Expense does not exist'
    });
  } else {
    expenseService.deleteExpense(userId, expenseId)
      .then(() => res.status(200).json({ status: 'ok', message: 'successfuly deleted' }))
      .catch(error => res.status(500).json(error))
  }
}

const getAllExpenses = (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ status: 'error', message: 'User cannot find' })
  } else {
    expenseService.getAllExpenses(userId)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

module.exports = {
  postExpenseController,
  updateExpenseController,
  deleteExpenseController,
  getAllExpenses,
}