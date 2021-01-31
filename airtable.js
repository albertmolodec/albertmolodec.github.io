async function getHeaders() {
  return {
    'content-type': 'application/json',
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${await AIRTABLE_KV.get("API_KEY")}`
  }
}
const PODCASTS_BASE_ID = 'appLVB5hLNVxsSvP6'
const url = `https://api.airtable.com/v0/${PODCASTS_BASE_ID}/Podcasts?view=Grid%20view`

async function handleRequest() {
  const headers = await getHeaders()
  const response = await fetch(url, { headers })
  const results = JSON.stringify(await response.json())
  return new Response(results, { headers: { "content-type": "application/json" }})
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest())
})
