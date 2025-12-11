---
title: "Prompt Workbench CLI"
summary: "A small terminal tool that templates prompts for reviews, summaries, and debugging, then sends them to an LLM API."
tags:
  - ai
  - tooling
  - automation
tech:
  - TypeScript
  - Node.js
  - LLM API
status: "In use"
difficulty: "Keeping prompts consistent without building a heavy UI."
order: 2
problem: "Writing one-off prompts for reviews and summaries wastes time and leads to inconsistent outputs."
solution: "Template prompts as files, render them with context, and ship from the CLI with sane defaults."
context: "Personal workflow for code reviews and task planning; shared with classmates who want repeatable prompts without a web app."
---

## Problem
Code reviews and summaries need similar instructions every time, but I kept rewriting them. Manually pasting prompts also risks leaking sensitive context.

## Context
Built for my own repos (mostly Python/TypeScript) and for friends who want something lighter than a TUI or browser-based prompt tool.

## Approach
- Store prompts as versioned templates with variables (`{{summary}}`, `{{diff}}`).
- Keep transport simple: pipe context from git or files into the CLI; avoid storing data remotely.
- Add guardrails: system prompt enforces brevity and no PII; dry-run shows the rendered prompt before sending.

## Implementation
- TypeScript CLI with subcommands (`review`, `summarize`, `explain-error`).
- Templates live in a repo folder; rendering uses a tiny mustache-like function.
- API key pulled from `.env`; responses stream to stdout for piping to files or `pbcopy`.
- Logs stored locally (`~/.prompt-workbench/logs`) for auditing and reuse; optional `--offline` flag to just print the prompt.

## What I learned
- Templates beat memory: I stopped inventing new styles mid-review.
- Streaming responses to stdout works well with other tools (`less`, `fzf`).
- Guardrails matter: a default system prompt prevented me from sending sensitive snippets without thinking.
