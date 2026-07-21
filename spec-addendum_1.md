# ENGLISH ADVENTURE — SPEC ADDENDUM (Technical Decisions)

Append to the main Project Specification. These are confirmed build rules.

> Carried over from the Klasse 9 project, which shares this engine. Rules
> that named the watercolor-journal look have been restated for this
> project's night-map language (see DESIGN-SYSTEM.md); the scope, state
> and performance rules are unchanged.

---

## SCOPE & STATE (confirmed)

- **No backend.** Static site only.
- **No accounts, no login, no per-student data.**
- **No progress-saving** beyond the one case below.
- **No offline mode.** Site assumes live network.
- **localStorage** is used for two things only: the Today's Plan checklist
  (see below) and saved exercise answers / Word Master scores, which feed
  the printable answer sheet. Nothing else persists.

---

## BUILD-IN-STAGES RULE

The full navigation shell is built now. Content is filled in later.

- **Competence pages:** built as empty templates. Routing, back button and
  page styling work; the task area is a placeholder.
- **All four units:** map pins, unit cards and their 7 competence buttons
  are built as working shells (clickable, styled, routed) but lead to
  competence pages that render "coming soon" cards until content lands.
- All learning content (texts, vocab, audio, exercises) is supplied later.
  The build must not block on it.

---

## NAVIGATION

Every drill-down level needs a way back. Required affordances:

- **Competence page → Unit page:** "Back to [Unit]" tab.
- **Unit page → Homepage map:** "Back to Map" tab.
- Back affordances styled as dark-glass pills with a lit rim, matching the
  night-map aesthetic. No browser-style chrome.
- **Swap behaviour:** the router re-renders the whole shell per route, so
  opening a different unit replaces the current one. Panels never stack.

---

## TODAY'S PLAN CHECKLIST

- Each checklist item is **tappable** (toggles checked / unchecked).
- State is saved to **localStorage** and restored on reload.
- State is per-device (shared iPad = shared checklist). Acceptable for a
  daily Lernzeit checklist.
- Checkmarks styled as inline SVG ticks that light up in the view's unit
  tint, not native checkboxes.

---

## ORIENTATION HANDLING (supersedes the landscape-only rule)

Rather than demanding landscape, the site answers both orientations:

1. **PWA manifest** with `"orientation": "any"`, plus theme color and
   home-screen icons, so it can be installed via "Add to Home Screen" and
   launched fullscreen.
2. **Landscape** keeps the authored 3:2 map composition: the stage is the
   largest 3:2 box fitting the viewport, centred on deep water.
3. **Portrait** re-composes the homepage — the map plate becomes a banner,
   pins are hidden (they have no plate to stand on once the layout
   reflows), and the unit cards stack into a scrollable list.

There is no "please turn me sideways" overlay.

---

## VIDEO REQUIREMENTS (animated water, any clips)

All autoplay video elements MUST have ALL of:

- `muted`
- `playsinline`   ← required, or iOS forces native fullscreen player
- `loop`
- `autoplay`
- `preload="auto"`

Format: **MP4 / H.264**. Keep clips short and small for the 60 FPS target.

---

## ASSET / PERFORMANCE NOTES (carried from main spec)

- Images: **WebP** with **PNG** fallback.
- Overlay art (pins, icons, decorations) needs **transparent backgrounds**.
- Animations: **CSS transforms only.** No WebGL, no Three.js, no heavy canvas.
- Glow and light-pool effects are CSS gradients with `mix-blend-mode:
  screen`, not images or canvas.
- Art-style consistency: the homepage map plate is the locked style
  reference. Generate all further assets against it using the master
  prompt in DESIGN-SYSTEM.md to avoid drift between units.
