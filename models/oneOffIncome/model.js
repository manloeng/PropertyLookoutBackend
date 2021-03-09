const mongoose = require("mongoose");
const OneOffIncomeSchema = require("./schema");

module.exports = mongoose.model("OneOffIncome", OneOffIncomeSchema, "oneOffIncome");
