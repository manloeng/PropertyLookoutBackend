const MonthlyIncome = require("../../models/monthlyIncome/model");

async function getMonthlyIncome(req, res) {
  try {
    const { propertyId } = req.query;

    let monthlyIncome = await MonthlyIncome.find({ property: propertyId }).exec();

    res.status(200).send({ monthlyIncome });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getMonthlyIncome;
