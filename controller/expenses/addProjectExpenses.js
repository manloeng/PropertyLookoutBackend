const Property = require("../../models/property/model");

async function addProjectExpenses(req, res) {
  try {
    const propertyUuid = req.params.property_id;
    const expensesData = req.body;
    let expenses = { capital: {}, revenue: {} };
    const property = await Property.findOneAndUpdate({ uuid: propertyUuid });

    expensesData.map((expense) => {
      const { expenseType, expenseName, expenseCost, expenseStartDate } = expense;
      const dateArray = expenseStartDate.split("-");
      const dateKey = `${dateArray[1]}/${dateArray[0]}`;

      const dateKeys = Object.keys(expenses[expenseType]);
      if (dateKeys.includes(dateKey)) {
        expenses[expenseType][dateKey][expenseName] = expenseCost;
      } else {
        expenses[expenseType] = { ...expenses[expenseType], [dateKey]: { [expenseName]: expenseCost } };
      }
    });

    property.expenses = { ...property.expenses, ...expenses };

    await property.save(function (err) {
      if (err) console.log(err);

      console.log("projectsExpenses successfully saved.");
      res.send({ msg: "success" });
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addProjectExpenses;
