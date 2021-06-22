const Properties = require("../../models/property/model.js");

async function getAllPropertiesByUserId(req, res) {
  try {
    const { userId } = req;

    const properties = await Properties.find({ userId });

    return res.status(200).json(properties);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAllPropertiesByUserId;
