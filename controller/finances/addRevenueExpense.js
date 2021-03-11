// const getModel = require("../utils/getModel");
const OneOffRevenueExpense = require("../../models/oneOffRevenueExpense/model");
const mongoose = require("mongoose");

async function addRevenueExpense(req, res) {
  // const Model = getModel(req.route.path);

  try {
    const { financeType, expenseType, recurrence, ...data } = req.body;

    data.account = mongoose.Types.ObjectId(data.account);
    data.property = mongoose.Types.ObjectId(data.property);
    const newFinance = new OneOffRevenueExpense(data);

    newFinance.save(function (err) {
      if (err) console.log(err);
    });

    console.log(newFinance, ":fin");
    res.status(200).send({ newFinance });
  } catch (e) {
    console.log(e);
  }
}

module.exports = addRevenueExpense;
