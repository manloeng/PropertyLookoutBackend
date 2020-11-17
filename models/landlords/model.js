const { connection } = require("mongoose");
const LandlordsSchema = require("./schema");
const db = connection.useDb(process.env.DB);

module.exports = db.model("Landlords", LandlordsSchema, "landlords");
