const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');
const expenseController = require('../controller/expense.controller');

router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

router.post('/expense', expenseController.postExpenseController);

router.put('/expense', expenseController.updateExpenseController);

router.delete('/expense', expenseController.deleteExpense);

module.exports = router;
