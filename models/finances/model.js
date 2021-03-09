const mongoose = require("mongoose");
const FinancesSchema = require("./schema");

module.exports = mongoose.model("Finances", FinancesSchema, "finances");
