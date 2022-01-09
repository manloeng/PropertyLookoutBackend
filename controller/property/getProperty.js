const Property = require("../../models/property/model");

async function getProperty(req, res) {
  try {
    const { propertyId } = req.params;
    const property = await Property.findOne({ _id: propertyId }).lean();

    return res.status(200).json(property);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getProperty;
