const Properties = require("../../models/property/model.js");
const Landlords = require("../../models/landlords/model.js");

async function getAllPropertiesByUserId(req, res) {
  try {
    const { userId } = req.query;
    const user = await Landlords.find({ uuid: userId });

    const propertyIdList = user[0].propertyList;

    const promises = propertyIdList.map(async (propertyId) => {
      const property = await Properties.find({ uuid: propertyId });
      return property[0];
    });

    const properties = await Promise.all(promises);

    return res.status(200).json(properties);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAllPropertiesByUserId;
