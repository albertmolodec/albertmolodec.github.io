const Airtable = require('airtable')

const { wishlist } = require('./utils/airtable')
const headers = require('./utils/headers')

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  wishlist.id
)

exports.handler = async function () {
  const records = await new Promise((resolve, reject) => {
    const myWishes = []
    base(wishlist.table.giftIdeas)
      .select({
        maxRecords: 100,
        view: 'Main View',
        filterByFormula: '{Potential Recipients} = "Я"',
        fields: wishlist.fields,
        sort: wishlist.sort,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            myWishes.push(record.fields)
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            resolve(myWishes)
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
