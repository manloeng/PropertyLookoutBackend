const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let ProjectExpenses = new Schema({
  uuid: {
    type: Object,
  },
});

module.exports = ProjectExpenses;
