const { connection } = require("mongoose");
const ProjectExpenses = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("ProjectExpenses", ProjectExpenses, "projectExpenses");
