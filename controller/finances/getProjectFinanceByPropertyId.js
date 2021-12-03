const Finance = require("../../models/finance/model.js");

async function getProjectFinanceByPropertyId(req, res) {
  try {
    const { account } = req;
    const { propertyId } = req.params;
    const { startDate } = req.query;
    let query = { property: propertyId };

    if (startDate) {
      const newStartDate = new Date(startDate);
      const currentYear = newStartDate.getFullYear();
      query = {
        $and: [
          { account },
          { property: propertyId },
          { startDate: { $gte: `${currentYear}-01-01` } },
        ],
      };
    }

    const response = await Finance.find(query).sort({ startDate: 1 }).lean();

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProjectFinanceByPropertyId;
