const meta = {
  title: 'Сайт Альберта Абдульманова',
  shortTitle: 'AlbertMolodec',
  author: 'Альберт Абдульманов',
  description: 'Пишу код и тексты',
  viewport:
    'width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no',
  siteUrl: 'https://albertmolodec.js.org',
};

const siteSocial = {
  siteLogo: `${meta.siteUrl}/social/avatar.png`,
  siteLogoSmall: `${meta.siteUrl}/social/avatar-small.png`,
  siteBanner: `${meta.siteUrl}/social/banner_`, // Locale ending + filetype gets added in SEO component
  siteBannerWidth: '776',
  siteBannerHeight: '382',
};

const social = {
  email: 'mailto:albert.abdu@gmail.com',
  github: 'https://github.com/albertmolodec',
  codepen: 'https://codepen.io/albertmolodec/',
  twitter: 'https://twitter.com/albertmolodec',
  instagram: 'https://instagram.com/albertmolodec',
  facebook: 'https://www.facebook.com/profile.php?id=100001486167096',
  linkedin: 'https://www.linkedin.com/in/albert-abdulmanov-5b94a316b/',
  moikrug: 'https://moikrug.ru/albertmolodec',
};

const website = {
  meta,
  siteSocial,
  social,

  // Manifest
  themeColor: '#364F6B',
  backgroundColor: '#F5F5F5',
};

module.exports = website;
