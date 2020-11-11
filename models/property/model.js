const { connection } = require("mongoose");
const PropertySchema = require("./schema");
const propertyDB = connection.useDb(process.env.DB);

module.exports = propertyDB.model("Property", PropertySchema, "property");
