const Property = require("../../models/property/model.js");

async function getPropertyByPropertyId(req, res) {
  // should be on the route
  const propertyUuid = "5fac5c21d52909df1f9c0e9a";

  const property = await Property.find({ uuid: propertyUuid });

  return res.status(200).json(property);
}

module.exports = getPropertyByPropertyId;
