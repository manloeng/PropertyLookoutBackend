const expenseRouter = require("express").Router();
const addProjectExpenses = require("../controller/expenses/addProjectExpenses");

const { methodNotAllowed } = require("../errors");

expenseRouter.route("/").post(addProjectExpenses).all(methodNotAllowed);
