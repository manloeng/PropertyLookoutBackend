const mongoose = require("mongoose");
const OneOffCapitalExpenseSchema = require("./schema");

module.exports = mongoose.model("OneOffCapitalExpenseSchema", OneOffCapitalExpenseSchema, "oneOffCapitalExpenseSchema");
