const mongoose = require("mongoose");
const LandlordsSchema = require("./schema");

module.exports = mongoose.model("Landlords", LandlordsSchema, "landlords");
