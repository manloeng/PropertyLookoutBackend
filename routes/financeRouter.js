const financeRouter = require("express").Router();
const getFinances = require("../controller/finances/getFinances");
const getFinance = require("../controller/finances/getFinance");
const analyseFinancialData = require("../controller/finances/analyseFinancialData");
const updateFinance = require("../controller/finances/updateFinance");
const deleteFinance = require("../controller/finances/deleteFinance");
const yearlyFinance = require("../controller/finances/yearlyFinance");
const { methodNotAllowed } = require("../errors");

financeRouter.route("/").get(getFinances).all(methodNotAllowed);

financeRouter
  .route("/calculations")
  .get(analyseFinancialData)
  .all(methodNotAllowed);

financeRouter.route("/yearly").get(yearlyFinance).all(methodNotAllowed);

financeRouter
  .route("/:financeId")
  .get(getFinance)
  .patch(updateFinance)
  .delete(deleteFinance)
  .all(methodNotAllowed);

module.exports = financeRouter;
