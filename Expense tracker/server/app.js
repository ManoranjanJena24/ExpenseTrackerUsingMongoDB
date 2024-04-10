const path = require('path');
var cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose')

const sequelize = require('./util/database')

const Expense = require('./models/expense')


const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     Expense.findByPk(1).then((expense) => {
//         req.expense = expense
//         next();
//     }).catch((err) => {
//         console.log(err)
//     })

// })





app.use(expenseRoutes)


mongoose.connect('mongodb+srv://Sharpner:sharpner123@cluster0.hvfvrv3.mongodb.net/expenseTracker?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database')
        app.listen(3000)
    }).catch((err) => {
        console.log(err)
    })







