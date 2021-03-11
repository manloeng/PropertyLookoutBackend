const financeRouter = require("express").Router();
const getProjectFinancesByUserId = require("../controller/finances/getProjectFinancesByUserId");
const getFinance = require("../controller/finances/getFinance");
const addIncome = require("../controller/finances/addIncome");
const addCapitalExpense = require("../controller/finances/addCapitalExpense");
const addRevenueExpense = require("../controller/finances/addRevenueExpense");
const updateFinance = require("../controller/finances/updateFinance");
const deleteFinance = require("../controller/finances/deleteFinance");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getProjectFinancesByUserId).all(methodNotAllowed);

financeRouter.route("/monthlyIncome").get(getFinance).post(addIncome).all(methodNotAllowed);
financeRouter.route("/monthlyIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/oneOffIncome").get(getFinance).post(addIncome).all(methodNotAllowed);
financeRouter.route("/oneOffIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyCapitalExpense").get(getFinance).post(addCapitalExpense).all(methodNotAllowed);
financeRouter.route("/monthlyCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffCapitalExpense").get(getFinance).post(addCapitalExpense).all(methodNotAllowed);
financeRouter.route("/oneOffCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyRevenueExpense").get(getFinance).post(addRevenueExpense).all(methodNotAllowed);
financeRouter.route("/monthlyRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffRevenueExpense").get(getFinance).post(addRevenueExpense).all(methodNotAllowed);
financeRouter.route("/oneOffRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

module.exports = financeRouter;
