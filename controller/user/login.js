const argon2 = require("argon2");
const Account = require("../../models/accounts/model");
const AccessToken = require("../../models/accessTokens/model");

async function login(req, res, next) {
  const { username, password } = req.body;
  const errorMessage = "Wrong Email or Password has been user - please try again";

  try {
    const userExist = await Account.exists({ username });
    if (!userExist) res.send({ msg: errorMessage });

    const user = await Account.findOne({ username }).lean();
    const userPasswordHash = user.password;

    const passwordIsMatch = await argon2.verify(userPasswordHash, password);
    if (passwordIsMatch) {
      const accessTokenExist = await AccessToken.exists({ account: user._id });
      let accessToken;

      if (!accessTokenExist) {
        accessToken = new AccessToken({
          account: user._id,
          username,
          accessToken: "new Token",
        });
      } else {
        accessToken = await AccessToken.updateOne({ account: user._id }, { accessToken: "new Token" });
      }

      res.send({ accessToken });
    } else {
      next({ err: 400, msg: errorMessage });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = login;
