import { VercelRequest, VercelResponse } from '@vercel/node'
import Airtable from 'airtable'

const { readFileSync } = require('fs')
const { join } = require('path')
const airtableJson = readFileSync(join(__dirname, '_files', 'airtable.json'), 'utf8')
const { wishlist } = JSON.parse(airtableJson)

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(wishlist.id)

export default async function (req: VercelRequest, res: VercelResponse) {
  const records = await new Promise((resolve, reject) => {
    const myWishes: any = []
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
        },
      )
  })
  const body = JSON.stringify({ records })
  res.setHeader('content-type', 'application/json')
  res.status(200).send(body)
}
