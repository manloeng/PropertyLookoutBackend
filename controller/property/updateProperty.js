const Property = require("../../models/property/model");

async function updateProperty(req, res) {
  try {
    const { propertyId } = req.params;
    const data = req.body;

    const documentExist = await Property.exists({ _id: propertyId });

    if (documentExist) {
      const property = await Property.findByIdAndUpdate(
        { _id: propertyId },
        { $set: data },
        { strict: false, upsert: true, multi: true, new: true }
      ).exec();

      if (property) {
        return res.status(200).json(property);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = updateProperty;
