const Property = require("../../models/property/model.js");

async function deletePropertyByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;

    const property = await Property.find({ _id: propertyId }).exec();

    if (property) {
      await Property.deleteOne({ _id: propertyId }).exec();
      res.status(201).send({ msg: "Sucessfully deleted property" });
    }
  } catch (e) {
    res.send("error...");
  }
}

module.exports = deletePropertyByPropertyId;
