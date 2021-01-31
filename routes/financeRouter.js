const financeRouter = require("express").Router();
const getProjectFinancesByUserId = require("../controller/finances/getProjectFinancesByUserId");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getProjectFinancesByUserId).all(methodNotAllowed);

module.exports = financeRouter;
