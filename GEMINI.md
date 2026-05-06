# Project Overview

This project is a modern Vue.js landing page for **Hapugala National College**, refactored from a single-file prototype into a structured, maintainable codebase using Vite and TypeScript.

## Technologies

- **Vue.js 3**: Composition API (Script Setup) for modular logic.
- **Vite**: Ultra-fast build tool and development server.
- **TypeScript**: Ensuring type safety across components and services.
- **CSS3**: Custom fluid typography and responsive design (in `src/assets/base.css`).

## Project Structure

```text
/
├── index.html          # Entry point
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── main.ts         # App initialization
│   ├── App.vue         # Root component
│   ├── assets/
│   │   └── base.css    # Global styles & variables
│   ├── components/     # Modular UI components
│   │   ├── CountdownTimer.vue
│   │   ├── NotifySection.vue
│   │   └── PageFooter.vue
│   └── services/       # Business logic & API calls
│       └── subscription.ts
└── temp.html.bak       # Archived original prototype
```

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Key Components

- **`CountdownTimer.vue`**: Handles the reactive countdown logic and "flip" animations.
- **`NotifySection.vue`**: Manages the email subscription form and success states.
- **`PageFooter.vue`**: Contains contact information and school house representation.

## Development Conventions

- **SFCs**: Use Single File Components (`.vue`) with `<script setup lang="ts">`.
- **Styling**: Global styles and variables are in `base.css`. Component-specific styles can be added within `<style scoped>` if needed, but currently follow the original global pattern.
- **Services**: Keep side effects and API interactions in the `services/` directory.
