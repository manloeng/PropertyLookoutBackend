const Users = require("../../models/users/model");
const Sessions = require("../../models/sessions/model");

module.exports = async function (req, res, next) {
  const { accessToken } = req.query;

  // const userId = req.headers.authorization;
  // if (!userId) {
  //   return next(new Error("No authorization token provided."));
  // }
  // if (!accessToken) {
  //   return next(new Error("Please return an access token."));
  // }

  // const session = await Sessions.findOne({ accessToken });

  // if (session.accessToken !== accessToken) {
  //   return next(new Error("The access token is invalid."));
  // }

  // const user = await Users.findOne({ _id: session.userId });

  // if (!user) {
  //   return next(new Error("Please contact the admin support!"));
  // }

  // // req.csrfToken = csrfToken;
  // req.account = session.userId;

  req.account = "60dd9456a6b8e00008ed5827";

  return next();
};
