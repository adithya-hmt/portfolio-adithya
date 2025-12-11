---
title: "Drafted offline STT pipeline MVP"
date: 2025-01-18
tags:
  - stt
  - automation
summary: "Built the first end-to-end local capture flow using Whisper.cpp scripts."
---

## What I worked on
- Wired a shell wrapper to record short clips and pass them to Whisper.cpp on CPU.
- Added a Python clean-up script to trim filler words and format the transcript.

## What broke
- Laptop mic was noisy; first few runs produced unusable text.

## What shipped
- Quick normalization step before transcription.
- Structured note template that slots the transcript into `idea`, `actions`, and `references` sections.

## What's next
- Speed up the clean-up script; explore batching for longer clips.
- Add a TTS read-back to catch errors without re-listening to raw audio.
