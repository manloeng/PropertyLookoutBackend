const apiRouter = require("express").Router();
const propertyRouter = require("./propertyRouter");
const financeRouter = require("./financeRouter");
const { methodNotAllowed } = require("../errors");

const mongoose = require("mongoose");
const login = require("../controller/user/login");
const getTestData = require("../generateFakeData");
const getTestFinanceData = require("../generateFakeFinanceData");

apiRouter
  .route("/")
  .get((req, res) => res.send({ ok: true }))
  .all(methodNotAllowed);

apiRouter.route("/login").post(login).all(methodNotAllowed);

apiRouter.use("/property", propertyRouter);
apiRouter.use("/finance", financeRouter);

app.get("/test", getTestData);
app.get("/test2", getTestFinanceData);

app.post("/drop-all", async (req, res) => {
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
