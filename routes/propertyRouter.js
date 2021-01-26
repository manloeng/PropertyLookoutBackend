const propertyRouter = require("express").Router();
const addProperty = require("../controller/property/addProperty");
const getAllPropertiesByUserId = require("../controller/property/getAllPropertiesByUserId");
const getPropertyByPropertyId = require("../controller/property/getPropertyByPropertyId");
const addProjectFinances = require("../controller/finances/addProjectFinances");
const deleteProjectFinances = require("../controller/finances/deleteProjectFinances");
const getPropertyFinanceByPropertyId = require("../controller/property&finances/getPropertyFinanceByPropertyId");
const { methodNotAllowed } = require("../errors");

// should get all properties without showing users id
propertyRouter.route("/").get(getAllPropertiesByUserId).post(addProperty).all(methodNotAllowed);
propertyRouter.route("/:property_id").get(getPropertyByPropertyId).all(methodNotAllowed);
propertyRouter
  .route("/:propertyId/finance")
  .get(getPropertyFinanceByPropertyId)
  .post(addProjectFinances)
  .patch(deleteProjectFinances)
  .all(methodNotAllowed);

module.exports = propertyRouter;
