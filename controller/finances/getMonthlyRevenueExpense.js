const MonthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model");

async function getMonthlyRevenueExpense(req, res) {
  try {
    const { propertyId } = req.query;

    const monthlyRevenueExpense = await MonthlyRevenueExpense.find({ property: propertyId }).exec();

    res.status(200).send({ monthlyRevenueExpense });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getMonthlyRevenueExpense;
