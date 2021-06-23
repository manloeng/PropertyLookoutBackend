const faker = require("faker");
const MonthlyCapitalExpense = require("./models/monthlyCapitalExpense/model");
const MonthlyIncome = require("./models/monthlyIncome/model");
const MonthlyRevenueExpense = require("./models/monthlyRevenueExpense/model");
const OneOffCapitalExpense = require("./models/oneOffCapitalExpense/model");
const OneOffIncome = require("./models/oneOffIncome/model");
const OneOffRevenueExpense = require("./models/oneOffRevenueExpense/model");

function generateFakeFinanceData(req, res) {
  if (process.env.NODE_ENV === "development") {
    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
        endDate: new Date(faker.date.between("2022-01-01", "2023-11-05")),
      };
      const monthlyCapitalExpense = new MonthlyCapitalExpense({ ...data });
      monthlyCapitalExpense.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
        endDate: new Date(faker.date.between("2022-01-01", "2023-11-05")),
      };
      const monthlyIncome = new MonthlyIncome({ ...data });
      monthlyIncome.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
        endDate: new Date(faker.date.between("2022-01-01", "2023-11-05")),
      };
      const monthlyRevenueExpense = new MonthlyRevenueExpense({ ...data });
      monthlyRevenueExpense.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
      };
      const oneOffCapitalExpense = new OneOffCapitalExpense({ ...data });
      oneOffCapitalExpense.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
      };
      const oneOffIncome = new OneOffIncome({ ...data });
      oneOffIncome.save(function (err) {
        if (err) console.log(err);
      });
    }

    for (let id = 1; id <= 10; id++) {
      const data = {
        userId: "5fb3effadbe5216f6beee6c5",
        property: "60310e34694c3400098dc19f",
        name: faker.commerce.productName(),
        cost: faker.commerce.price(),
        startDate: new Date(faker.date.between("2020-01-01", "2021-03-30")),
      };
      const oneOffRevenueExpense = new OneOffRevenueExpense({ ...data });
      oneOffRevenueExpense.save(function (err) {
        if (err) console.log(err);
      });
    }
  }
  res.send({ msg: "successs" });
}

module.exports = generateFakeFinanceData;
