---
title: "Daily review loop with justfiles"
date: 2025-02-20
tags:
  - automation
  - cli
  - productivity
summary: "Quick notes on using a justfile to keep task reviews predictable across machines."
---

## Why
Daily reviews slipped when I had to remember commands; a justfile keeps the steps consistent.

## Commands
- `just review` opens yesterday’s log, surfaces stale tasks, and starts a new entry.
- `just sync` pushes plaintext to git and runs the optional Notion sync.
- `just reset` clears temp files and re-links the outbox folder if paths changed.

## Tricks
- Store defaults in environment variables so the same justfile works on WSL2 and native.
- Print next steps at the end of each task so I know if the sync failed before closing the terminal.

## Next steps
- Add lightweight tests (shellcheck + formatting) as part of `just review` to catch bad entries early.
