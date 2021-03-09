const mongoose = require("mongoose");
const PropertiesSchema = require("./schema");

module.exports = mongoose.model("Properties", PropertiesSchema, "properties");
