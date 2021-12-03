const Finance = require("../../models/finance/model.js");

async function getFinance(req, res) {
  try {
    const { account } = req;
    const { startDate } = req.query;

    if (startDate) {
      const newStartDate = new Date(startDate);
      const currentYear = newStartDate.getFullYear();
      query = { $gte: `${currentYear}-01-01` };
    }

    const response = await Finance.find({ account })
      .sort({ startDate: 1 })
      .lean();

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getFinance;
