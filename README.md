# My personal site

[![Github Actions Status](https://github.com/albertmolodec/albertmolodec.github.io/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/albertmolodec/albertmolodec.github.io/actions)
[![Uptime](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/albertmolodec/upptime/master/api/personal-website/uptime.json)](https://status.albert.works)
[![Netlify Status](https://api.netlify.com/api/v1/badges/69934195-20b2-40e6-9c52-052660d07387/deploy-status)](https://app.netlify.com/sites/albertworks/deploys)

Code, texts, projects and so on.

## Local development

Install dependencies.

```bash
npm i
```

Install [Netlify CLI](https://github.com/netlify/cli).

```bash
npm install netlify-cli -g
```

Login to a Netlify account.

```bash
netlify login
```

Link a local repo to an existing site on Netlify.

```bash
netlify link
```

Start local dev server.

```bash
npm run dev
```

## Environment variables

| Key                    |               Value               | Where to set |
| ---------------------- | :-------------------------------: | :----------: |
| **`API_DOMAIN`**       |    `https://api.albert.works`     |    Github    |
| **`AIRTABLE_API_KEY`** |                ...                |   Netlify    |

## Other

Inspired by [XITY](https://github.com/equinusocio/xity-starter) and [Hylia](https://github.com/hankchizljaw/hylia).
