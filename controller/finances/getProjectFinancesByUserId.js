const monthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model.js");
const monthlyIncome = require("../../models/monthlyIncome/model.js");
const monthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model.js");
const oneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model.js");
const oneOffIncome = require("../../models/oneOffIncome/model.js");
const oneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model.js");

async function getProjectFinanceByUserId(req, res) {
  try {
    const { userId, startDate } = req.query;

    let monthlyCapitalExpenseResponse;
    let monthlyIncomeResponse;
    let monthlyRevenueExpenseResponse;
    let oneOffCapitalExpenseResponse;
    let oneOffIncomeResponse;
    let oneOffRevenueExpenseResponse;

    if (startDate) {
      const newStartDate = new Date(startDate);
      const currentYear = newStartDate.getFullYear();
      monthlyCapitalExpenseResponse = await monthlyCapitalExpense
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      monthlyIncomeResponse = await monthlyIncome
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      monthlyRevenueExpenseResponse = await monthlyRevenueExpense
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffCapitalExpenseResponse = await oneOffCapitalExpense
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffIncomeResponse = await oneOffIncome
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffRevenueExpenseResponse = await oneOffRevenueExpense
        .find({ $and: [{ account: userId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
    } else {
      monthlyCapitalExpenseResponse = await monthlyCapitalExpense
        .find({ account: userId })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      monthlyIncomeResponse = await monthlyIncome.find({ account: userId }).sort({ startDate: 1 }).lean().exec();
      monthlyRevenueExpenseResponse = await monthlyRevenueExpense
        .find({ account: userId })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffCapitalExpenseResponse = await oneOffCapitalExpense
        .find({ account: userId })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffIncomeResponse = await oneOffIncome.find({ account: userId }).sort({ startDate: 1 }).lean().exec();
      oneOffRevenueExpenseResponse = await oneOffRevenueExpense
        .find({ account: userId })
        .sort({ startDate: 1 })
        .lean()
        .exec();
    }

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
