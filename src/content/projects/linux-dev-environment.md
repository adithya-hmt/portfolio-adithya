---
title: "Linux Dev Environment Setup"
summary: "A lean Arch/CachyOS dev setup tuned for fast terminals, editors, and local AI tools."
tags:
  - systems
  - automation
  - tooling
tech:
  - Linux
  - Bash
  - Dotfiles
role: "Builder"
status: "Documented setup"
difficulty: "Balancing speed and usability on mid-range laptops and WSL2."
order: 4
problem: "Default Linux installs feel slow and cluttered for focused development on low-end hardware."
solution: "A repeatable setup script and dotfiles that keep the system fast, predictable, and ready for coding."
context: "Students and solo builders who want a dependable, lightweight Linux environment that still handles AI and automation tools."
---

## Problem
Fresh installs waste time: missing packages, slow terminals, and inconsistent configs. I wanted to rebuild quickly without losing my workflow.

## Context
Built for rebuilding my laptop and WSL2 often without losing the small tweaks that make AI/audio tools behave.

## Approach
- Prefer base packages + scripts instead of large config managers.
- Keep shell prompts and multiplexing defaults identical across machines.
- Document the AI dependencies (audio libs, GPU fallbacks) because they are easy to forget on a clean install.

## Implementation
- `just` tasks to install packages, fonts, and terminal tools in one go.
- Dotfiles for shells, editors, tmux-like multiplexing, and clipboard helpers.
- Notes and scripts for enabling Whisper.cpp and small local models without bloating startup.
- Boot-time service trimming to keep the machine responsive on battery.

## What I learned
- Rebuild speed is the real productivity metric; scripts beat screenshots.
- Audio and GPU dependencies are fragile—writing them down avoids late-night debugging.
- Consistent prompts and keybindings keep my brain free when switching machines.
