const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Finances = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  property: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
});

module.exports = Finances;
