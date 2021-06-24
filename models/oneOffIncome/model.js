const mongoose = require("mongoose");
const OneOffIncomeSchema = require("./schema");

module.exports = mongoose.models.OneOffIncome || mongoose.model("OneOffIncome", OneOffIncomeSchema, "oneOffIncome");
