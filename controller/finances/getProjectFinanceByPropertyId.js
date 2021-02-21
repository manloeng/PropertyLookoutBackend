const monthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model.js");
const monthlyIncome = require("../../models/monthlyIncome/model.js");
const monthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model.js");
const oneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model.js");
const oneOffIncome = require("../../models/oneOffIncome/model.js");
const oneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model.js");

async function getProjectFinanceByPropertyId(req, res) {
  try {
    const { propertyId } = req.params;
    const { startDate } = req.query;

    let monthlyCapitalExpenseResponse;
    let monthlyIncomeResponse;
    let monthlyRevenueExpenseResponse;
    let oneOffCapitalExpenseResponse;
    let oneOffIncomeResponse;
    let oneOffRevenueExpenseResponse;

    if (startDate) {
      const currentYear = startDate.getFullYear();
      monthlyCapitalExpenseResponse = await monthlyCapitalExpense
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        // .sort({ startDate: 1 })
        .lean()
        .exec();
      monthlyIncomeResponse = await monthlyIncome
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      monthlyRevenueExpenseResponse = await monthlyRevenueExpense
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffCapitalExpenseResponse = await oneOffCapitalExpense
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffIncomeResponse = await oneOffIncome
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
      oneOffRevenueExpenseResponse = await oneOffRevenueExpense
        .find({ $and: [{ property: propertyId }, { startDate: { $gte: `${currentYear}-01-01` } }] })
        .sort({ startDate: 1 })
        .lean()
        .exec();
    } else {
      monthlyCapitalExpenseResponse = await monthlyCapitalExpense.find({ property: propertyId }).lean().exec();
      monthlyIncomeResponse = await monthlyIncome.find({ property: propertyId }).lean().exec();
      monthlyRevenueExpenseResponse = await monthlyRevenueExpense.find({ property: propertyId }).lean().exec();
      oneOffCapitalExpenseResponse = await oneOffCapitalExpense.find({ property: propertyId }).lean().exec();
      oneOffIncomeResponse = await oneOffIncome.find({ property: propertyId }).lean().exec();
      oneOffRevenueExpenseResponse = await oneOffRevenueExpense.find({ property: propertyId }).lean().exec();
    }

    console.log(monthlyCapitalExpenseResponse, "monthlyCapitalExpenseResponse");
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

module.exports = getProjectFinanceByPropertyId;
