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
├── public/                        # static assets (favicon, .nojekyll)
├── src/
│   ├── components/                # Nav, Footer
│   ├── layouts/                   # BaseLayout
│   ├── pages/                     # index.astro (the single page)
│   └── styles/                    # global.css
├── astro.config.mjs
└── package.json
```

## Design

- **Type:** Syne (display) + DM Sans (body) + DM Mono (labels), via Google Fonts
- **Palette:** muted pink `#FFD4DE`, ink `#000000`, bold pink accent `#FF5070`,
  muted grey-pink `#896A6F`, white section alt `#FFFFFF`
