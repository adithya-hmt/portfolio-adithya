---
title: "How I structure the local STT tool"
date: 2025-02-12
tags:
  - ai
  - stt
  - automation
summary: "Quick outline of the folders, scripts, and guardrails that keep the offline transcription flow sane."
---

## Goal
Keep the STT pipeline easy to rebuild after OS wipes and simple enough to share.

## Layout
- `/capture` for audio scripts and normalization.
- `/transcribe` for Whisper.cpp binaries and flags per device.
- `/cleanup` for Python processors and templates.
- `/outbox` as a single drop folder for the final notes.

## Failure modes
- Audio drivers change between kernel updates; keep a known-good config in the repo.
- Long filenames break some scripts; enforce timestamp-based names.
- Background noise dominates in hostels; pre-record a noise sample before serious runs.

## Next tweaks
- Add checksums to binaries so I know when Whisper.cpp updates.
- Try a progress notifier instead of watching `htop` during long runs.
