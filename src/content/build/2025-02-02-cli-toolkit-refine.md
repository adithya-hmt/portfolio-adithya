---
title: "Refining the CLI capture toolkit"
date: 2025-02-02
tags:
  - cli
  - tooling
summary: "Tightened the task and note commands and reduced the number of flags."
---

## What I worked on
- Standardized filenames and entry templates across `task`, `note`, and `log`.
- Removed rarely used flags and unified the parser so timestamps/tags are automatic.

## What broke
- Early refactor duplicated timestamps when syncing to Notion; fixed by centralizing formatting.

## What shipped
- Single parser powering every subcommand.
- Small sync script to push latest entries to Notion when online while keeping plaintext as source of truth.

## What's next
- Add a `review` command that surfaces older tasks before I log new ones.
- Write a short doc so friends can test the flow without digging into the source.
