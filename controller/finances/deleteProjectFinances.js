const Finance = require("../../models/finances/model");

async function deleteProjectFinances(req, res) {
  try {
    const propertyId = req.params.propertyId;
    const { property, costPayload } = req.body;

    const updateString = getUpdateString(costPayload);
    const updateArray = getUpdatedResults(property, costPayload);

    const finance = await Finance.findOne({ property: propertyId });
    if (Object.keys(finance).length) {
      const updateCheck = await Finance.updateOne(
        { property: propertyId },
        { $set: { [updateString]: updateArray } },
        { strict: false, upsert: true }
      ).exec();

      console.log(updateCheck.ok, "update check");

      const newFinance = await Finance.findOne({ property: propertyId });
      return res.status(201).json(newFinance);
    } else {
      return res.status(404).json({ msg: "finance not found" });
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = deleteProjectFinances;

function getUpdateString(costPayload) {
  const { name, finance } = costPayload;
  const financeType = name;
  let dateKey = getDateKey(new Date(finance.startDate));

  let updateString;
  if (financeType === "Monthly Incomes") {
    updateString = "income.monthly." + dateKey;
  } else if (financeType === "One Time Incomes") {
    updateString = "income.oneTime." + dateKey;
  } else if (financeType === "Monthly Capital Expenses") {
    updateString = "expense.capital.monthly." + dateKey;
  } else if (financeType === "One Time Capital Expenses") {
    updateString = "expense.capital.oneTime." + dateKey;
  } else if (financeType === "Monthly Revenue Expenses") {
    updateString = "expense.revenue.monthly." + dateKey;
  } else if (financeType === "One Time Revenue Expenses") {
    updateString = "expense.revenue.oneTime." + dateKey;
  }

  return updateString;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${month + 1}/${year}`;
}

function getUpdatedResults(property, costPayload) {
  const { finance } = costPayload;

  const monthlyFinanceArray = getFinanceArray(property, costPayload);

  const nameOfFinances = monthlyFinanceArray.map((data) => {
    return data.name;
  });
  const indexOfFinance = nameOfFinances.indexOf(finance.name);

  monthlyFinanceArray.splice(indexOfFinance, 1);

  return monthlyFinanceArray;
}

function getFinanceArray(property, costPayload) {
  const { name, finance } = costPayload;
  const financeType = name;
  let dateKey = getDateKey(new Date(finance.startDate));

  let monthlyFinanceArray = {};
  if (financeType === "Monthly Incomes") {
    monthlyFinanceArray = property.income.monthly[dateKey];
  } else if (financeType === "One Time Incomes") {
    monthlyFinanceArray = property.income.oneTime[dateKey];
  } else if (financeType === "Monthly Capital Expenses") {
    monthlyFinanceArray = property.expense.capital.monthly[dateKey];
  } else if (financeType === "One Time Capital Expenses") {
    monthlyFinanceArray = property.expense.capital.oneTime[dateKey];
  } else if (financeType === "Monthly Revenue Expenses") {
    monthlyFinanceArray = property.expense.revenue.monthly[dateKey];
  } else if (financeType === "One Time Revenue Expenses") {
    monthlyFinanceArray = property.expense.revenue.oneTime[dateKey];
  }

  return monthlyFinanceArray;
}
