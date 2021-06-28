const Property = require("../../models/property/model.js");
const deletePropertyData = require("../utils/deletePropertyData");

async function deletePropertyByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;

    const property = await Property.find({ _id: propertyId }).exec();

    if (property) {
      const response = await Property.deleteOne({ _id: propertyId }).exec();

      if (response.ok === 1) {
        await deletePropertyData(propertyId);
      }
      res.status(201).send({ msg: "Sucessfully deleted property" });
    }
  } catch (e) {
    res.send("error...");
  }
}

module.exports = deletePropertyByPropertyId;
