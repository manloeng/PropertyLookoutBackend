const mongoose = require("mongoose");
const Property = require("../models/property/model.js");

function addProperty(req, res) {
  // adds new property into property object in mongodb
  // more data needs to be added here!
  var property = new Property({
    _id: mongoose.Types.ObjectId(),
  });
  property.save(function (err) {
    if (err) console.log(err);

    console.log("property successfully saved.");
    res.send({ msg: "success" });
  });
}

module.exports = addProperty;
