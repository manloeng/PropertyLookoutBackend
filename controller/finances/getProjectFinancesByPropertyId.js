const { finance } = require("faker");
const Properties = require("../../models/property/model.js");
const Finances = require("../../models/finances/model.js");

async function getProjectFinancesByUserId(req, res) {
  try {
    const { userId } = req.query;

    const properties = await Properties.find({ landlord: userId }).exec();
    const propertyIds = properties.map((property) => property._id);

    const finances = propertyIds.map(async (propertyId) => {
      const response = await Finances.findOne({ property: propertyId });
      if (response) return response;
      else return {};
    });

    Promise.all(finances).then((finances) => {
      return res.status(200).json(finances);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProjectFinancesByUserId;
