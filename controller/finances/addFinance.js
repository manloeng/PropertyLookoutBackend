const getModel = require("./utils/getModel");

async function addFinance(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { propertyId } = req.query;

    const newFinance = await Model.find({ property: propertyId }).exec();

    Model.save(function (err) {
      if (err) console.log(err);
    });

    res.status(200).send({ newFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addFinance;
