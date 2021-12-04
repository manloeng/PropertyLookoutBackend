const apiRouter = require("express").Router();
const propertyRouter = require("./propertyRouter");
const financeRouter = require("./financeRouter");
const userRouter = require("./userRouter");
const { methodNotAllowed } = require("../errors");

const mongoose = require("mongoose");
const getTestData = require("../generateFakeData");
const getTestFinanceData = require("../generateFakeFinanceData");

apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  .all(methodNotAllowed);

apiRouter.use("/property", propertyRouter);
apiRouter.use("/finance", financeRouter);
// apiRouter.use("/user", userRouter);

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

  const currentCollections = await mongoose.connection.db
    .listCollections()
    .toArray();

  const collectionNames = currentCollections.map(
    (collection) => collection.name
  );

  collections.forEach(async (collection) => {
    if (collectionNames.includes(collection)) {
      await mongoose.connection.db.dropCollection(collection);
    }
  });
});

module.exports = apiRouter;
