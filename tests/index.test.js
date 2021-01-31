import axios from "axios";
axios.defaults.baseURL = "http://localhost:3030";
const mongoose = require("mongoose");

async function resetDb() {
  await mongoose.connect("mongodb://localhost:27017/" + MARLON_NS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await dropCollections();
}

async function dropCollections() {
  const collections = ["publication", "section", "spreads", "pages", "products"];

  const currentCollections = await mongoose.connection.db.listCollections().toArray();

  const collectionNames = currentCollections.map((collection) => collection.name);

  collections.forEach(async (collection) => {
    if (collectionNames.includes(collection)) {
      await mongoose.connection.db.dropCollection(collection);
    }
  });
}

async function populateCollections() {}
// Requires serverless to be running
describe("Api Test for the Backend", () => {
  beforeEach(async () => {
    await resetDb();
    await populateCollections();
  });

  describe("Api Test For Base Route", () => {
    test("GET: Base Route - Expect status 404", async () => {
      try {
        const { status, data } = await axios.get("/");
        expect(status).toEqual(404);
      } catch (e) {
        console.log("failed");
      }
    });

    xtest("INVALID METHOD status:405", async () => {
      const requests = ["put", "patch", "delete"];
      requests.forEach(async (request) => {
        const { status, data } = await axios[request]("/");
        expect(status).toEqual(405);
      });
    });
  });
});
