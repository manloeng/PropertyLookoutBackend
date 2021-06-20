const mongoose = require("mongoose");
const SessionsSchema = require("./schema");

module.exports = mongoose.model("Sessions", SessionsSchema, "sessions");
