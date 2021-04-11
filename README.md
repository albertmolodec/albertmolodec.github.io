# My personal site

[![Github Actions Status](https://github.com/albertmolodec/albertmolodec.github.io/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/albertmolodec/albertmolodec.github.io/actions)
[![Uptime](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/albertmolodec/upptime/master/api/my-website/response-time.json)](https://status.albert.works)
[![Netlify Status](https://api.netlify.com/api/v1/badges/69934195-20b2-40e6-9c52-052660d07387/deploy-status)](https://app.netlify.com/sites/albertworks/deploys)

Code, texts, projects and so on.

## Local development

Install dependencies.

```bash
npm i
```

Install [Vercel CLI](https://vercel.com/cli).

```bash
npm i -g vercel
```

Login to Vercel and pull environment variables.

```bash
vercel env pull
```

Start local dev server.

```bash
vercel dev
```

## Environment variables

| Key                    |               Value               |           Where to set            |
| ---------------------- | :-------------------------------: | :-------------------------------: |
| **`AIRTABLE_API_KEY`** |                ...                |    Vercel (Prod, Preview, Dev)    |

