const userRouter = require("express").Router();
const deleteUser = require("../controller/user/deleteUser");
const login = require("../controller/user/login");
const register = require("../controller/user/register");
const { methodNotAllowed } = require("../errors");

userRouter.route("/").delete(deleteUser).all(methodNotAllowed);
userRouter.route("/login").post(login).all(methodNotAllowed);
userRouter.route("/register").post(register).all(methodNotAllowed);

module.exports = userRouter;
