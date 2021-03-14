const mongoose = require("mongoose");
const accountsSchema = require("./schema");

module.exports = mongoose.model("Accounts", accountsSchema, "accounts");
