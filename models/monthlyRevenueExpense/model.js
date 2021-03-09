const mongoose = require("mongoose");
const MonthlyRevenueExpenseSchema = require("./schema");

module.exports = mongoose.model("MonthlyRevenueExpense", MonthlyRevenueExpenseSchema, "monthlyRevenueExpense");
