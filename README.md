# Мой сайт: albertmolodec.github.io.
Код, тексты, проекты... Вот это вот всё.

> :loudspeaker: В процессе разработки

## Что внутри
- [x] Gatsby
- [x] React
- [x] ESLint, Prettier, stylelint
- [ ] RSS
- [ ] И другие инструменты
- [ ] ...

## Структура проекта

```
.
└── content
    └── blog
        └── ...
└── gatsby
    ├── createPages.js
    └── onCreateNode.js
├── node_modules
└── src
    └── assets
        ├── fonts
        └── images
    ├── components
    ├── helpers
    ├── layouts
    ├── modules
    ├── pages
    ├── templates
    └── utils
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── .travis.yml
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── package-lock.json
├── package.json
└── README.md
```

1. `/node_modules`: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.
2. `/src.modules`: Redux-стор. 
3. `/src.components`: Расшариваемые компоненты: кнопки, инпуты, чекбоксы... 
4. *Я в процессе*

Руководствуюсь этим чудесным [гайдом от Shivek Khurana](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).

***

Использовал [Starter Gatsby Blog](https://github.com/gatsbyjs/gatsby-starter-blog).
Вдохновлялся [блогом Дэна Абрамова](https://overreacted.io/). Собирал [я](https://twitter.com/albert_molodec).
