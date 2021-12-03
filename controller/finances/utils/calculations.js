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
  const expenses = finances.filter((finance) => finance.type != "income");
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

  const capital = finances.filter((finance) => finance.type == "capital");
  const totalCapital = getTotal(capital);

  const ROI = netIncome / totalCapital;
  return ROI;
}
function getGrossYield() {}
function getNetYield() {}
function getLoanToValue() {}
function getTotalEquity() {}

module.exports = {
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
