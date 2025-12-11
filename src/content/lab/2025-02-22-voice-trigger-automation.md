---
title: "Voice-triggered automations with local STT"
date: 2025-02-22
type: "experiment"
stack:
  - Python
  - Vosk
  - Whisper.cpp
summary: "Tested a hotword listener that hands short commands to Whisper.cpp and triggers shell scripts."
tags:
  - voice
  - automation
  - ai
---

## Question / hypothesis
Can I trigger small automations (open notes, append tasks) hands-free without needing cloud wake words or push-to-talk?

## Setup
- Python daemon listening for a simple hotword using Vosk.
- On detection, record a 5–8 second clip and pass it to Whisper.cpp for transcription.
- Command router maps phrases to shell scripts (`open notes`, `log idea`, `start timer`).

## What I tried
- Tuned hotword threshold to reduce false positives in a noisy hostel room.
- Added a timeout so the listener pauses when headphones disconnect.
- Logged false triggers and missed commands to a file for quick review.

## Observations
- Hotword accuracy is decent when the mic gain is fixed; moving laptops broke it quickly.
- Whisper.cpp handles short commands fine; most errors came from background fans.
- The router needs fuzzy matching—exact string checks felt brittle.

## Next iteration ideas
- Add a calibration step that records room noise before enabling the listener.
- Try a lower-footprint model for the hotword so the daemon uses less battery.
- Build a simple dashboard to replay failed commands and re-label them for future tests.
