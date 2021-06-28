const monthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model.js");
const monthlyIncome = require("../../models/monthlyIncome/model.js");
const monthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model.js");
const oneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model.js");
const oneOffIncome = require("../../models/oneOffIncome/model.js");
const oneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model.js");

async function getProjectFinanceByUserId(req, res) {
  try {
    const { userId } = req;
    const { startDate } = req.query;
    const finances = {};
    let query = 1;

    const financeArray = [
      monthlyCapitalExpense,
      monthlyIncome,
      monthlyRevenueExpense,
      oneOffCapitalExpense,
      oneOffIncome,
      oneOffRevenueExpense,
    ];

    const financeStringArray = [
      "monthlyCapitalExpense",
      "monthlyIncome",
      "monthlyRevenueExpense",
      "oneOffCapitalExpense",
      "oneOffIncome",
      "oneOffRevenueExpense",
    ];

    if (startDate) {
      const newStartDate = new Date(startDate);
      const currentYear = newStartDate.getFullYear();
      query = { $gte: `${currentYear}-01-01` };
    }

    for (let i = 0; i < financeArray.length; i++) {
      const finance = financeArray[i];
      const response = await finance
        .find({ $and: [{ userId }, { startDate: query }] })
        .sort({ startDate: 1 })
        .lean();

      finances[financeStringArray[i]] = response;
    }

    return res.status(200).json(finances);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProjectFinanceByUserId;
