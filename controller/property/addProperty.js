const Property = require("../../models/property/model.js");
const Rental = require("../../models/rental/model.js");

function addProperty(req, res) {
  try {
    const { userId } = req;
    const { ...restOfData } = req.body;

    //@todo need to add validation on uuid
    //@todo need to add validation on postCode - further down the line

    // if (uuid.length === 16){}
    var property = new Property({
      account: userId,
      ...restOfData,
    });

    property.save(function (err) {
      if (err) console.log(err);
    });

    const rental = new Rental({ property: property._id, account:userId });
    rental.save(function (err) {
      if (err) console.log(err);
    });

    res.status(201).send({ property });
  } catch (e) {
    res.send("error...");
  }
}

module.exports = addProperty;
