const Rental = require("../../models/rental/model.js");
const MonthlyCapitalExpense = require("../../models/monthlyCapitalExpense/model.js");
const MonthlyRevenueExpense = require("../../models/monthlyRevenueExpense/model.js");
const MonthlyIncome = require("../../models/monthlyIncome/model.js");
const OneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model.js");
const OneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model.js");
const OneOffIncome = require("../../models/oneOffIncome/model.js");

function deletePropertyData(propertyId) {
  const Models = [
    Rental,
    MonthlyCapitalExpense,
    MonthlyRevenueExpense,
    MonthlyIncome,
    OneOffCapitalExpense,
    OneOffRevenueExpense,
    OneOffIncome,
  ];

  console.log("deleting property data...");
  Models.forEach(async (Model) => {
    const documentExist = await Model.exists({ property: propertyId });
    if (documentExist) {
      // double checkingf to see if there's data
      // const response = await Model.find({ property: propertyId });
      // console.log(response, "res");
      await Model.deleteMany({ property: propertyId });
    }
  });
}

module.exports = deletePropertyData;
