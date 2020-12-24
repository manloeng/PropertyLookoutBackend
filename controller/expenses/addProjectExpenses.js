const ProjectExpenses = require("../../models/projectExpenses/model.js");

function addProjectExpenses(req, res) {
  const property_uuid = req.params.property_id;
  const { expenseName, expenseCost, expenseStartDate } = req.body;

  const dateArray = expenseStartDate.split("-");
  const dateKey = `${dateArray[1]}/${dateArray[0]}`;

  const projectsExpenses = new ProjectExpenses({
    data: {
      [property_uuid]: {
        [dateKey]: { [expenseName]: expenseCost },
      },
    },
  });

  projectsExpenses.save(function (err) {
    if (err) console.log(err);

    console.log("projectsExpenses successfully saved.");
    res.send({ msg: "success" });
  });
}

module.exports = addProjectExpenses;
