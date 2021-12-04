const Finance = require("../../models/finance/model.js");

async function deletePropertyData(propertyId) {
  const Models = [Rental, Finance];

  console.log("deleting property data...");
  const documentExist = await Finance.exists({ property: propertyId });
  if (documentExist) {
    await Model.deleteMany({ property: propertyId });
  }
}

module.exports = deletePropertyData;
