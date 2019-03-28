const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');
const debitController = require('../controller/debit.controllers');
const budgetController = require('../controller/budget.controller');


router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

router.post('/postDebit', debitController.postDebit);

router.put('/putDebit', debitController.putDebit);

router.delete('/deleteDebit', debitController.deleteDebit);

router.get('/allaboutuser', userController.getAllAboutUser);

router.post('/budget', budgetController.postBudget);

router.put('/budget', budgetController.putBudget);

router.delete('/budget', budgetController.deleteBudget);

router.get('/budget', budgetController.getAllBudget);


module.exports = router;
