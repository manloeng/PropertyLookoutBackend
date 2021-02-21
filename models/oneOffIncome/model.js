const { connection } = require("mongoose");
const OneOffIncomeSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("OneOffIncome", OneOffIncomeSchema, "oneOffIncome");
