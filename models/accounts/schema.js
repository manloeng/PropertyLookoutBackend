const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Accounts = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    providerType: {
      type: String,
    },

    providerId: {
      type: String,
    },

    providerAccountId: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    accessToken: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Accounts;
