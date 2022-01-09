const faker = require("faker");
const Finance = require("./models/finance/model");

function generateFakeFinanceData(req, res) {
  if (process.env.NODE_ENV === "development") {
    for (let id = 1; id <= 10; id++) {
      const data = {
        account: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        type: faker.random.arrayElement(["capital", "revenue", "income"]),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
        endDate: new Date(faker.date.between("2022-01-01", "2023-11-05")),
      };
      const monthlyFinance = new Finance({ ...data });
      monthlyFinance.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        account: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        type: faker.random.arrayElement(["capital", "revenue", "income"]),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
      };
      const oneOffFinance = new Finance({ ...data });
      oneOffFinance.save(function (err) {
        if (err) console.log(err);
      });
    }
  }
  res.send({ msg: "successs" });
}

module.exports = generateFakeFinanceData;
