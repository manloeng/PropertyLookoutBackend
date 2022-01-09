const Finance = require("../../models/finance/model");

async function getFinance(req, res) {
  try {
    const { account } = req;
    const { financeId } = req.params;

    const finance = await Finance.find({
      $and: [{ account }, { _id: financeId }],
    })
      .sort({ date: -1 })
      .lean();

    return res.status(200).json(finance);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getFinance;
