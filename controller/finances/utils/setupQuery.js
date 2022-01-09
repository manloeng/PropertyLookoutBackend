function setupQuery(req) {
  const { account } = req;
  const { date = "", type = "", propertyId = "" } = req.query;

  let queries = [{ account }];

  if (type) queries.push({ type });
  if (propertyId) queries.push({ property: propertyId });
  if (date) {
    const dateArr = date.split("/");
    const endDate = `${dateArr[0]}/12/31`;
    queries.push({ date: { $gte: new Date(date), $lte: new Date(endDate) } });
  }

  if (queries.length) return { $and: queries };
  else return {};
}

module.exports = setupQuery;
