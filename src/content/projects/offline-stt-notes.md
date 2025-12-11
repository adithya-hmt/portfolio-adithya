---
title: "Offline STT → Notes Pipeline"
summary: "CPU-only capture flow for voice notes that turn into structured notes without cloud services."
tags:
  - ai
  - automation
  - systems
tech:
  - Python
  - Whisper.cpp
  - Bash
  - Edge-TTS
role: "Builder"
status: "In use"
difficulty: "Threading audio capture, cleanup, and note generation on local hardware."
order: 1
problem: "Voice notes pile up when they rely on cloud transcription or slow mobile apps."
solution: "A local pipeline that turns recordings into tidy notes I can edit anywhere."
context: "Personal workflow and friends who want private capture while commuting or studying."
---

## Problem
Voice notes pile up when I depend on slow mobile apps or cloud transcription. I needed a way to capture ideas, transcribe, and structure them without opening a browser.

## Context
Built for myself first, then shared with friends who prefer offline tools and keep laptops nearby (Linux and WSL2).

## Approach
- Keep everything local: record via shell, transcribe with Whisper.cpp on CPU, then clean text.
- Aim for “fast enough” on battery: target sub-90s turnaround for 5-minute clips on mid-range hardware.
- Make outputs predictable so they drop into Obsidian/Notion without manual edits.

## Implementation
- Bash wrapper to record and normalize audio, then queue jobs for Whisper.cpp.
- Python post-processor that removes filler words, fixes timestamps, and formats into a note template with sections for actions and references.
- Optional Edge-TTS read-back to catch transcription errors without re-opening the clip.
- Single `notes drop <file>` command that moves the final markdown into synced folders.

```bash
./capture/record.sh --seconds 300 | ./transcribe/run.sh --model small.en
python cleanup/format.py --path outbox/latest.wav --template daily.md
notes drop outbox/latest.md
```

## What I learned
- Tiny audio normalization fixes more errors than prompt tweaks.
- Deterministic file paths keep the whole flow scriptable (cronable) without extra tooling.
- Local-first AI is slower than cloud GPUs, but it is reliable and private enough to be worth it.
