const propertyRouter = require("express").Router();
const addProperty = require("../controller/addProperty");
const getAllProperties = require("../controller/getAllProperties");

const { methodNotAllowed } = require("../errors");

propertyRouter.route("/").post(addProperty).all(methodNotAllowed);
propertyRouter.route("/:user_id").get(getAllProperties).all(methodNotAllowed);

module.exports = propertyRouter;
