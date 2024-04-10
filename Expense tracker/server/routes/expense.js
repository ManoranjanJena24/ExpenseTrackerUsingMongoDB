const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expenses'); 

const router = express.Router();

router.get('/expenses', expenseController.getExpenses);

router.post('/add-expense', expenseController.postAddExpense);

router.delete('/delete-expense/:id', expenseController.postDeleteExpense);

router.post('/edit-expense/:id', expenseController.postEditExpense);



module.exports = router;
