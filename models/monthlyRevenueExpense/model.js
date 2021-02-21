const { connection } = require("mongoose");
const MonthlyRevenueExpenseSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("MonthlyRevenueExpense", MonthlyRevenueExpenseSchema, "monthlyRevenueExpense");
