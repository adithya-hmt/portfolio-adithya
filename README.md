# Adithya Automations — Portfolio v2

Astro 5 site for Adithya S (19-year-old founder in Chennai) focused on automation, AI workflows, and systems work. Routes: Home, About, Projects, Lab, Build, Notes, Contact.

## Setup
- `npm install`
- `npm run dev` — local dev server
- `npm run build` — static output in `dist/`
- `npm run preview` — preview the production build

## Content collections
Content lives in `src/content/` and is validated by `src/content/config.ts`.

- **projects/** — Case studies. Frontmatter: `title`, `summary`, `tags` (array), `tech` (array), `status`, `difficulty`, optional `role`, `order`, plus `problem`, `solution`, and optional `context` in frontmatter. Body should cover Problem, Context, Approach, Implementation, and What I learned.
- **build/** — Build log entries. Frontmatter: `title`, `date` (`YYYY-MM-DD`), optional `tags` (array) and `summary`. Body uses the sections: What I worked on, What broke, What shipped, What’s next.
- **lab/** — AI/LLM experiments. Frontmatter: `title`, `date`, `type`, `stack` (array), `summary`, optional `tags`. Body should include Question/Hypothesis, Setup, What you tried, Observations, Next iteration ideas.
- **notes/** — Short technical notes. Frontmatter: `title`, `date`, `tags` (array), `summary`. Keep bodies short and structured.

## Pages
- `/` — Hero, now-focus, selected projects, lab highlights, recent build log, contact.
- `/projects` & `/projects/[slug]` — Grouped by tag with full case studies.
- `/lab` & `/lab/[slug]` — AI/LLM experiment notes.
- `/build` & `/build/[slug]` — Reverse-chronological build log.
- `/notes` & `/notes/[slug]` — Short technical notes.
- `/about`, `/contact` — Story and contact form (action left blank by design).
- `/rss.xml` — Combined feed of notes + build log entries.

## Deployment
`npm run build` produces a static site ready for Cloudflare Pages or any static host. Update `astro.config.mjs` if the domain changes.
