const { connection } = require("mongoose");
const FinancesSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("Finances", FinancesSchema, "finances");
