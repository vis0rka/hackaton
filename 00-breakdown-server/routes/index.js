const express = require('express');
const router = express.Router();

const userController = require('../controller/user.contoller');

router.post('/register', userController.registerUser);

router.post('/login', userController.userLogin);

module.exports = router;
