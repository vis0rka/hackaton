const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');
const debitController = require('../controller/debit.controllers');

router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

router.post('/postDebit', debitController.postDebit);

router.put('/putDebit', debitController.putDebit);

router.delete('/deleteDebit', debitController.deleteDebit);

module.exports = router;
