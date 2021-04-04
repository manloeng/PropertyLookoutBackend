const mongoose = require("mongoose");

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

module.exports = connectToMongoose;
