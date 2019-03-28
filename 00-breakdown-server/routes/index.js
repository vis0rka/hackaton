const express = require("express");
const router = express.Router();

const userController = require("../controller/user.contoller");
const incomeComtroller = require("../controller/income.controller");

router.post("/register", userController.registerUser);

router.post("/login", userController.userLogin);

// income

router.post("/income", incomeComtroller.postIncome);

router.put("/income", incomeComtroller.updateIncome);

router.delete("/income", incomeComtroller.deleteIncome);

module.exports = router;
