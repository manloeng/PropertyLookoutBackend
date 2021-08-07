const getModel = require("../utils/getModel");
const mongoose = require("mongoose");

async function addOneOffIncome(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { financeType, expenseType, recurrence, ...data } = req.body;

    data.account = mongoose.Types.ObjectId(data.account);
    data.property = mongoose.Types.ObjectId(data.property);
    const newFinance = new Model(data);

    newFinance.save(function (err) {
      if (err) console.log(err);
    });

    res.status(200).send({ newFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addOneOffIncome;
