const path = require('path');
var cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const Expense = require('./models/expense')


const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    Expense.findByPk(1).then((expense) => {
        req.expense = expense
        next();
    }).catch((err) => {
        console.log(err)
    })

})



app.use(expenseRoutes)


sequelize.sync({
    // force: true  //these should not be done in production becoz we donot want to overwrite the table everytime we run

})
    
app.listen(3000);







