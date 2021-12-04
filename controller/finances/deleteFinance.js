const Finance = require("../../models/finance/model");

async function deleteFinance(req, res) {
  try {
    const { id } = req.params;

    await Finance.findByIdAndDelete({ _id: id }).exec();

    res.status(200).send({ msg: "Sucessfully deleted" });
  } catch (e) {
    console.log(e);
  }
}

module.exports = deleteFinance;
