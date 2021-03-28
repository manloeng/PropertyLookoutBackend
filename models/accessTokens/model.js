const mongoose = require("mongoose");
const AccessTokensSchema = require("./schema");

module.exports = mongoose.model("AccessTokens", AccessTokensSchema, "accessTokens");
