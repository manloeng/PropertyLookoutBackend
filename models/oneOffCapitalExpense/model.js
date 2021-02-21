const { connection } = require("mongoose");
const OneOffCapitalExpenseSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("OneOffCapitalExpense", OneOffCapitalExpenseSchema, "oneOffCapitalExpense");
