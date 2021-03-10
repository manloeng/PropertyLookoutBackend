const Properties = require("../../models/property/model.js");
const Rental = require("../../models/rental/model.js");

async function getAllPropertyRentalByUserId(req, res) {
  try {
    const { userId } = req.query;
    const properties = await Properties.find({ landlord: userId });

    const promises = properties.map(async (property) => {
      const rentals = await Rental.findOne({ property: property._id });
      console.log(property, "prop");
      console.log(rentals, "rentals");
      let newProperty = {};

      if (rentals) {
        newProperty = { ...property.toObject(), ...rentals.toObject() };
      } else {
        newProperty = { ...property.toObject() };
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
