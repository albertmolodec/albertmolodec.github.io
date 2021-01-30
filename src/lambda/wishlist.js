const Airtable = require('airtable');

const { wishlist } = require('./utils/airtable')
const headers = require('./utils/headers')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(wishlist.id);

exports.handler = function(event, context, callback) {
  const myWishes = [];
  base(wishlist.table.giftIdeas)
    .select({
      maxRecords: 100,
      view: 'Main View',
      filterByFormula: '{Potential Recipients} = "Я"',
      fields: wishlist.fields,
      sort: wishlist.sort
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          myWishes.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(err);
        } else {
          const body = JSON.stringify({ records: myWishes });
          const response = {
            statusCode: 200,
            body,
            headers,
          };
          callback(null, response);
        }
      },
    );
};
