const propertyRouter = require("express").Router();
const addProperty = require("../controller/property/addProperty");
const getAllPropertiesByUserId = require("../controller/property/getAllPropertiesByUserId");
const getPropertyByPropertyId = require("../controller/property/getPropertyByPropertyId");
const addProjectExpenses = require("../controller/expenses/addProjectExpenses");
const { methodNotAllowed } = require("../errors");

// should get all properties without showing users id
propertyRouter.route("/").get(getAllPropertiesByUserId).post(addProperty).all(methodNotAllowed);
propertyRouter.route("/:property_id").get(getPropertyByPropertyId).all(methodNotAllowed);
propertyRouter.route("/:property_id/expense").post(addProjectExpenses).all(methodNotAllowed);

module.exports = propertyRouter;
