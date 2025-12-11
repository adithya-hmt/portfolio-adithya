---
title: "Terminal prompt helper for repeat tasks"
date: 2025-02-18
type: "tool"
stack:
  - Node.js
  - TypeScript
  - LLM API
summary: "Small CLI that templates prompts for code review or summarization and sends them to an API with sensible defaults."
tags:
  - prompts
  - tooling
  - ai
---

## Question / hypothesis
Could a tiny CLI remove the overhead of crafting similar prompts for reviews and summaries without becoming a full-blown TUI app?

## Setup
- TypeScript script invoked as `prompt <template> <input>`.
- Template files stored in a git-tracked folder with variables for context snippets.
- API key loaded from `.env`; responses written to stdout for piping.

## What I tried
- Added templates for code review, task planning, and “explain this error”.
- Forced every request to include a short system prompt that reminds the model to stay concise.
- Tested piping git diffs and log files directly into the CLI.

## Observations
- Templating removed the “prompt blank page” problem; I answered more errors instead of rephrasing.
- Large diffs needed chunking; simple `split` logic worked but could be smarter.
- Logging prompts/responses to a flat file is already useful for auditing without a DB.

## Next iteration ideas
- Add a `--offline` flag to skip API calls and instead save the prepared prompt for local models.
- Build guardrails for PII so I do not accidentally send secrets.
- Turn templates into a shared repo so friends can contribute without touching the code.
