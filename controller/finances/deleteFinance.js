const getModel = require("../utils/getModel");

async function deleteFinance(req, res) {
  const Model = getModel(req.route.path);

  try {
    const { id } = req.params;

    await Model.findByIdAndDelete({ _id: id }).exec();

    res.status(200).send({ msg: "Sucessfully deleted" });
  } catch (e) {
    console.log(e);
  }
}

module.exports = deleteFinance;
