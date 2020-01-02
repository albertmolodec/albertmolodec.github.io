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
              quality: 95,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    // Sharp images
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 95,
      },
    },
    // Replace react to preact in production mode
    'gatsby-plugin-preact',
    // Set headers
    `gatsby-plugin-react-helmet`,
    // Parsers
    'gatsby-plugin-svgr',
    `gatsby-plugin-mdx`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-linaria',
    // Dev-mode helpers
    'gatsby-plugin-stylelint',
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
