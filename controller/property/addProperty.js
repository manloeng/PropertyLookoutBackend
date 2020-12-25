const Property = require("../../models/property/model.js");

function addProperty(req, res) {
  const content = req.body;

  var property = new Property({
    ...content,
  });

  property.save(function (err) {
    if (err) console.log(err);

    console.log("property successfully saved.");
    res.send({ msg: "success" });
  });
}

module.exports = addProperty;
