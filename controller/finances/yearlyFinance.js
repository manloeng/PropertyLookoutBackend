const Finance = require("../../models/finance/model");
const setupQuery = require("./utils/setupQuery");

async function getYearlyFinance(req, res) {
  try {
    const { type } = req.query;
    const query = setupQuery(req);
    const finances = await Finance.find(query).sort({ date: 1 }).lean();

    const endYear = finances[finances.length - 1].date.getFullYear();
    const startYear = finances[0].date.getFullYear();
    const costs = getCosts(finances, startYear, endYear);

    const output = {
      name: type,
      startYear,
      endYear,
      costs,
    };

    return res.status(200).json(output);
  } catch (e) {
    console.log(e);
  }
}

function getCosts(finances, startYear, endYear) {
  const costs = [];
  for (let i = startYear; i <= endYear; i++) {
    const monthlyCost = getMonthlyCosts(finances, i);
    costs.push(monthlyCost);
  }

  return costs;
}

function getMonthlyCosts(finances, startYear) {
  const monthlyCost = Array(12).fill(0);
  finances.forEach((finance) => {
    const year = finance.date.getFullYear();
    if (year == startYear) {
      const month = finance.date.getMonth();
      const cost = finance.cost;
      monthlyCost[month] += cost;
    }
  });

  return monthlyCost;
}

module.exports = getYearlyFinance;
