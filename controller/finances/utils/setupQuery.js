function setupQuery(req) {
  const { account } = req;
  const { propertyId } = req.params;
  const { startDate, endDate = "", type = "" } = req.query;

  let queries = [{ account }];

  if (type) queries.push({ type });
  if (propertyId) queries.push({ property: propertyId });

  const newStartDate = new Date(startDate);
  const year = newStartDate.getFullYear();
  if (startDate) queries.push({ startDate: { $gte: `${year}-01-01` } });

  const newEndDate = new Date(endDate);
  const endYear = newEndDate.getFullYear();
  if (endDate) queries.push({ endDate: { $lte: `${endYear}-01-01` } });

  if (queries.length) return { $and: queries };
  else return {};
}

module.exports = setupQuery;
