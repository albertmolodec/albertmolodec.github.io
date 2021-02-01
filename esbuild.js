const { build } = require('esbuild')
const glob = require('tiny-glob')

;(async () => {
  const define = {}

  for (const k in process.env) {
    define[`process.env.${k}`] = JSON.stringify(process.env[k])
  }

  let entryPoints = await glob('src/js/**/*.js')

  try {
    await build({
      entryPoints,
      outdir: 'bundle/js',
      bundle: true,
      watch: process.env.WATCH === 'true',
      define,
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
