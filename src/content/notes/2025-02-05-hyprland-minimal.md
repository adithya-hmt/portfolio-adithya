---
title: "Minimal Hyprland setup for focus"
date: 2025-02-05
tags:
  - linux
  - systems
  - focus
summary: "Notes on keeping Hyprland lean enough for coding and STT tests on mid-range hardware."
---

## Context
Wanted a tiling WM that stays out of the way while running STT experiments on battery.

## Essentials
- Keep animations off; rely on keybindings and a small status bar.
- Disable heavy widgets; use CLI tools for monitoring temps/fans.
- Preload audio modules only when I need mic input to save power.

## What I skip
- No wallpaper manager or auto-brightness.
- Avoid notification daemons that hijack shortcuts; terminal alerts are enough.

## Wishlist
- Scripted profile switcher for “recording mode” that locks brightness, mic gain, and fan curves.
