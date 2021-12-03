const Finance = require("../../models/finance/model.js");
const Property = require("../../models/property/model.js");
const {
  getGrossIncome,
  getNetIncome,
  getAverageMonthlyIncome,
  getAverageMonthlyExpense,
  getReturnOnInvestment,
  getGrossYield,
  getNetYield,
  getLoanToValue,
  getTotalEquity,
} = require("./utils/calculations");

async function analyseFinancialData() {
  // @todo - should be for the current year - need to add date query
  const yearlyFinance = await Finance.find({}).lean();
  const grossIncome = getGrossIncome(yearlyFinance);
  const netIncome = getNetIncome(yearlyFinance);
  const averageMonthlyIncome = getAverageMonthlyIncome(yearlyFinance);
  const averageMonthlyExpense = getAverageMonthlyExpense(yearlyFinance);

  // Get property data in order to full calculations
  const properties = await Property.find({}).lean();
  const totalPurchasePrice = Object.values(properties).reduce(
    (previousKey, key) => previousKey + key.purchasePrice,
    0
  );

  const allFinance = await Finance.find({}).lean();
  const returnOnInvestment = getReturnOnInvestment(allFinance);
  const grossYield = getGrossYield(allFinance, totalPurchasePrice);
  const netYield = getNetYield(allFinance, totalPurchasePrice);
  const loanToValue = getLoanToValue(allFinance, totalPurchasePrice);
  const totalEquity = getTotalEquity(allFinance);

  const dataAnalysis = {
    grossIncome,
    netIncome,
    averageMonthlyIncome,
    averageMonthlyExpense,
    returnOnInvestment,
    grossYield,
    netYield,
    loanToValue,
    totalEquity,
  };

  return res.status(200).json(dataAnalysis);
}

module.exports = analyseFinancialData;
