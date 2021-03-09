const mongoose = require("mongoose");
const MonthlyIncomeSchema = require("./schema");

module.exports = mongoose.model("MonthlyIncome", MonthlyIncomeSchema, "monthlyIncome");
