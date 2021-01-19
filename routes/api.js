const apiRouter = require("express").Router();
const propertyRouter = require("./propertyRouter");
const financeRouter = require("./financeRouter");

const { methodNotAllowed } = require("../errors");

apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  .all(methodNotAllowed);

apiRouter.use("/property", propertyRouter);
apiRouter.use("/finance", financeRouter);

module.exports = apiRouter;
