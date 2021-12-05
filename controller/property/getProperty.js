const Property = require("../../models/property/model");

async function getProperty(req, res) {
  try {
    const { account } = req;
    const { propertyId } = req.params;

    const property = await Property.find({
      $and: [{ account }, { _id: propertyId }],
    }).exec();

    return res.status(200).json(property);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getProperty;
