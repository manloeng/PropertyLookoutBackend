const Property = require("../../models/property/model");
const mongoose = require("mongoose");

async function deleteProjectFinances(req, res) {
  try {
    const property_idString = req.params.property_id;
    const property_id = mongoose.Types.ObjectId(property_idString);
    const { property, costPayload } = req.body;

    const updateString = getUpdateString(costPayload);
    const updateArray = getUpdatedResults(property, costPayload);

    const newPropertyData = await Property.findOneAndUpdate(
      { _id: property_id },
      { $set: { [updateString]: updateArray } },
      { upsert: true, new: true, strict: false }
    ).exec();

    return res.status(201).json(newPropertyData);
  } catch (e) {
    console.log(e);
  }
}

module.exports = deleteProjectFinances;

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

  let monthlyFinanceArray;
  if (financeType === "Monthly Incomes") {
    monthlyFinanceArray = property.finances.income.monthly[dateKey];
  } else if (financeType === "One Time Incomes") {
    monthlyFinanceArray = property.finances.income.oneTime[dateKey];
  } else if (financeType === "Monthly Capital Expenses") {
    monthlyFinanceArray = property.finances.expense.capital.monthly[dateKey];
  } else if (financeType === "One Time Capital Expenses") {
    monthlyFinanceArray = property.finances.expense.capital.oneTime[dateKey];
  } else if (financeType === "Monthly Revenue Expenses") {
    monthlyFinanceArray = property.finances.expense.revenue.monthly[dateKey];
  } else if (financeType === "One Time Revenue Expenses") {
    monthlyFinanceArray = property.finances.expense.revenue.oneTime[dateKey];
  }

  return monthlyFinanceArray;
}

function getUpdateString(costPayload) {
  const { name, finance } = costPayload;
  const financeType = name;
  let dateKey = getDateKey(new Date(finance.startDate));

  let updateString;
  if (financeType === "Monthly Incomes") {
    updateString = "finances.income.monthly." + dateKey;
  } else if (financeType === "One Time Incomes") {
    updateString = "finances.income.oneTime." + dateKey;
  } else if (financeType === "Monthly Capital Expenses") {
    updateString = "finances.expense.capital.monthly." + dateKey;
  } else if (financeType === "One Time Capital Expenses") {
    updateString = "finances.expense.capital.oneTime." + dateKey;
  } else if (financeType === "Monthly Revenue Expenses") {
    updateString = "finances.expense.revenue.monthly." + dateKey;
  } else if (financeType === "One Time Revenue Expenses") {
    updateString = "finances.expense.revenue.oneTime." + dateKey;
  }

  return updateString;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${month + 1}/${year}`;
}
