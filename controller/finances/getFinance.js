const Finance = require("../../models/finance/model");

async function getFinance(req, res) {
  try {
    const { financeId } = req.params;
    const property = await Finance.find({ _id: financeId }).exec();
    return res.status(200).json(property);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getFinance;
