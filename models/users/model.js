const mongoose = require("mongoose");
const UsersSchema = require("./schema");

module.exports = mongoose.model("Users", UsersSchema, "users");
