const Property = require("../../models/property/model");

async function getPropertyByPropertyId(req, res) {
  try {
    const { property_id } = req.params;

    const property = await Property.find({ _id: property_id }).exec();

    return res.status(200).json(property);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getPropertyByPropertyId;
