const User = require("../../models/users/model.js");

async function deleteUser(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.find({ _id: userId }).exec();

    if (user) {
      await User.deleteOne({ _id: userId }).exec();
      res.status(201).send({ msg: "Sucessfully deleted property" });
    }
  } catch (e) {
    res.send("error...");
  }
}

module.exports = deleteUser;
