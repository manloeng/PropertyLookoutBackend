const financeRouter = require("express").Router();
const getProjectFinancesByUserId = require("../controller/finances/getProjectFinancesByUserId");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getProjectFinancesByUserId).all(methodNotAllowed);
financeRouter.route("/:propertyId").get(getProjectFinancesByPropertyId).all(methodNotAllowed);

financeRouter
  .route("/monthlyInc")
  .get(getMonthlyIncome)
  .patch(updateMonthlyIncome)
  .delete(deleteMonthlyIncome)
  .all(methodNotAllowed);

financeRouter
  .route("/oneOffInc")
  .get(getOneOffIncome)
  .patch(updateOneOffIncome)
  .delete(deleteOneOffIncome)
  .all(methodNotAllowed);

financeRouter
  .route("/monthlyCapitalExp")
  .get(getMonthlyCapitalExpense)
  .patch(updateMonthlyCapitalExpense)
  .delete(deleteMonthlyCapitalExpense)
  .all(methodNotAllowed);

financeRouter
  .route("/OneOffCapitalExp")
  .get(getOneOffCapitalExpense)
  .patch(updateOneOffCapitalExpense)
  .delete(deleteOneOffCapitalExpense)
  .all(methodNotAllowed);

financeRouter
  .route("/monthlyRevenueExp")
  .get(getMonthlyRevenueExpense)
  .patch(updateMonthlyRevenueExpense)
  .delete(deleteMonthlyRevenueExpense)
  .all(methodNotAllowed);

financeRouter
  .route("/OneOffRevenueExp")
  .get(getOneOffRevenueExpense)
  .patch(updateOneOffRevenueExpense)
  .delete(deleteOneOffRevenueExpense)
  .all(methodNotAllowed);

module.exports = financeRouter;
