# ANA Companion

**Adaptive Neurodivergent Anchor**

> *A personalized smart home environment that co-regulates your nervous system — built for neurodivergent people who live alone.*

---

## What is ANA?

ANA Companion is a personal smart home assistant designed specifically for neurodivergent brains (ADHD, autism, dyslexia). It adapts your home environment — lights, music, TV, temperature — to support your nervous system through daily routines: waking up, focusing, transitioning, and winding down.

Unlike apps that give you lists, ANA changes your **physical environment** to reduce decision fatigue, lower stress, and anchor your routine.

---

## Core Modes

| Mode | Trigger | Environment |
|---|---|---|
| 🌅 Wake Up | 05:30 | Bright light, energizing music, day summary on TV |
| 💼 Focus | Work hours | Warm light, calm music, one task visible |
| 🏠 Coming Home | Arrival | Warm light, decompression music |
| 🌙 Wind Down | 20:30 | Dim warm light, sleep sounds, reflection prompt |
| 😴 Sleep | 21:30 | Lights off, silence |

---

## Tech Stack

- **Smart Home:** Google Home, Matter protocol (Deltaco devices)
- **Displays:** Samsung Smart TV (cast via Chromecast)
- **Sensors:** Temperature + humidity sensor
- **Tasks:** TickTick API
- **Calendar:** Google Calendar API
- **Music:** Spotify Web API
- **News/Research:** RSS feeds + Feedly API
- **Dashboard:** HTML/JavaScript (cast to TV)

---

## Project Structure

```
ana-companion/
├── dashboard/          ← TV dashboard pages
│   ├── morning.html    ← Wake-up mode
│   ├── focus.html      ← Work from home mode
│   ├── evening.html    ← Wind-down mode
│   └── style.css       ← Shared design
├── automations/        ← Google Home / Matter scripts
├── config/             ← Personal config (gitignored)
│   └── config.example.js
├── docs/               ← Setup guides and methodology
└── README.md
```

---

## Status

🚧 **Phase 1: Personal prototype** — Building and testing in Gabi's home in Hallonbergen, Sweden.

---

## Vision

This personal prototype is the foundation of **ANA Companion** — a consulting service that builds personalized smart home environments for neurodivergent people, in collaboration with psychologists and occupational therapists.

---

## License & Intellectual Property

© 2026 Gabriela A. Prando. All Rights Reserved.

This software and all associated concepts, methodologies, and documentation are proprietary. See [LICENSE](./LICENSE) for full terms. Unauthorized use, reproduction, or distribution is strictly prohibited.
