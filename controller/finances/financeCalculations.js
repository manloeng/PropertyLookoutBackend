const Finance = require("../../models/finance/model.js");
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
  // should be for the current year - need to add date query
  const finance = await Finance.find({}).lean();
  const grossIncome = getGrossIncome(finance);
  const netIncome = getNetIncome(finance);
  const averageMonthlyIncome = getAverageMonthlyIncome(finance);
  const averageMonthlyExpense = getAverageMonthlyExpense(finance);
  const returnOnInvestment = getReturnOnInvestment(finance);
  const grossYield = getGrossYield(finance);
  const netYield = getNetYield(finance);
  const loanToValue = getLoanToValue(finance);
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

  return dataAnalysis;
}

module.exports = analyseFinancialData;
