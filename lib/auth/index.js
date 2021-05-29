module.exports = async function (req, res, next) {
  if (req.accessToken) {
    return next();
  }

  const authId = req.headers.authorization;

  if (!authId) {
    return next(new UnauthorizedError("No authorization token provided."));
  }

  const accessToken = await Token.findById(authId);

  if (!accessToken) {
    return next(new UnauthorizedError("The authorization token is invalid."));
  }

  const permittedUser = await UserGroup.find({
    users: accessToken.userId,
  }).lean();

  if (!permittedUser) {
    return next(new ForbiddenError("Your account does not exist, please contact the administrator!"));
  }

  req.accessToken = accessToken;

  return next();
};
