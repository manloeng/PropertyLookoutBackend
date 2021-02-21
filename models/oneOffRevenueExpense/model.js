const { connection } = require("mongoose");
const OneOffRevenueExpenseSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("OneOffRevenueExpense", OneOffRevenueExpenseSchema, "oneOffRevenueExpense");
