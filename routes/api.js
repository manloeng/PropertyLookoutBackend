const apiRouter = require("express").Router();
const propertyRouter = require("./propertyRouter");
const financeRouter = require("./financeRouter");
const { methodNotAllowed } = require("../errors");

const mongoose = require("mongoose");
const login = require("../controller/user/login");
const register = require("../controller/user/register");

const getTestData = require("../generateFakeData");
const getTestFinanceData = require("../generateFakeFinanceData");

apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  .all(methodNotAllowed);

apiRouter.route("/login").post(login).all(methodNotAllowed);
apiRouter.route("/register").post(register).all(methodNotAllowed);

// apiRouter.use(auth);
apiRouter.use("/property", propertyRouter);
apiRouter.use("/finance", financeRouter);

// For Testing Purposes only!!!
apiRouter.route("/test").get(getTestData);
apiRouter.route("/test2").get(getTestFinanceData);

apiRouter.route("/drop-all").post(async (req, res) => {
  const collections = [
    "properties",
    "rental",
    "monthlyIncome",
    "monthlyCapitalExpense",
    "monthlyRevenueExpense",
    "oneOffIncome",
    "oneOffCapitalExpense",
    "oneOffRevenueExpense",
  ];

  const currentCollections = await mongoose.connection.db.listCollections().toArray();

  const collectionNames = currentCollections.map((collection) => collection.name);

  collections.forEach(async (collection) => {
    if (collectionNames.includes(collection)) {
      await mongoose.connection.db.dropCollection(collection);
    }
  });
});

module.exports = apiRouter;
