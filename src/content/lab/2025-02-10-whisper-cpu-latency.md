---
title: "Whisper.cpp latency on CPU laptops"
date: 2025-02-10
type: "experiment"
stack:
  - Whisper.cpp
  - Python
  - Bash
summary: "Timed CPU-only transcription for short clips to see if the pipeline is fast enough for daily capture."
tags:
  - stt
  - ai
---

## Question / hypothesis
Can I keep the offline STT pipeline “good enough” on CPU without adding a GPU or cloud calls for 3–5 minute voice notes?

## Setup
- CachyOS laptop on battery, no dGPU.
- Whisper.cpp small model, compiled with OpenBLAS.
- Python script for timing and cleanup; Bash wrapper for recording.

## What I tried
- Ran 10 short clips (1–5 minutes) and logged wall-clock time for transcription + cleanup.
- Tweaked `--threads` and `--processors` flags to see where CPU usage balanced with heat.
- Tested a lighter `tiny.en` model to compare accuracy vs speed.

## Observations
- Best balance: `small.en` with 6 threads kept latency under ~70–90s for 5-minute clips.
- `tiny.en` was faster but dropped domain terms (“WSL2”, “Hyprland”) too often.
- Heat throttling kicked in when I pinned all cores; better to leave 1–2 free for the OS.

## Next iteration ideas
- Try on WSL2 with the same script to see if Windows audio drivers change the numbers.
- Cache prompts/domain terms to reduce cleanup time.
- Add a lightweight progress indicator so I know when the job will finish without checking `htop`.
