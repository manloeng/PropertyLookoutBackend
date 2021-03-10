const express = require("express");
const app = express();
const port = 3030;
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./routes/api");
const { routeNotFound, handleCustomErrors, handle500 } = require("./errors");
const getTestData = require("./generateFakeData");
const getTestFinanceData = require("./generateFakeFinanceData");

require("dotenv").config();

function connectToMongoose() {
  mongoose
    .connect(process.env.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected…");
    })
    .catch((err) => console.log(err));
}

mongoose.set("useFindAndModify", false);
connectToMongoose();

// var whitelist = ["http://localhost:6010", "https://property-lookout.vercel.app/"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// app.options("*", cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api", apiRouter);

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

app.all("/*", routeNotFound);

app.use(handleCustomErrors);
app.use(handle500);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
