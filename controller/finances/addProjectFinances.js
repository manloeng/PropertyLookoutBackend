const Finance = require("../../models/finances/model");

// @todo - need to add form validation here!
async function addProjectFinances(req, res) {
  try {
    const { propertyId } = req.params;
    const financesData = req.body;
    const newPayloads = setPayloadData(financesData);

    let propertyFinance = await Finance.findOne({ property: propertyId }).exec();

    newPayloads.forEach(async (payload, index) => {
      const { key, value } = payload;
      const splitKey = key.split(".");

      if (propertyFinance) {
        let finalItemArray = propertyFinance[splitKey[0]][splitKey[1]][splitKey[2]];
        if (finalItemArray) {
          await Finance.findOneAndUpdate(
            { property: propertyId },
            { $push: { [key]: value } },
            { upsert: true }
          ).exec();
        }
      } else {
        await Finance.findOneAndUpdate({ property: propertyId }, { $set: { [key]: [value] } }, { upsert: true }).exec();
      }
    });

    res.send({ msg: "success" });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addProjectFinances;

function setPayloadData(financesData) {
  const newPayloads = financesData.map((finance) => {
    let dateKey = getDateKey(new Date(finance.startDate));
    const { financeType, recurrence, expenseType, ...restOfData } = finance;

    let updateString = "";
    if (financeType === "income" && recurrence === "monthly") {
      updateString = "income.monthly." + dateKey;
    } else if (financeType === "income" && recurrence === "oneTime") {
      updateString = "income.oneTime." + dateKey;
    } else if (financeType === "expense" && recurrence === "monthly" && expenseType === "capital") {
      updateString = "expense.capital.monthly." + dateKey;
    } else if (financeType === "expense" && recurrence === "oneTime" && expenseType === "capital") {
      updateString = "expense.capital.oneTime." + dateKey;
    } else if (financeType === "expense" && recurrence === "monthly" && expenseType === "revenue") {
      updateString = "expense.revenue.monthly." + dateKey;
    } else if (financeType === "expense" && recurrence === "oneTime" && expenseType === "revenue") {
      updateString = "expense.revenue.oneTime." + dateKey;
    }

    const newPayload = { key: updateString, value: { ...restOfData } };
    return newPayload;
  });

  return newPayloads;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${month + 1}/${year}`;
}
