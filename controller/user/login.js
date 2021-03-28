const argon2 = require("argon2");
const Account = require("../../models/accounts/model");

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
      // password match - generate token here!
    } else {
      // password did not match
      res.send({ msg: errorMessage });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = login;
