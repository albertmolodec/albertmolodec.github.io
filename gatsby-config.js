module.exports = {
  siteMetadata: {
    title: 'AlbertMolodec',
    author: 'Альберт Абдульманов',
    description: 'Пишу код и тексты',
    viewport:
      'width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no',
    siteUrl: 'https://albertmolodec.github.io/',
    social: {
      Email: 'mailto:albert.abdu@gmail.com',
      Github: 'https://github.com/albertmolodec',
      Codepen: 'https://codepen.io/albertmolodec/',
      Twitter: 'https://twitter.com/albertmolodec',
      Instagram: 'https://instagram.com/albertmolodec',
      Facebook: 'https://www.facebook.com/profile.php?id=100001486167096',
      LinkedIn: 'https://www.linkedin.com/in/albert-abdulmanov-5b94a316b/',
      Moikrug: 'https://moikrug.ru/albertmolodec',
    },
  },
  pathPrefix: '/',
  plugins: [
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
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Сайт Альберта Абдульманова`,
        short_name: `Albert`,
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#364F6B`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {},
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1-O2ZpXMRqKgarXVoK27MptqneqK8tWUBw13oCLDmBHA',
        worksheetTitle: 'ExampleSheet',
        // eslint-disable-next-line global-require
        credentials: require('./credentials.json'),
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-stylelint',
    'gatsby-plugin-postcss',
    `gatsby-mdx`,
  ],
};
