// const buildCredentials = require('./config/buildGoogleDriveAPICredentials');
const config = require('./config/website');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: config.meta.title,
    shortTitle: config.meta.shortTitle,
    author: config.meta.author,
    description: config.meta.description,
    viewport: config.meta.viewport,
    siteUrl: config.meta.siteUrl,
    social: config.social,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.meta.title,
        short_name: config.meta.shortTitle,
        description: config.meta.description,
        lang: 'ru-RU',
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `static/social/avatar.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~src': 'src',
          '~content': 'content',
          '~static': 'static',
          '~plugins': 'plugins',
        },
        extensions: ['js', 'jsx'],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 585,
              quality: 90,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: 'https://albertmolodec.github.io/',
        components: ['amp-form'],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: '/amp/',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {},
    },
    // {
    //   resolve: 'gatsby-source-google-sheets',
    //   options: {
    //     spreadsheetId: '1-O2ZpXMRqKgarXVoK27MptqneqK8tWUBw13oCLDmBHA',
    //     worksheetTitle: 'ExampleSheet',
    //     credentials: buildCredentials(process.env),
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-stylelint',
    'gatsby-plugin-postcss',
    `gatsby-plugin-mdx`,
  ],
};
