const Properties = require("../../models/property/model.js");
const Rental = require("../../models/rental/model.js");

async function getAllPropertyRentalByUserId(req, res) {
  try {
    const { userId } = req.query;
    const properties = await Properties.find({ account: userId });

    const promises = properties.map(async (propertyData) => {
      const rentals = await Rental.findOne({ property: propertyData._id });

      let newProperty = {};

      if (rentals) {
        const { _id, account, property, ...data } = rentals.toObject();
        newProperty = { ...propertyData.toObject(), ...data };
      } else {
        newProperty = { ...propertyData.toObject() };
      }

      return newProperty;
    });

    Promise.all(promises).then((properties) => {
      return res.status(200).json(properties);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAllPropertyRentalByUserId;
