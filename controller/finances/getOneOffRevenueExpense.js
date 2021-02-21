const OneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model");

async function getOneOffRevenueExpense(req, res) {
  try {
    const { propertyId } = req.query;

    const oneOffRevenueExpense = await OneOffRevenueExpense.find({ property: propertyId }).exec();

    res.status(200).send({ oneOffRevenueExpense });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getOneOffRevenueExpense;
