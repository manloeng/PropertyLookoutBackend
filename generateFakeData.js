const faker = require("faker");

function getTestData(req, res) {
  let dataArr = [];
  for (let id = 1; id <= 10; id++) {
    const purchasePrice = faker.random.number({
      min: 100000,
      max: 500000,
    });
    const deposit = purchasePrice / 4;

    const rent = {
      cost: faker.random.number({
        min: 400,
        max: 1200,
      }),
      startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
      endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
    };

    const copyRent = { ...rent };

    const data = {
      uuid: "5fb3effadbe5216f6beee6c5",
      postCode: "M123AD",
      propertyNumber: faker.random.number({
        min: 1,
        max: 50,
      }),
      purchasePrice,
      deposit,
      purchaseDate: new Date(faker.date.between("2018-01-01", "2020-01-05")),
      propertyTenure: {
        tenure: "freehold",
      },
      currency: "£",
      propertyType: "Flat",
      propertyRooms: faker.random.number({
        min: 1,
        max: 5,
      }),
      propertyBathrooms: faker.random.number({
        min: 1,
        max: 3,
      }),
      rental: {
        currentRental: {
          ...copyRent,
          isRented: true,
        },
        EPC: {
          rating: faker.random.arrayElement(["A", "B", "C", "D", "E"]),
          startDate: new Date(faker.date.between("2019-01-01", "2020-01-05")),
          endDate: new Date(faker.date.between("2020-01-05", "2022-11-05")),
        },
        gasCertificate: {
          isRequired: false,
        },
        electricCertificate: {
          startDate: new Date(faker.date.between("2018-01-01", "2020-01-05")),
          endDate: new Date(faker.date.between("2020-01-05", "2025-11-05")),
        },
      },
      finances: {
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
              "05/2020": [
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
              "05/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
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
              "05/2020": [
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
              "05/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
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
              "05/2020": [
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
              "05/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
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
              "05/2020": [
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
              "05/2019": [
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                  endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
                },
                {
                  name: faker.commerce.productName(),
                  cost: faker.commerce.price(),
                  startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
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
            "05/2020": [
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
            "05/2019": [
              {
                name: faker.commerce.productName(),
                cost: faker.commerce.price(),
                startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
              },
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
            "05/2020": [
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
            "05/2019": [
              {
                name: faker.commerce.productName(),
                cost: faker.commerce.price(),
                startDate: new Date(faker.date.between("2019-05-01", "2019-05-30")),
                endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
              },
              {
                name: faker.commerce.productName(),
                cost: faker.commerce.price(),
                startDate: new Date(faker.date.between("2020-05-01", "2020-05-30")),
                endDate: new Date(faker.date.between("2020-01-01", "2023-11-05")),
              },
            ],
          },
        },
      },
    };

    dataArr.push(data);
  }
  res.send(dataArr);
}

module.exports = getTestData;
