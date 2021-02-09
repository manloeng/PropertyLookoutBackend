const Finance = require("../../models/finances/model");

// @todo - need to add form validation here!
async function addProjectFinances(req, res) {
  try {
    const { propertyId } = req.params;
    const financesData = req.body;
    const newPayloads = setPayloadData(financesData);

    let propertyFinance = await Finance.findOne({ property: propertyId }).exec();

    if (!propertyFinance) {
      propertyFinance = new Finance({
        property: propertyId,
      });
    }

    newPayloads.forEach(async (payload, index) => {
      const { key, value } = payload;
      const splitKey = key.split(".");

      let finalKeyExist;
      try {
        finalKeyExist = Object.keys(propertyFinance[splitKey[0]][splitKey[1]]).includes(splitKey[2]);
        if (finalKeyExist) {
          const response = await Finance.findOneAndUpdate(
            { property: propertyId },
            { $push: { [key]: value } },
            { upsert: true }
          ).exec();
          console.log(response, "res");
        }
      } catch (err) {
        console.log(err, "err");
      }

      if (!finalKeyExist) {
        const response = await Finance.findOneAndUpdate(
          { property: propertyId },
          { $set: { [key]: [value] } },
          { upsert: true }
        ).exec();
        console.log(response, "res2");
      }
    });

    let newPropertyFinance = await Finance.findOne({ property: propertyId }).exec();

    res.status(200).send({ finance: newPropertyFinance });
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
