function getAverageRent(finances) {
  const rents = finances.filter(
    (finance) => finance.name == "Rent" || finance.name == "rent"
  );

  if (!rents.length) return 0;

  const numberOfTimesPaid = rents.length;
  const totalRent = getTotal(rents);
  const averageRent = Math.round((totalRent / numberOfTimesPaid) * 100) / 100;
  return averageRent;
}

function getNetIncome(finances) {
  const grossIncome = getGrossIncome(finances);
  const grossExpense = getGrossExpense(finances);
  const netIncome = grossIncome - grossExpense;
  return netIncome;
}

function getGrossIncome(finances) {
  const incomes = finances.filter((finance) => finance.type == "income");
  const grossIncome = getTotal(incomes);
  return grossIncome;
}

function getGrossExpense(finances) {
  const expenses = finances.filter((finance) => finance.type == "revenue");
  const grossExpense = getTotal(expenses);
  return grossExpense;
}

function getTotal(finance) {
  const total = Object.values(finance).reduce(
    (previousKey, key) => previousKey + key.cost,
    0
  );
  return total;
}

function getAverageMonthlyIncome(finances) {
  const divisor = getDivisorByMonth();
  const grossIncome = getGrossIncome(finances);
  const averagePerMonth = Math.round((grossIncome / divisor) * 100) / 100;
  return averagePerMonth;
}

function getAverageMonthlyExpense(finances) {
  const divisor = getDivisorByMonth();
  const grossExpense = getGrossExpense(finances);
  const averagePerMonth = Math.round((grossExpense / divisor) * 100) / 100;
  return averagePerMonth;
}

function getDivisorByMonth() {
  const d = new Date();
  const currentMonth = d.getMonth();
  const diff = currentMonth + 1;
  return diff;
}

function getReturnOnInvestment(finances) {
  const netIncome = getNetIncome(finances);
  const totalCapital = getTotalEquity(finances);

  if (!netIncome) return 0;
  const ROI = ((netIncome / totalCapital) * 100).toFixed(2);
  return ROI;
}

function getGrossYield(finances, purchasePrice) {
  const grossIncome = getGrossIncome(finances);
  const grossYield = ((grossIncome / purchasePrice) * 100).toFixed(2);
  return grossYield;
}

function getNetYield(finances, purchasePrice) {
  const netIncome = getNetIncome(finances);
  const netYield = ((netIncome / purchasePrice) * 100).toFixed(2);
  return netYield;
}

function getLoanToValue(finances, purchasePrice) {
  const totalEquity = getTotalEquity(finances);
  const loanToValue = ((totalEquity / purchasePrice) * 100).toFixed(2);
  return loanToValue;
}

function getTotalEquity(finances) {
  const capital = finances.filter((finance) => finance.type == "capital");
  const totalCapital = getTotal(capital);
  return totalCapital;
}

module.exports = {
  getAverageRent,
  getGrossIncome,
  getNetIncome,
  getAverageMonthlyIncome,
  getAverageMonthlyExpense,
  getReturnOnInvestment,
  getGrossYield,
  getNetYield,
  getLoanToValue,
  getTotalEquity,
};
