const Finance = require("../../models/finance/model.js");

async function getFinance(req, res) {
  try {
    const query = setupQuery(req);
    const response = await Finance.find(query).sort({ startDate: 1 }).lean();

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getFinance;

function setupQuery(req) {
  const { account } = req;
  const { type = "", propertyId } = req.params;
  const { startDate, endDate = "" } = req.query;

  let queries = [{ account }];
  if (type) queries.append({ type });
  if (propertyId) queries.append({ property: propertyId });

  const newStartDate = new Date(startDate);
  const year = newStartDate.getFullYear();
  if (startDate) queries.append({ startDate: { $gte: `${year}-01-01` } });

  const newEndDate = new Date(endDate);
  const endYear = newEndDate.getFullYear();
  if (endDate) queries.append({ endDate: { $lte: `${endYear}-01-01` } });

  if (queries.length) return { $and: queries };
  else return {};
}
