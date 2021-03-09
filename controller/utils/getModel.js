function getModel(path) {
  if (path) {
    const modelLocation = path.split("/")[1];
    const Model = require(`../../models/${modelLocation}/model`);

    if (!Model) console.log("Something Went Wrong");
    return Model;
  }
}

module.exports = getModel;
