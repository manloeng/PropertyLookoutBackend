const Finance = require("../../models/finance/model");

async function updateFinance(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedFinance = await Finance.findOneAndUpdate({ _id: id }, data, {
      strict: false,
      new: true,
    }).exec();

    res.status(200).send({ updatedFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = updateFinance;
