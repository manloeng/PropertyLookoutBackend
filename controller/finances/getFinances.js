const Finance = require("../../models/finance/model.js");
const setupQuery = require("./utils/setupQuery");

async function getFinances(req, res) {
  try {
    const query = setupQuery(req);
    const response = await Finance.find(query).sort({ date: -1 }).lean();

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getFinances;
