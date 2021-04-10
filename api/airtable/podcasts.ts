import { VercelRequest, VercelResponse } from '@vercel/node'
import Airtable from 'airtable'

const airtableJson = require('fs').readFileSync(require('path').join(__dirname, '_files', 'airtable.json'), 'utf8')
const { podcasts } = JSON.parse(airtableJson)

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(podcasts.id)

export default async function (req: VercelRequest, res: VercelResponse) {
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
  res.setHeader('content-type', 'application/json')
  res.status(200).send(body)
}
