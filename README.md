# My personal site

[![CircleCI](https://circleci.com/gh/albertmolodec/albertmolodec.github.io.svg?style=svg)](https://circleci.com/gh/albertmolodec/workflows/albertmolodec.github.io)

Code, texts, projects and so on.

> :loudspeaker: In development.

## Stack
- [x] Gatsby
- [x] React
- [x] ESLint, Prettier, Stylelint
- [ ] RSS
- [x] CI/CD (CircleCI)
- [x] CMS (Forestry)
- [ ] ...

## Project structure

```
.
└── content # 
    └── blog
        └── ...
└── gatsby
    ├── createPages.js
    ├── onCreateNode.js
    └── onCreateWebpackConfig.js
└── src
    └── assets
        ├── fonts
        └── images
    ├── components
    ├── helpers
    ├── hooks
    ├── layouts
    ├── modules
    ├── pages 
    ├── templates # Blog templates
    ├── ui # Shared components
    └── utils
└── static
    ├── favicon.png
    └── robots.txt
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── postcss.config.js
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── jsconfig.json
├── package-lock.json
├── package.json
└── README.md
```

## CMS

[Forestry](https://app.forestry.io/sites/z1mqjijkwvzhfa/#/)

***

Inspired by [Dan Abramov's **Overreacted**](https://overreacted.io/).
