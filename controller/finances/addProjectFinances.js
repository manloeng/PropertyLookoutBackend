const Property = require("../../models/property/model");

async function addProjectFinances(req, res) {
  try {
    const propertyUuid = req.params.property_id;
    const financesData = req.body;

    // this needs working on
    const financeDataToAdd = setFinanceData(financesData);
    // is the object we need - from the original property data
    const update = { finances: { test: "test" } };
    let doc = await Property.findOneAndUpdate({ _id: propertyUuid }, update, { new: true }).exec();

    console.log(doc, "keys");
    // property = { ...property.finances, ...financeDataToAdd };
    // property = { ...property, test: "test" };

    // await property.save(function (err) {
    //   if (err) console.log(err);

    //   console.log("projectsExpenses successfully saved.");
    //   res.send({ msg: "success" });
    // });
  } catch (e) {
    console.log(e);
    UI;
  }
}

module.exports = addProjectFinances;

function setFinanceData(financesData) {
  // finances -> financeType -> expenseType -> recurrence -> dateKey -> finance data
  let finances = {
    expense: { capital: { monthly: {}, oneTime: {} }, revenue: { monthly: {}, oneTime: {} } },
    income: { monthly: {}, oneTime: {} },
  };

  financesData.map((finance) => {
    const {
      financeType,
      recurrence,
      expenseType,
      financeName,
      financeCost,
      financeStartDate,
      financeEndDate = null,
    } = finance;
    if (financeType === "income") {
      const dateArray = financeStartDate.split("-");
      const dateKey = `${dateArray[1]}/${dateArray[0]}`;

      const dateKeys = Object.keys(finances[financeType][recurrence]);
      // if key exists add to the object
      if (dateKeys.includes(dateKey)) {
        finances[financeType][recurrence][dateKey] = {
          ...finances[financeType][recurrence][dateKey],
          name: financeName,
          cost: financeCost,
          startDate: financeStartDate,
          endDate: financeEndDate,
        };
      } else {
        finances[financeType][recurrence] = {
          ...finances[financeType][recurrence],
          [dateKey]: { name: financeName, cost: financeCost, startDate: financeStartDate, endDate: financeEndDate },
        };
      }
    } else {
      const dateArray = financeStartDate.split("-");
      const dateKey = `${dateArray[1]}/${dateArray[0]}`;

      const dateKeys = Object.keys(finances[financeType][expenseType][recurrence]);
      // if key exists add to the object
      if (dateKeys.includes(dateKey)) {
        finances[financeType][expenseType][recurrence][dateKey] = {
          ...finances[financeType][expenseType][recurrence][dateKey],
          name: financeName,
          cost: financeCost,
          startDate: financeStartDate,
          endDate: financeEndDate,
        };
      } else {
        finances[financeType][expenseType][recurrence] = {
          ...finances[financeType][expenseType][recurrence],
          [dateKey]: { name: financeName, cost: financeCost, startDate: financeStartDate, endDate: financeEndDate },
        };
      }
    }
  });

  return finances;
}
