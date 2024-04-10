const Sequelize = require('sequelize')
const sequelize = new Sequelize('expense_tracker', 'root', 'user', { dialect: 'mysql', host: 'localhost' })
module.exports = sequelize