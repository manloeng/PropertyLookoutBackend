const apiRouter = require("express").Router();
const addProperty = require("../controller/addProperty");

const { methodNotAllowed } = require("../errors");

apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  .all(methodNotAllowed);

apiRouter.route("/property").post(addProperty);

module.exports = apiRouter;
