const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');
const expenseController = require('../controller/expense.controller');

router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

router.post('/expenses', expenseController.postExpenseController);

router.patch('/expenses', expenseController.updateExpenseController);

router.delete('/expenses', expenseController.deleteExpenseController);

router.get('/expenses', expenseController.getAllExpenses);

module.exports = router;
