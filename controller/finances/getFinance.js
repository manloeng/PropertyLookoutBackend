const getModel = require("../utils/getModel");

async function getFinance(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { propertyId } = req.query;

    const finance = await Model.find({ property: propertyId }).exec();

    res.status(200).send({ finance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getFinance;
