const expenseService = require('../services/expenses.service');

const postExpenseController = ( req, res) => {
  const { userId, amount, category } = req.body;
  if( category === 'accomodation' || category === 'car' || category === 'family' || category === 'clothes' || category === 'food' ||
    category === 'recreation' || category === 'healt' || category === 'pets' || category === 'household' || category === 'technologies' ||
    category === 'travel' || category  === 'others' && amount > 0 ) {
      expenseService.postExpense(userId, amount, category)
        .then(() => {
          res.status(200).json({
            message: 'new expense added'
          })
        })
        .catch(error => res.status(500).json(error));
    } else if(!category) {
      res.status(400).json({
        status: 'error',
        message: 'Missing parameter(s): category!',
      });
    } else if(amount < 0) {
      res.status(400).json({
        status: 'error',
        message: 'Expense must be greater than 0!',
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: 'Invalid category!'
      });
    }
}

module.exports = {
  postExpenseController,
}