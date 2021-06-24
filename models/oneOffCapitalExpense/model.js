const mongoose = require("mongoose");
const OneOffCapitalExpenseSchema = require("./schema");

module.exports =
  mongoose.models.OneOffCapitalExpense ||
  mongoose.model("OneOffCapitalExpense", OneOffCapitalExpenseSchema, "oneOffCapitalExpense");
