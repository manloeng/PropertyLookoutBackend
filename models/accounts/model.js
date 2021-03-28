const mongoose = require("mongoose");
const AccountsSchema = require("./schema");

module.exports = mongoose.model("Accounts", AccountsSchema, "accounts");
