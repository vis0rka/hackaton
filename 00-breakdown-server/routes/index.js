const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');
const budgetController = require('../controller/budget.controller');

router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

router.get('/allaboutuser', userController.getAllAboutUser);

router.post('/budget', budgetController.postBudget);

router.put('/budget', budgetController.putBudget);

router.delete('/budget', budgetController.deleteBudget);

router.get('/budget', budgetController.getBudget);

module.exports = router;
