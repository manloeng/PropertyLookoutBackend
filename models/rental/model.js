const mongoose = require("mongoose");
const RentalSchema = require("./schema");

module.exports = mongoose.model("Rental", RentalSchema, "rental");
