# My personal site

[![Uptime](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/albertmolodec/upptime/master/api/my-website/response-time.json)](https://status.albert.works)

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

