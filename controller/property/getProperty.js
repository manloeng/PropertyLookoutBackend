const Property = require("../../models/property/model");

async function getProperty(req, res) {
  try {
    const { propertyId } = req.params;
    const property = await Property.find({ _id: propertyId }).exec();
    return res.status(200).json(property);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getProperty;
