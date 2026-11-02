# Aida Kordi · Portfolio

My personal portfolio site, built with **React 19**, **TypeScript**, **Tailwind CSS v4** and **Vite**, tested with **Vitest** and **React Testing Library**, and deployed to **GitHub Pages** with GitHub Actions.

## Run it locally

```bash
npm install
npm run dev      # start a local dev server
npm test         # run the tests
npm run build    # type-check and build to /dist
```

## Project structure

```
src/
  config.ts            # name, links, Formspree endpoint
  data/projects.ts     # project content (typed)
  data/profile.ts      # skills and experience
  components/          # Header, Hero, About, Projects, ProjectDialog, Skills, Experience, Contact
  test/                # Vitest + React Testing Library tests
.github/workflows/     # build, test and deploy to GitHub Pages
```

## How it works

- Static single-page app: no database and no server of my own.
- Content lives in typed data files, and components render it. Adding a project means adding one object to `projects.ts`.
- Design tokens (colors, fonts) are defined once in `src/index.css` with Tailwind's `@theme` and used as utility classes.
- The contact form posts to [Formspree](https://formspree.io), which emails messages to me without exposing my address.
- Every push to `main` runs the tests, builds the site and publishes it.

## Updating

- Links and contact form: `src/config.ts`
- Projects: `src/data/projects.ts`
- Skills and experience: `src/data/profile.ts`
