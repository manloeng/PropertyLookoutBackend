const Finance = require("../../models/finance/model");

// @todo - need to add form validation here!
async function addFinance(req, res) {
  try {
    const { account } = req;
    const { propertyId } = req.query;
    const { ...restOfData } = req.body;

    const finance = new Finance({
      ...restOfData,
      account,
      property: propertyId,
    });

    finance.save(function (err) {
      if (err) console.log(err);
    });

    res.status(200).send({ finance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addFinance;
