# Dev Notes

- Content collections live in `src/content/` (`projects`, `build`, `lab`, `notes`). Schemas sit in `src/content/config.ts`.
- Projects sort by optional `order`; they carry `status`, `difficulty`, `tags`, and `tech` to render badges on cards and detail pages.
- Build log bodies follow the fixed sections (worked on/broke/shipped/next) so previews stay consistent.
- Lab entries capture small AI/LLM experiments; notes are short technical writeups. Both sort by `date` descending.
- Shared site metadata is in `src/config/site.ts` and is used for head tags, header/footer, and the RSS feed (`src/pages/rss.xml.ts`).
- Global styles are in `src/styles/global.css`; design sticks to a light palette, system/Inter typography, and low-JS layout (cards + grids).
- Markdown syntax highlighting uses Shiki via `astro.config.mjs` (`github-light` theme). Code blocks can include small Bash/Python snippets.
- Contact form intentionally leaves `action` blank—wire your provider when ready.
