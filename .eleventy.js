const fs = require('fs')

const htmlMinTransform = require('./src/transforms/htmlmin.js')

const siteConfig = require('./src/_data/config.json')

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./bundle/')

  eleventyConfig.addPassthroughCopy('./src/images')
  eleventyConfig.addPassthroughCopy(`./src/css/${siteConfig.syntaxTheme}`)
  eleventyConfig.addPassthroughCopy({ './src/public': '.' })
  eleventyConfig.addPassthroughCopy({ bundle: '.' })

  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    logLevel: 'silent',
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  /*
   * Disable use gitignore for avoiding ignoring of /bundle folder during watch
   * https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore
   */
  eleventyConfig.setUseGitIgnore(false)

  /**
   * Eleventy configuration object
   */
  return {
    dir: {
      input: 'src',
      layouts: `_includes/layouts`,
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
