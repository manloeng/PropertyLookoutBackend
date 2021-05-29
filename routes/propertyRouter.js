const propertyRouter = require("express").Router();
const addProperty = require("../controller/property/addProperty");
const getAllPropertiesByUserId = require("../controller/property/getAllPropertiesByUserId");
const getPropertyByPropertyId = require("../controller/property/getPropertyByPropertyId");
const updatePropertyByPropertyId = require("../controller/property/updatePropertyByPropertyId");
const deletePropertyByPropertyId = require("../controller/property/deletePropertyByPropertyId");
const addProjectFinances = require("../controller/finances/addProjectFinances");
const deleteProjectFinances = require("../controller/finances/deleteProjectFinances");
const getProjectFinanceByPropertyId = require("../controller/finances/getProjectFinanceByPropertyId");
const getRentalDataByPropertyId = require("../controller/property/getRentalDataByPropertyId");
const updateRentalDataByPropertyId = require("../controller/property/updateRentalDataByPropertyId");
const { methodNotAllowed } = require("../errors");

// should get all properties without showing users id
propertyRouter.route("/").get(getAllPropertiesByUserId).post(addProperty).all(methodNotAllowed);

propertyRouter
  .route("/:propertyId")
  .get(getPropertyByPropertyId)
  .patch(updatePropertyByPropertyId)
  .delete(deletePropertyByPropertyId)
  .all(methodNotAllowed);

propertyRouter
  .route("/:propertyId/finance")
  .get(getProjectFinanceByPropertyId)
  .post(addProjectFinances)
  .patch(deleteProjectFinances)
  .all(methodNotAllowed);

// could do queries instead?
propertyRouter
  .route("/:propertyId/rental")
  .get(getRentalDataByPropertyId)
  .patch(updateRentalDataByPropertyId)
  .all(methodNotAllowed);

module.exports = propertyRouter;
