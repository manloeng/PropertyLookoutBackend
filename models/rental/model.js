const { connection } = require("mongoose");
const RentalSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("Rental", RentalSchema, "rental");
