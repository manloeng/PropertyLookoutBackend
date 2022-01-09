const Finance = require("../../../models/property/model");

async function deletePropertyData(propertyId) {
  console.log("deleting property data...");
  const documentExist = await Finance.exists({ property: propertyId });
  if (documentExist) {
    await Model.deleteMany({ property: propertyId });
  }
}

module.exports = deletePropertyData;
