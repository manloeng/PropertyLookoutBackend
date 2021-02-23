const Rental = require("../../models/rental/model");

async function getRentalDataByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;

    const rental = await Rental.findOne({ property: propertyId }).exec();

    return res.status(200).json(rental);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getRentalDataByPropertyId;
