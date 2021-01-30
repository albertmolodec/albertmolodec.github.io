const fs = require('fs');

const htmlMinTransform = require('./src/transforms/htmlmin.js');
const contentParser = require('./src/transforms/contentParser.js');
const htmlDate = require('./src/filters/htmlDate.js');
const date = require('./src/filters/date.js');

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

const siteConfig = require('./src/_data/config.json');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./bundle/');

  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy(`./src/css/${siteConfig.syntaxTheme}`);
  eleventyConfig.addPassthroughCopy('./src/blog/**/{images,videos}/**/*');
  eleventyConfig.addPassthroughCopy({ './src/public': '.' });
  eleventyConfig.addPassthroughCopy({ bundle: '.' });

  // human friendly date format
  eleventyConfig.addFilter('dateFilter', date);
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', htmlDate);

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform);
  }
  // Parse the page HTML content and perform some manipulation
  eleventyConfig.addTransform('contentParser', contentParser);

  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);

  /**
   * Create custom data collections
   * for blog and feed
   * Code from https://github.com/hankchizljaw/hylia
   */
  // Blog posts collection
  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;
  eleventyConfig.addCollection('posts', collection => [
    ...collection.getFilteredByGlob(`./src/blog/**/*`).filter(livePosts),
  ]);

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  /*
   * Disable use gitignore for avoiding ignoring of /bundle folder during watch
   * https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore
   */
  eleventyConfig.setUseGitIgnore(false);

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
  };
};
