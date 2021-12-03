const mongoose = require("mongoose");
const FinanceSchema = require("./schema");

module.exports = mongoose.model("Finance", FinanceSchema, "finance");
