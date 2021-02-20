const faker = require("faker");

function generateFakeFinanceData(req, res) {
  let dataArr = [];
  for (let id = 1; id <= 100; id++) {
    const data = {
      account: "5fb3effadbe5216f6beee6c5",
      property: "60310e34694c3400098dc19f",
      name: faker.commerce.productName(),
      cost: faker.commerce.price(),
      startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
      endDate: new Date(faker.date.between("2022-01-01", "2023-11-05")),
    };
    dataArr.push(data);
  }
  res.send(dataArr);
}

module.exports = generateFakeFinanceData;
