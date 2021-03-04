const { build } = require('esbuild')
const glob = require('tiny-glob')

function getApiDomain() {
  if (process.env.NODE_ENV !== 'production' || !process.env.API_DOMAIN)
    return '/.netlify/functions'
  return process.env.API_DOMAIN
}

function getEnvironmentVariables() {
  const define = {}

  for (const k in process.env) {
    define[`process.env.${k}`] = JSON.stringify(process.env[k])
  }
  define['process.env.API_DOMAIN'] = JSON.stringify(getApiDomain())

  return define
}

;(async () => {
  let entryPoints = await glob('src/js/**/*.js')
  try {
    await build({
      entryPoints,
      outdir: 'bundle/js',
      bundle: true,
      watch: process.env.WATCH === 'true',
      define: getEnvironmentVariables(),
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
