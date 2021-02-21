const OneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model");

async function getOneOffCapitalExpense(req, res) {
  try {
    const { propertyId } = req.query;

    const oneOffCapitalExpense = await OneOffCapitalExpense.find({ property: propertyId }).exec();

    res.status(200).send({ oneOffCapitalExpense });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getOneOffCapitalExpense;
