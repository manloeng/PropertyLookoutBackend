const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let OneOffCapitalExpense = new Schema({
  property: { type: mongoose.Types.ObjectId(), required: true },
  account: { type: mongoose.Types.ObjectId(), required: true },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
});

module.exports = OneOffCapitalExpense;
