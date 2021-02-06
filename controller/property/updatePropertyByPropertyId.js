const Property = require("../../models/property/model");

async function updatePropertyByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;
    const data = req.body;

    const property = await Property.findByIdAndUpdate(
      { _id: propertyId },
      { $set: data },
      { strict: false, upsert: true, multi: true, new: true }
    ).exec();

    if (property) {
      return res.status(200).json(property);
    } else return res.send({ msg: "Something Gone Wrong" });
  } catch (e) {
    console.log(e);
  }
}

module.exports = updatePropertyByPropertyId;
