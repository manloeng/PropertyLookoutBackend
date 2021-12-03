const getModel = require("../utils/getModel");
const mongoose = require("mongoose");

async function addMonthlyIncome(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { account } = req;
    const { financeType, expenseType, recurrence, ...data } = req.body;

    data.account = mongoose.Types.ObjectId(account);
    data.property = mongoose.Types.ObjectId(data.property);
    const newFinance = new Model(data);

    newFinance.save(function (err) {
      if (err) console.log(err);
    });

    console.log(newFinance, ":fin");
    res.status(200).send({ newFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addMonthlyIncome;