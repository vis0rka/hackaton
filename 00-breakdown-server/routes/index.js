const express = require("express");
const router = express.Router();

const incomeComtroller = require("../controller/income.controller");
const userController = require("../controller/user.contoller");
const expenseController = require("../controller/expense.controller");
const debitController = require("../controller/debit.controllers");
const budgetController = require("../controller/budget.controller");

router.post("/register", userController.registerUser);

router.post("/login", userController.userLogin);

router.post("/income", incomeComtroller.postIncome);

router.put("/income", incomeComtroller.updateIncome);

router.delete("/income", incomeComtroller.deleteIncome);

router.get("/income", incomeComtroller.getAllIncome);

router.post("/debit", debitController.postDebit);

router.put("/debit", debitController.putDebit);

router.delete("/debit", debitController.deleteDebit);

router.post("/allaboutuser", userController.getAllAboutUser);

router.post("/budget", budgetController.postBudget);

router.put("/budget", budgetController.putBudget);

router.delete("/budget", budgetController.deleteBudget);

router.get("/budget", budgetController.getAllBudget);

router.post("/expenses", expenseController.postExpenseController);

router.put("/expenses", expenseController.updateExpenseController);

router.delete("/expenses", expenseController.deleteExpenseController);

router.get("/expenses", expenseController.getAllExpenses);

module.exports = router;
