const Property = require("../../models/landlords/model");

function addProjectExpenses(req, res) {
  const property_uuid = req.params.property_id;
  const expensesData = req.body;
  let expenses = {};

  expensesData.map((expense) => {
    const { expenseName, expenseCost, expenseStartDate } = expense;
    const dateArray = expenseStartDate.split("-");
    const dateKey = `${dateArray[1]}/${dateArray[0]}`;

    const propertyKeys = Object.keys(expenses);
    if (propertyKeys.length > 0) {
      const dateKeys = Object.keys(expenses[property_uuid]);

      if (dateKeys.includes(dateKey)) {
        expenses[property_uuid][dateKey][expenseName] = expenseCost;
      } else {
        expenses[property_uuid] = { [dateKey]: { [expenseName]: expenseCost } };
      }
    } else {
      expenses = { [property_uuid]: { [dateKey]: { [expenseName]: expenseCost } } };
    }
  });

  const projectsExpenses = new Property({
    data: expenses,
  });

  projectsExpenses.save(function (err) {
    if (err) console.log(err);

    console.log("projectsExpenses successfully saved.");
    res.send({ msg: "success" });
  });
}

module.exports = addProjectExpenses;
