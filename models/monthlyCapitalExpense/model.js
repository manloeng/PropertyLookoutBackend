const { connection } = require("mongoose");
const MonthlyCapitalExpenseSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("MonthlyCapitalExpense", MonthlyCapitalExpenseSchema, "monthlyCapitalExpense");
