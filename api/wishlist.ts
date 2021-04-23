import { ServerRequest } from 'https://deno.land/std@0.94.0/http/server.ts'
import { Airtable, Field } from 'https://deno.land/x/airtable@v1.1.1/mod.ts'

const WISHLIST_BASE_ID = 'apppJBdNlpiff8yfq'

const airtable = new Airtable({
  apiKey: Deno.env.get('AIRTABLE_API_KEY') as string,
  baseId: WISHLIST_BASE_ID,
  tableName: 'Gift Ideas',
})

type Fields = {
  ['Item']: Field.SingleLineText
  ['URL']: Field.URL
  ['Own']: Field.Checkbox
  ['Done']: Field.Checkbox
}

export default async (req: ServerRequest) => {
  const { records } = await airtable.select<Fields>({
    fields: ['Item', 'URL', 'Own', 'Done'],
    maxRecords: 100,
    view: 'Main View',
    filterByFormula: '{Potential Recipients} = "Я"',
    // TODO: uncomment when PR to airtable-deno will me merged
    // sort: [
    //   {
    //     field: 'Own',
    //     direction: 'asc',
    //   },
    //   {
    //     field: 'Done',
    //     direction: 'asc',
    //   },
    // ],
  })

  const headers = new Headers()
  headers.set('Content-Type', 'application/json; charset=utf8')

  req.respond({
    body: JSON.stringify(records.map(({ fields }) => fields)),
    headers,
    status: 200,
  })
}
