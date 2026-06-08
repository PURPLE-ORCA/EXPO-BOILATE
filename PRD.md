# EXPO-BOILATE — Product Requirements Document

## 1. Overview

**Project Name:** EXPO-BOILATE  
**Type:** Open-source Expo Starter Kit / Boilerplate  
**Target Audience:** React Native developers building production mobile apps with Expo, seeking a pre-wired, opinionated stack with auth, theming, navigation, and backend connectivity out of the box.

**Core Value Proposition:**  
Clone, install dependencies, plug in your Convex backend URL, and start building features immediately. No weeks spent wiring auth, theming, navigation, or keyboard handling.

---

## 2. Goals & Objectives

### Primary Goals
1. Reduce project setup time from days to minutes for Expo + Convex projects
2. Provide a production-grade auth flow (sign-in, sign-up, protected routes)
3. Ship with a clean, scalable folder structure that scales past 50+ screens
4. Demonstrate best practices for the chosen stack without over-abstraction, Clean code

### Secondary Goals
1. Serve as a reference implementation for offline-aware Convex patterns
2. Provide reusable screen templates (empty states, loading, error boundaries)
3. Maintain zero lock-in — any piece can be ripped out and replaced

### Non-Goals
- Not a framework or CLI tool — it's a Git repo you clone
- Not backend-agnostic — Convex is first-class, not pluggable
- Not a UI component library — HeroUI-native is the choice, not custom primitives

---

## 3. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Expo SDK 55 | Core React Native framework |
| **Router** | Expo Router (App Router) | File-based navigation |
| **Styling** | Uniwind (NativeWind v4) | Tailwind CSS for React Native |
| **UI Components** | HeroUI Native | Pre-built accessible components |
| **2D Graphics** | @react-native-skia | Custom animations, charts, splash art |
| **Keyboard** | react-native-keyboard-controller | Smooth keyboard transitions |
| **Navigation** | @react-navigation/native | Underlying navigation primitives |
| **Backend** | Convex | Real-time database + serverless functions |
| **Auth** | convex-auth + @convex-dev/auth | Authentication system |
| **Lint/Format** | @biome/biome | Fast linting and formatting |
| **State** | Zustand | Lightweight client state |
| **Storage** | MMKV | Fast local storage |

---

## 4. Architecture

### 4.1 Folder Structure

```
EXPO-BOILATE/
├── app/                          # Expo Router file-based routes
│   ├── api/                      # Convex generated types
│   ├── (auth)/                   # Auth group (no bottom tabs)
│   │   ├── login/
│   │   |    ├── page.tsx
│   ├── (tabs)/                    # Main app group (protected, with tabs)
│   │   ├── _layout.tsx           # Tab layout + auth guard
│   │   ├── index.tsx             # Dashboard / Home
│   │   ├── profile/
│   │   │   └── index.tsx
│   ├── _layout.tsx               # Root layout (providers, theme, auth state)
│   └── +not-found.tsx            # 404 screen
│
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # HeroUI-native wrappers
│   │   ├── layout/                   # HeroUI-native wrappers
│   │   ├── animations/            
│   │   ├── screens/
│   │       ├── home/
│   │   └── helpers/              # Custom helpers components
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useTheme.ts
│   │
│   ├── lib/                      # Utilities & configurations
│   │
│   ├── stores/                   # Zustand stores
│   │
│   ├── types/                    # TypeScript types
│   │   ├── auth.ts
│   │   └── navigation.ts
│   │
│   └── constants/                # App constants
│       ├── colors.ts
│       └── config.ts
│
├── assets/                       # Images, fonts, icons
├── .env.example                  # Environment variables template
├── biome.json                    # Biome configuration
├── tsconfig.json
└── package.json
```

### 4.2 Navigation Architecture

- **Root Layout** (`app/_layout.tsx`): Wraps entire app with providers (Convex, Auth, Theme, KeyboardController)
- **Auth Group** (`app/(auth)/`): Unauthenticated routes, no tab bar, slide transitions
- **App Group** (`app/(app)/`): Authenticated routes, bottom tab navigator, auth guard middleware
- **Protected Route Pattern**: Each `(app)` route checks auth state; unauthenticated users redirected to `/(auth)/sign-in`

### 4.3 Auth Flow

```
[App Launch]
    ↓
[Check Auth State] ──No──→ [auth screen]
    │                          ↓
   Yes                    
    ↓                     
[App Group (Tabs)]
    ↓
[Dashboard / Home]
```

**Auth States:**
- `loading` — Checking stored session
- `unauthenticated` — Show auth screens
- `authenticated` — Show app screens, Convex client authenticated

---

## 8. Development Workflow

### 8.1 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/yourname/expo-boilate.git

# 2. Install dependencies
bun install

# 3. Configure environment
cp .env.example .env
# Edit .env with your Convex URL

# 4. Start Convex dev server
npx convex dev

# 5. Start Expo
npx expo start
```

### 8.2 Code Quality (Biome)

```json
// biome.json
{
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": { "recommended": true }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab",
    "lineWidth": 100
  }
}
```

**Scripts:**
```json
{
  "lint": "biome check .",
  "lint:fix": "biome check --apply .",
  "format": "biome format --write ."
}
```

---

## 9. Performance Requirements

- App launch to interactive: < 3 seconds on mid-tier Android
- Auth state check: < 500ms (MMKV read)
- Navigation transitions: 60fps, no jank
- Keyboard transitions: smooth, no layout jumps
- Bundle size: < 15MB APK baseline

---

## 10. Security Considerations

- No secrets in client code — all sensitive config in `.env`
- Auth tokens stored securely via Convex auth session management
- Deep linking URLs validated before processing
- No debug logging in production builds

---

## 11. Release Criteria

### MVP Ready When:
- [ ] Clone → install → run works in under 5 minutes
- [ ] Auth flow functional end-to-end
- [ ] Protected routes correctly gate access
- [ ] Theme toggle works across all screens
- [ ] Biome passes with zero errors
- [ ] README has clear setup instructions

### v1.0 Ready When:
- [ ] Skia splash animation implemented
- [ ] Error boundaries on all routes
- [ ] Screen templates (empty, loading, error) included
- [ ] Example Convex queries/mutations demonstrated
- [ ] Tested on iOS and Android physical devices
---

*Document Version: 1.0*  
*Last Updated: 2026-05-11*  
*Author: PURPLE ORCA*
