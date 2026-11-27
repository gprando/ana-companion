# ANA Companion — Setup Guide

## Requirements

- Samsung Smart TV with Chromecast built-in
- Google Home app (iOS or Android)
- Matter-compatible smart devices (Deltaco)
- Temperature + humidity sensor (connected to Google Home)
- Spotify account
- TickTick account
- Google account (Calendar)

## Step 1 — Clone the repo

```bash
git clone https://github.com/gprando/ana-companion.git
cd ana-companion
```

## Step 2 — Configure your credentials

```bash
cp config/config.example.js config/config.js
# Edit config.js with your API keys
```

## Step 3 — Set up Google Home Routines

See `automations/google-home-routines.md` for step-by-step instructions.

## Step 4 — Cast the dashboard

Open `dashboard/morning.html` on your phone browser and cast to your TV.

## Step 5 — Test each mode

Go through each mode and adjust to your needs.
