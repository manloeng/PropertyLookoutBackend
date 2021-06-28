const financeRouter = require("express").Router();
const getProjectFinancesByUserId = require("../controller/finances/getProjectFinancesByUserId");
const getFinance = require("../controller/finances/getFinance");
const addMonthlyIncome = require("../controller/finances/addMonthlyIncome");
const addOneOffIncome = require("../controller/finances/addOneOffIncome");
const addMonthlyCapitalExpense = require("../controller/finances/addMonthlyCapitalExpense");
const addOneOffCapitalExpense = require("../controller/finances/addOneOffCapitalExpense");
const addMonthlyRevenueExpense = require("../controller/finances/addMonthlyRevenueExpense");
const addOneOffRevenueExpense = require("../controller/finances/addOneOffRevenueExpense");
const updateFinance = require("../controller/finances/updateFinance");
const deleteFinance = require("../controller/finances/deleteFinance");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getProjectFinancesByUserId).all(methodNotAllowed);

financeRouter.route("/monthlyIncome").get(getFinance).post(addMonthlyIncome).all(methodNotAllowed);
financeRouter.route("/monthlyIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/oneOffIncome").get(getFinance).post(addOneOffIncome).all(methodNotAllowed);
financeRouter.route("/oneOffIncome/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyCapitalExpense").get(getFinance).post(addMonthlyCapitalExpense).all(methodNotAllowed);
financeRouter.route("/monthlyCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffCapitalExpense").get(getFinance).post(addOneOffCapitalExpense).all(methodNotAllowed);
financeRouter.route("/oneOffCapitalExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

financeRouter.route("/monthlyRevenueExpense").get(getFinance).post(addMonthlyRevenueExpense).all(methodNotAllowed);
financeRouter.route("/monthlyRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);
financeRouter.route("/OneOffRevenueExpense").get(getFinance).post(addOneOffRevenueExpense).all(methodNotAllowed);
financeRouter.route("/oneOffRevenueExpense/:id").patch(updateFinance).delete(deleteFinance).all(methodNotAllowed);

module.exports = financeRouter;
