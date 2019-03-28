const expenseService = require('../services/expenses.service');

const postExpense = ( req, res) => {
  const { userId, amount, category } = req.body;
  if( category === 'accomodation' || category === 'car' || category === 'family' || category === 'clothes' || category === 'food' ||
    category === 'recreation' || category === 'healt' || category === 'pets' || category === 'household' || category === 'technologies' ||
    category === 'travel' || category  === 'others' && amount > 0 ) {

    }
}