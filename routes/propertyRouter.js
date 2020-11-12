const propertyRouter = require("express").Router();
const addProperty = require("../controller/addProperty");
const getAllProperties = require("../controller/getAllProperties");

const { methodNotAllowed } = require("../errors");

propertyRouter.route("/").get(getAllProperties).post(addProperty).all(methodNotAllowed);

module.exports = propertyRouter;
