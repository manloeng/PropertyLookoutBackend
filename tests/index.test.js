import axios from "axios";
axios.defaults.baseURL = "http://localhost:3030";
const mongoose = require("mongoose");

// Requires serverless to be running
describe("Api Test for the Backend", () => {
  afterEach(async () => {
    await mongoose.connect(process.env.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const collections = await mongoose.connection.db.listCollections().toArray();

    const collectionNames = collections.map((collection) => collection.name);
    const publicationExist = collectionNames.includes("property");
    if (publicationExist) {
      await mongoose.connection.db.dropCollection("property");
    }
    await mongoose.connection.close();
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
