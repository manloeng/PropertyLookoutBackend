// const getModel = require("../utils/getModel");
const OneOffCapitalExpense = require("../../models/oneOffCapitalExpense/model");
const mongoose = require("mongoose");

async function addCapitalExpense(req, res) {
  // const Model = getModel(req.route.path);

  try {
    const { financeType, expenseType, recurrence, ...data } = req.body;

    data.account = mongoose.Types.ObjectId(data.account);
    data.property = mongoose.Types.ObjectId(data.property);
    const newFinance = new OneOffCapitalExpense(data);

    newFinance.save(function (err) {
      if (err) console.log(err);
    });

    console.log(newFinance, ":fin");
    res.status(200).send({ newFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addCapitalExpense;
