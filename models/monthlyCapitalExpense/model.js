const mongoose = require("mongoose");
const MonthlyCapitalExpenseSchema = require("./schema");

module.exports = mongoose.model("MonthlyCapitalExpense", MonthlyCapitalExpenseSchema, "monthlyCapitalExpense");
