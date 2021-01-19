const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Finances = new Schema({
  property: {
    type: String,
    required: true,
  },
  income: {
    type: Object,
  },
  expense: {
    type: Object,
  },
});

module.exports = Finances;
