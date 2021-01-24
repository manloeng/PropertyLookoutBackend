const Finances = require("../../models/finances/model.js");

async function getProjectFinancesByUserId(req, res) {
  try {
    const { propertyId } = req.params;

    const response = await Finances.find({ property: propertyId }).exec();

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProjectFinancesByUserId;
