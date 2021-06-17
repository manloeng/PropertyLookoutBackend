const argon2 = require("argon2");
const Account = require("../../models/accounts/model");
const AccessToken = require("../../models/accessTokens/model");

async function register(req, res, next) {
  const { username, password, reconfirmPassword } = req.body;
  const errorMessage = "Username Exists - please try another";

  console.log(req.body, "req.body");
  try {
    const userExist = await Account.exists({ username });
    if (userExist) throw new Error(next({ status: 400, msg: errorMessage }));
    if (password !== reconfirmPassword) throw new Error(next({ status: 400, msg: "Password Does not match" }));

    const newPassword = await argon2.hash(password);
    const user = new Account({
      username,
      password: newPassword,
    });

    let accessToken;
    if (user) {
      accessToken = new AccessToken({
        account: user._id,
        username,
        accessToken: "new Token",
      });

      user.save(function (err) {
        if (err) console.log(err);
      });

      accessToken.save(function (err) {
        if (err) console.log(err);
      });
    }

    res.send({ accessToken });
  } catch (err) {
    next(err);
  }
}

module.exports = register;
