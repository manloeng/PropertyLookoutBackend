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
const setupQuery = require("./utils/setupQuery");

// getting all, but i need only 1
async function analyseFinancialData(req, res) {
  const query = setupQuery(req);
  const finance = await Finance.find(query).lean();
  const grossIncome = getGrossIncome(finance);
  const netIncome = getNetIncome(finance);
  const averageMonthlyIncome = getAverageMonthlyIncome(finance);
  const averageMonthlyExpense = getAverageMonthlyExpense(finance);

  // Get property data in order to full calculations
  const properties = await Property.find(query).lean();
  const totalPurchasePrice = Object.values(properties).reduce(
    (previousKey, key) => previousKey + key.purchasePrice,
    0
  );

  const returnOnInvestment = getReturnOnInvestment(finance);
  const grossYield = getGrossYield(finance, totalPurchasePrice);
  const netYield = getNetYield(finance, totalPurchasePrice);
  const loanToValue = getLoanToValue(finance, totalPurchasePrice);
  const totalEquity = getTotalEquity(finance);

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
