# Мой сайт albertmolodec.js.org.

Код, тексты, проекты... Вот это вот всё.

> :loudspeaker: В процессе разработки

## Что внутри
- [x] Gatsby
- [x] React
- [x] ESLint, Prettier, Stylelint
- [ ] RSS
- [x] Вывод размера бандла при каждой сборке
- [ ] И другие инструменты
- [ ] ...

## Структура проекта

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
    ├── templates # Шаблоны для страниц блога
    ├── ui # Расшариваемые компоненты: кнопки, инпуты, чекбоксы... 
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

Руководствуюсь этим чудесным [гайдом от Shivek Khurana](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).

***

Использовал [Starter Gatsby Blog](https://github.com/gatsbyjs/gatsby-starter-blog).
Вдохновлялся [блогом Дэна Абрамова](https://overreacted.io/). Собирал [я](https://twitter.com/albert_molodec).

## Рекомендации по именованию коммитов

Эмодзи перечислены здесь: https://gitmoji.carloscuesta.me/