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

mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", apiRouter);

app.get("/test", getTestData);
app.get("/test2", getTestFinanceData);

app.all("/*", routeNotFound);

app.use(handleCustomErrors);
app.use(handle500);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
