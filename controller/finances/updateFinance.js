const getModel = require("../utils/getModel");

async function updateFinance(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { id } = req.params;
    const data = req.body;

    const updatedFinance = await Model.findOneAndUpdate({ _id: id }, data, { strict: false, new: true }).exec();

    res.status(200).send({ updatedFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = updateFinance;
