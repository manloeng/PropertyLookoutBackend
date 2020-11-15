const propertyRouter = require("express").Router();
const addProperty = require("../controller/addProperty");
const getAllProperties = require("../controller/getAllProperties");
const getPropertyByPropertyId = require("../controller/getPropertyByPropertyId");

const { methodNotAllowed } = require("../errors");

// should get all properties without showing users id
propertyRouter.route("/").get(getAllProperties).post(addProperty).all(methodNotAllowed);
propertyRouter.route("/:property_id").get(getPropertyByPropertyId).all(methodNotAllowed);

module.exports = propertyRouter;
