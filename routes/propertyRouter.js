const propertyRouter = require("express").Router();
const addProperty = require("../controller/property/addProperty");
const getAllPropertiesByUserId = require("../controller/property/getAllPropertiesByUserId");
const getPropertyByPropertyId = require("../controller/property/getPropertyByPropertyId");
const { methodNotAllowed } = require("../errors");

// should get all properties without showing users id
propertyRouter.route("/").get(getAllPropertiesByUserId).post(addProperty).all(methodNotAllowed);
propertyRouter.route("/:property_id").get(getPropertyByPropertyId).all(methodNotAllowed);

module.exports = propertyRouter;
