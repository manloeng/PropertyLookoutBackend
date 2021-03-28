const express = require("express");
const app = express();
const port = 3030;
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./routes/api");
const { routeNotFound, handleCustomErrors, handle500 } = require("./errors");

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
