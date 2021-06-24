const mongoose = require("mongoose");
const OneOffRevenueExpenseSchema = require("./schema");

module.exports =
  mongoose.models.OneOffRevenueExpense ||
  mongoose.model("OneOffRevenueExpense", OneOffRevenueExpenseSchema, "oneOffRevenueExpense");
