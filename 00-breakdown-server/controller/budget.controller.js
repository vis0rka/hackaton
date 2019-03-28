const budgetService = require('../services/budget.services')

const postBudget = (req, res) => {
  const { userId, category, maxValue } = req.body;
  const budgetCategory = ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others']
  if (!budgetCategory.includes(category) || !userId || !maxValue || maxValue < 0) {
    res.status(400).json({ status: 'error', message: 'You made a mistake :(' })
  } else {
    budgetService.addBudget(userId, category, maxValue)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const putBudget = (req, res) => {
  const { budgetId, category, maxValue } = req.body;
  const budgetCategory = ['accomodation', 'car', 'family', 'clothes', 'food', 'recreation', 'health', 'bills', 'pets', 'household', 'technologies', 'travel', 'others']
  if (!budgetCategory.includes(category) || !category || !maxValue || maxValue < 0) {
    res.status(400).json({ status: 'error', message: 'You made a mistake :(' })
  } else {
    budgetService.modifyBudget(budgetId, category, maxValue)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const deleteBudget = (req, res) => {
  const { userId, budgetId } = req.body;
  if (!budgetId || !userId) {
    res.status(400).json({ status: 'error', message: 'You made a mistake :(' })
  } else {
    budgetService.deleteBudget(userId,budgetId)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const getAllBudget = (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ status: 'error', message: 'You made a mistake :(' })
  } else {
    budgetService.getAllBudget(userId)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

module.exports = {
  postBudget,
  putBudget,
  deleteBudget,
  getAllBudget,
};
