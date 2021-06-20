const Accounts = require("../../models/accounts/model");
const Sessions = require("../../models/sessions/model");

module.exports = async function (req, res, next) {
  const { accessToken, userId } = req.query;

  // const userId = req.headers.authorization;
  // if (!userId) {
  //   return next(new Error("No authorization token provided."));
  // }

  const session = await Sessions.findOne({ accessToken });

  if (!session.accessToken || session.accessToken !== accessToken) {
    return next(new Error("The access token is invalid."));
  }

  const user = await Accounts.findOne({ userId });

  if (!user) {
    return next(new Error("User not found."));
  }

  req.accessToken = accessToken;

  return next();
};
