const Rental = require("../../models/rental/model");

async function updateRentalDataByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;
    const data = req.body;

    const documentExist = await Rental.exists({ property: propertyId });

    if (documentExist) {
      const rental = await Rental.findOneAndUpdate(
        { property: propertyId },
        { $set: { ...data } },
        { strict: false, new: true }
      ).exec();

      return res.status(200).json(rental);
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = updateRentalDataByPropertyId;
