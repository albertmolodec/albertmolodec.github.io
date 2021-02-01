const Airtable = require('airtable')

const { podcasts } = require('./utils/airtable')
const headers = require('./utils/headers')

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  podcasts.id
)

exports.handler = async function () {
  const records = await new Promise((resolve, reject) => {
    const myPodcasts = []
    base('Podcasts')
      .select({
        maxRecords: 100,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            myPodcasts.push(record.fields)
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            resolve(myPodcasts)
          }
        }
      )
  })
  const body = JSON.stringify({ records })
  const response = {
    statusCode: 200,
    body,
    headers,
  }
  return response
}
