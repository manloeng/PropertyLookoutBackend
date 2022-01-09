const propertyRouter = require("express").Router();
const getProperties = require("../controller/property/getProperties");
const addProperty = require("../controller/property/addProperty");
const getProperty = require("../controller/property/getProperty");
const updateProperty = require("../controller/property/updateProperty");
const deleteProperty = require("../controller/property/deleteProperty");
const addFinance = require("../controller/finances/addFinance");
const { methodNotAllowed } = require("../errors");

propertyRouter
  .route("/")
  .get(getProperties)
  .post(addProperty)
  .all(methodNotAllowed);

propertyRouter
  .route("/:propertyId")
  .get(getProperty)
  .post(addFinance)
  .patch(updateProperty)
  .delete(deleteProperty)
  .all(methodNotAllowed);

module.exports = propertyRouter;
