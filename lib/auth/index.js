const Users = require("../../models/users/model");
const Sessions = require("../../models/sessions/model");

module.exports = async function (req, res, next) {
  const { accessToken, userId } = req.query;

  console.log(accessToken, "accessToken");
  // const userId = req.headers.authorization;
  // if (!userId) {
  //   return next(new Error("No authorization token provided."));
  // }

  const session = await Sessions.findOne({ accessToken });

  console.log(session, "session");
  if (!session.accessToken || session.accessToken !== accessToken) {
    return next(new Error("The access token is invalid."));
  }

  const user = await Users.findOne({ _id: userId });

  if (!user) {
    return next(new Error("User not found."));
  }

  // req.csrfToken = csrfToken;

  return next();
};
