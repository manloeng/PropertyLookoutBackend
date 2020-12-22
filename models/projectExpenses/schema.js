const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let ProjectExpenses = new Schema({
  data: {
    type: Object,
  },
});

module.exports = ProjectExpenses;
