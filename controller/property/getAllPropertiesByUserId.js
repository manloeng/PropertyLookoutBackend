const Properties = require("../../models/property/model.js");
const Rental = require("../../models/rental/model.js");

async function getAllPropertiesByUserId(req, res) {
  try {
    const { userId } = req;

    const properties = await Properties.find({ account:userId }).lean();

    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      const id = property._id;
      const rental = await Rental.findOne({ property: id });

      rental.currentRental ? (property.currentRental = rental.currentRental) : (property.currentRental = {});
    }

    return res.status(200).json(properties);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAllPropertiesByUserId;
