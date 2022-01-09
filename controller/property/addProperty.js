const Property = require("../../models/property/model.js");

function addProperty(req, res) {
  try {
    const { account } = req;
    const { ...restOfData } = req.body;

    //@todo need to add validation on uuid
    //@todo need to add validation on postCode - further down the line

    // if (uuid.length === 16){}
    var property = new Property({
      account,
      ...restOfData,
    });

    property.save(function (err) {
      if (err) console.log(err);
    });

    res.status(201).send({ property });
  } catch (e) {
    res.send("error...");
  }
}

module.exports = addProperty;
