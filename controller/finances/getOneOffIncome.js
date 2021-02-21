const OneOffIncome = require("../../models/oneOffIncome/model");

async function getOneOffIncome(req, res) {
  try {
    const { propertyId } = req.query;

    const oneOffIncome = await OneOffIncome.find({ property: propertyId }).exec();

    res.status(200).send({ oneOffIncome });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getOneOffIncome;
