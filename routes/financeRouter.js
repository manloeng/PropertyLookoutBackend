const financeRouter = require("express").Router();
const getProjectFinancesByUserId = require("../controller/finances/getProjectFinancesByUserId");
const getFinance = require("../controller/finances/getFinance");
const addFinance = require("../controller/finances/addFinance");
const updateFinance = require("../controller/finances/updateFinance");
const deleteFinance = require("../controller/finances/deleteFinance");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getProjectFinancesByUserId).all(methodNotAllowed);

financeRouter.route("/monthlyIncome").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/monthlyIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/oneOffIncome").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/oneOffIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyCapitalExpense").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/monthlyCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffCapitalExpense").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/oneOffCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyRevenueExpense").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/monthlyRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffRevenueExpense").get(getFinance).post(addFinance).all(methodNotAllowed);
financeRouter.route("/oneOffRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

module.exports = financeRouter;
