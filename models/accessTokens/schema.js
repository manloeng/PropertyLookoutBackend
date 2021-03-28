const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let AccessTokens = new Schema(
  {
    accessToken: {
      type: String,
      required: true,
    },
    account: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

module.exports = AccessTokens;
