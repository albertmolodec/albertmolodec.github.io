const Airtable = require('airtable');

const { podcasts } = require('./utils/airtable')
const headers = require('./utils/headers')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(podcasts.id);

exports.handler = function(event, context, callback) {
  const myPodcasts = [];
  base(podcasts.table.podcasts)
    .select({
      maxRecords: 100,
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          myPodcasts.push(record.fields);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(err);
        } else {
          const body = JSON.stringify({ records: myPodcasts });
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
