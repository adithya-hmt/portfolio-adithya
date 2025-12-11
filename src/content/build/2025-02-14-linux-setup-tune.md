---
title: "Tuning the Linux dev setup"
date: 2025-02-14
tags:
  - linux
  - setup
summary: "Reduced boot-time services and documented the rebuild steps."
---

## What I worked on
- Trimmed startup services on CachyOS and rebuilt dotfiles from scratch.
- Tuned terminal prompt and multiplexer configs to be lighter.
- Added `just` tasks for fresh installs across WSL2 and native.

## What broke
- Clipboard helpers were missing on first boot; fixed by pulling the right package into the install task.

## What shipped
- Repeatable bootstrap with service trimming baked in.
- Checklist for local AI tools (audio deps + CPU/GPU fallbacks) stored next to the scripts.

## What's next
- Publish the setup notes for friends to test on their laptops.
- Try a minimal Hyprland config to compare resource use against my current setup.
