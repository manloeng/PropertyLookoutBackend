const userRouter = require("express").Router();
const login = require("../../controller/user/login");
const register = require("../../controller/user/register");
const { methodNotAllowed } = require("../errors");

apiRouter.route("/").delete(deleteUser).all(methodNotAllowed);
apiRouter.route("/login").post(login).all(methodNotAllowed);
apiRouter.route("/register").post(register).all(methodNotAllowed);

module.exports = userRouter;
