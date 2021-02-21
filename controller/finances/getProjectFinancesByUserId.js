const monthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model.js");
const monthlyIncome = require("../../models/monthlyIncome/model.js");
const monthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model.js");
const oneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model.js");
const oneOffIncome = require("../../models/oneOffIncome/model.js");
const oneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model.js");

async function getProjectFinanceByUserId(req, res) {
  try {
    const { userId } = req.query;

    const monthlyCapitalExpenseResponse = await monthlyCapitalExpense.find({ account: userId }).lean().exec();
    const monthlyIncomeResponse = await monthlyIncome.find({ account: userId }).lean().exec();
    const monthlyRevenueExpenseResponse = await monthlyRevenueExpense.find({ account: userId }).lean().exec();
    const oneOffCapitalExpenseResponse = await oneOffCapitalExpense.find({ account: userId }).lean().exec();
    const oneOffIncomeResponse = await oneOffIncome.find({ account: userId }).lean().exec();
    const oneOffRevenueExpenseResponse = await oneOffRevenueExpense.find({ account: userId }).lean().exec();

    let finances = {
      monthlyCapitalExpense: monthlyCapitalExpenseResponse,
      monthlyIncome: monthlyIncomeResponse,
      monthlyRevenueExpense: monthlyRevenueExpenseResponse,
      oneOffCapitalExpense: oneOffCapitalExpenseResponse,
      oneOffIncome: oneOffIncomeResponse,
      oneOffRevenueExpense: oneOffRevenueExpenseResponse,
    };

    return res.status(200).json(finances);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProjectFinanceByUserId;
