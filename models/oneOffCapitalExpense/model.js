const mongoose = require("mongoose");
const OneOffCapitalExpenseSchema = require("./schema");

module.exports = mongoose.model("OneOffCapitalExpense", OneOffCapitalExpenseSchema, "oneOffCapitalExpense");
