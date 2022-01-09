const Properties = require("../../models/property/model.js");

async function getProperties(req, res) {
  try {
    const { account } = req;
    const properties = await Properties.find({ account }).lean();
    return res.status(200).json(properties);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProperties;
