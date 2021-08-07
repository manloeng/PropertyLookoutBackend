const User = require("../../models/users/model.js");

// should delete account and user
async function deleteUser(req, res) {
  try {
    const { account } = req.params;

    const user = await User.find({ _id: account }).exec();

    if (user) {
      await User.deleteOne({ _id: account }).exec();
      res.status(201).send({ msg: "Sucessfully deleted property" });
    }
  } catch (e) {
    res.send("error...");
  }
}

module.exports = deleteUser;
