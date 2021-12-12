function setupQuery(req) {
  const { account } = req;
  const { propertyId } = req.params;
  const { date = "", type = "" } = req.query;

  let queries = [{ account }];

  if (type) queries.push({ type });
  if (propertyId) queries.push({ property: propertyId });
  if (date) queries.push({ date: { $gte: new Date(date) } });

  if (queries.length) return { $and: queries };
  else return {};
}

module.exports = setupQuery;