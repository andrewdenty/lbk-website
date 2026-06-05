# lbk-website

A single-page personal website for Danish scientist **Lotte Bjerre Knudsen**,
Chief Scientific Advisor at Novo Nordisk and a pioneer of GLP-1 medicines.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev      # start the dev server at localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Configuration

Before deploying, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: '/lbk-website',
});
```

Replace `your-github-username` with your GitHub username.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages.

If the site does not appear, enable Pages manually under
**Settings → Pages → Source: GitHub Actions**.

## Project structure

```
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow
├── public/                        # static assets (favicon, robots.txt, .nojekyll)
├── src/
│   ├── components/                # Nav (with language toggle), Footer, PageContent, Entry
│   ├── data/                      # content.ts — all copy + links for both languages
│   ├── layouts/                   # BaseLayout
│   ├── pages/                     # index.astro (English), da.astro (Danish)
│   └── styles/                    # global.css
├── astro.config.mjs
└── package.json
```

## Content & languages

The site is bilingual: English at `/` and Danish at `/da/`, switched via the
`EN / DA` toggle in the top-right of the nav. All copy and links live in
[`src/data/content.ts`](src/data/content.ts) as a single `content` record keyed
by locale — edit the text there and both the page and its translation update.
`PageContent.astro` renders every section from that data, so the two pages stay
structurally identical.

## Design

- **Type:** Hanken Grotesk (display + body + labels), via Google Fonts
- **Palette:** pink accent `#FF2F81`, soft pink section background `#FFF0F8`,
  ink `#18171A`, muted grey `#6F6C70`, hairline rule `#E9E6EA`, white `#FFFFFF`
- **Layout:** a Swiss-style label/body grid, a diagonal pink wordmark hero, and
  a large editorial footer.
