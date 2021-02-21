const { connection } = require("mongoose");
const MonthlyIncomeSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("MonthlyIncome", MonthlyIncomeSchema, "monthlyIncome");
