const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Expense', expenseSchema)




// const Sequelize = require('sequelize')
// const sequelize = require('../util/database')
// const Expense = sequelize.define('expenses', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     amount: {
//         type: Sequelize.INTEGER,
//         // allowNull: false,

//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: false,

//     },
//     category: {
//         type: Sequelize.STRING,
//         // allowNull: false,

//     }

// });

// module.exports = Expense;



