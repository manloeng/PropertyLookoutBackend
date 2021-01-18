const faker = require("faker");

function generateFakeFinanceData(req, res) {
  const rent = {
    cost: faker.random.number({
      min: 400,
      max: 1200,
    }),
    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
  };

  const copyRent = { ...rent };

  let dataArr = [];
  for (let id = 1; id <= 10; id++) {
    const data = {
      finances: {
        1: {
          expense: {
            capital: {
              monthly: {
                "1/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },

              oneTime: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },
            },
            revenue: {
              monthly: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },

              oneTime: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },
            },
          },
          income: {
            monthly: {
              "12/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },

                {
                  ...copyRent,
                  name: "rent",
                },
              ],
            },

            oneTime: {
              "12/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
            },
          },
        },
        2: {
          expense: {
            capital: {
              monthly: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },

              oneTime: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },
            },
            revenue: {
              monthly: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },

              oneTime: {
                "12/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2020": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
                "5/2019": [
                  {
                    name: faker.commerce.productName(),
                    cost: faker.commerce.price(),
                    startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                    endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                  },
                ],
              },
            },
          },
          income: {
            monthly: {
              "12/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },

                {
                  ...copyRent,
                  name: "rent",
                },
              ],
            },

            oneTime: {
              "12/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-12-01", "2020-12-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2020": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
              "5/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2020-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
              ],
            },
          },
        },
      },
    };
    dataArr.push(data);
  }
  res.send(dataArr);
}

module.exports = generateFakeFinanceData;
