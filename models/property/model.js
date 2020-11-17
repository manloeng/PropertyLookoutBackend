const { connection } = require("mongoose");
const PropertiesSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("Properties", PropertiesSchema, "properties");
