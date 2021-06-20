const express = require("express");
const app = express();
const port = 3030;
const mongoose = require("mongoose");
const connectToMongoose = require("./utils/mongo");
const cors = require("cors");
const apiRouter = require("./routes/api");
const auth = require("./lib/auth");
const { routeNotFound, handleCustomErrors, handle500 } = require("./errors");

require("dotenv").config();

mongoose.set("useFindAndModify", false);
connectToMongoose();

var allowedOrigins = ["http://localhost:6010", "https://property-lookout.vercel.app/"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = "The CORS policy for this site does not " + "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.static("public"));
app.use(express.json());

app.use(auth);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api", apiRouter);

app.all("/*", routeNotFound);

app.use(handleCustomErrors);
app.use(handle500);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
