# my-designs

Portfolio site built with Eleventy (11ty) + Nunjucks.

## Tech stack

- Eleventy `3.x`
- Nunjucks templates
- Data-driven content from `_data/`
- Markdown rendering via `markdown-it`

## Project map

- `index.njk` - main page template (WORKS / ABOUT / STATS sections)
- `.eleventy.js` - 11ty config, passthrough copy, markdown filters
- `_data/site.js` - site-level content (hero/meta/footer)
- `_data/portfolio/works/` - works tabs, ordering, and item JSONs
- `_data/portfolio/experience/` - jobs, apps-and-coding, other
- `_data/portfolio/stats/` - stats section content
- `_includes/` - layout and partials (`site-head`, `site-footer`, `site-scripts`)
- `scripts/` - front-end behavior (tabs, numbers animation, fancybox setup, etc.)
- `_site/` - generated output (do not edit manually)

## Getting started

### Install

```bash
npm install
```

### Local development

```bash
npm run dev
```

Open `http://localhost:8080/`.

### Production build

```bash
npm run build
```

The built site is generated in `_site/`.

## How to add new portfolio items safely

### 1. Add item to WORKS

1. Choose a section folder:
   - `_data/portfolio/works/videos/`
   - `_data/portfolio/works/banners/`
   - `_data/portfolio/works/web/`
   - `_data/portfolio/works/socialMedia/`
   - `_data/portfolio/works/personal/`
2. Create a new item file in `items/`, example:
   - `_data/portfolio/works/web/items/10-new-case.json`
3. Add the item slug (without `.json`) to that section `order.json`.
4. Add or reuse media assets under passthrough folders (`images/`, `videos-webm/`, `web/`, etc.).

Minimal WORKS item shape:

```json
{
  "title": "New Case Title",
  "descriptionLines": [
    { "tag": "text", "md": "**project:** Example" },
    { "tag": "span", "md": "**for:** Example client" },
    { "tag": "time", "md": "**year:** 2026" }
  ],
  "primary": {
    "href": "web/sites/example/index.html",
    "attrs": {
      "class": "lazyload",
      "data-type": "iframe",
      "data-fancybox": "single",
      "data-caption": "Example, 2026"
    },
    "img": {
      "attrs": {
        "class": "lazyload",
        "data-srcset": "images/example.jpg 1200w",
        "data-sizes": "auto",
        "alt": "Example",
        "src": "images/example.jpg",
        "srcset": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      }
    },
    "inner": null
  },
  "hidden": []
}
```

Notes:
- `descriptionLines.tag` supports: `text`, `span`, `time`.
- `descriptionLines.md` is markdown inline text (links allowed, e.g. `[link](https://...)`).
- `hidden` contains additional fancybox entries for galleries.

### 2. Add item to ABOUT -> jobs

Files involved:
- `_data/portfolio/experience/jobs.json`
- `_data/portfolio/experience/jobs/*.md`

Steps:
1. Add a `nav` entry (`targetId`, `title`, `description`).
2. Add a matching `panels` entry with the same id.
3. Create/update markdown file pointed by `contentMdFile`.

Important:
- `nav.targetId` must exactly match `panels.id`.
- Keep only one default jobs button (`defaultId: "defaultOpenJobs"`).

### 3. Add item to ABOUT -> apps & coding

Files involved:
- `_data/portfolio/experience/appsAndCoding/order.json` (group order)
- `_data/portfolio/experience/appsAndCoding/<group>/group.json`
- `_data/portfolio/experience/appsAndCoding/<group>/order.json`
- `_data/portfolio/experience/appsAndCoding/<group>/items/*.json`

Steps:
1. Add/update item JSON with:
   - `name`
   - `image.attrs` block
2. Add item slug to that group `order.json`.
3. Ensure group exists in top-level `appsAndCoding/order.json`.

### 4. Add item to ABOUT -> other (carousel)

Files involved:
- `_data/portfolio/experience/other.json`
- `_data/portfolio/experience/other/*.md`

Steps:
1. Add a slide object to `slides` with:
   - `title`
   - `contentMdFile`
2. Create the referenced markdown file.

### 5. Add item to STATS

File:
- `_data/portfolio/stats/items.json`

Add an object with:
- `id` (unique)
- `number`
- `descr`

## If you add a new top-level asset folder

If new assets should be copied to `_site`, add that folder to `passthroughPaths` in `.eleventy.js`.
If assets are only stored in repo and should not be published, do not add them there.

## Regression checklist (before push)

1. Run `npm run build` and ensure no errors.
2. Check that new item appears in the correct section and order.
3. Check tabs still open correctly (WORKS / ABOUT / jobs vertical tab).
4. Open item in fancybox and verify media loads.
5. Ensure no broken relative paths to images/videos/html.
6. Ensure only one default tab trigger per tab group.
7. Do not introduce `*Html` fields in data files; use plain fields + markdown.
8. Do not edit `_site` by hand.

## Deploy

This repository deploys to GitHub Pages via GitHub Actions workflow:
`.github/workflows/deploy.yml`.

## Suggested extra guides

- Media prep guide:
  - naming convention for thumbs and source files
  - recommended sizes and compression targets
- Fancybox conventions:
  - `data-fancybox` grouping rules
  - captions/thumb behavior
- Content style guide:
  - consistent `descriptionLines` patterns
  - date formatting rules
- Data schema validation:
  - local script to validate required JSON fields before build
- Release smoke-test checklist:
  - quick manual checks after deploy (tabs, gallery, responsive, console)
