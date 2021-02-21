async function getFinance(req, res) {
  let Model;

  if (req.route.path) {
    const { path } = req.route;
    const modelLocation = path.split("/")[1];
    Model = require(`../../models/${modelLocation}/model`);
  }

  if (!Model) console.log("Something Went Wrong");

  try {
    const { propertyId } = req.query;

    const monthlyIncome = await Model.find({ property: propertyId }).exec();

    res.status(200).send({ monthlyIncome });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getFinance;
