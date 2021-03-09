const mongoose = require("mongoose");
const OneOffRevenueExpenseSchema = require("./schema");

module.exports = mongoose.model("OneOffRevenueExpense", OneOffRevenueExpenseSchema, "oneOffRevenueExpense");
