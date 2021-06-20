const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Sessions = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    expires: {
      type: Date,
    },
    sessionToken: {
      type: String,
    },
    accessToken: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Sessions;
