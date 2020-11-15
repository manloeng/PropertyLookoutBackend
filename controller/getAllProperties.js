const Property = require("../models/property/model.js");

async function getAllProperties(req, res) {
  // based on landlord's id
  // passes array of properties in from frontend

  const propertyUuids = ["5fac5c21d52909df1f9c0e9a", "5fad93483e5d35fe772901ff"];

  const promises = propertyUuids.map(async (uuid) => {
    const property = await Property.find({ uuid });

    return property;
  });

  const properties = await Promise.all(promises);

  return res.status(200).json(properties);
}

module.exports = getAllProperties;
