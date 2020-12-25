const Property = require("../../models/property/model");

async function getPropertyByPropertyId(req, res) {
  const { property_id } = req.params;

  const property = await Property.find({ _id: property_id });

  return res.status(200).json(property);
}

module.exports = getPropertyByPropertyId;
