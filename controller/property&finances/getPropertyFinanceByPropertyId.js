const Property = require("../../models/property/model");
const Finances = require("../../models/finances/model");

// @todo - need to create a new schema to combine the 2 docs
async function getPropertyFinanceByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;

    const propertyData = await Property.find({ _id: propertyId }).exec();
    const { _id, property, ...restOfFinances } = await Finances.find({ property: propertyId }).exec();

    // const newPropertyObject = { restOfFinances, ...propertyData };
    console.log(newPropertyObject, "props");
    return res.status(200).json(newPropertyObject);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getPropertyFinanceByPropertyId;
