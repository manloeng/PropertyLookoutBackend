const MonthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model");

async function getMonthlyCapitalExpense(req, res) {
  try {
    const { propertyId } = req.query;

    const monthlyCapitalExpense = await MonthlyCapitalExpense.find({ property: propertyId }).exec();

    res.status(200).send({ monthlyCapitalExpense });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getMonthlyCapitalExpense;
