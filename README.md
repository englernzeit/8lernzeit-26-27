# English Adventure — Lernzeit 26/27, Klasse 8

Static English-learning site with a **night-island map** aesthetic, built
for iPad. A homepage map of a lit island leads to 4 unit regions; each
opens 7 competence pages (Reading, Listening, Grammar, Writing,
Vocabulary, Speaking, Revision).

Per the build-in-stages rule in `spec-addendum_1.md`: the **navigation
shell is complete, all page content is intentionally empty** and will be
supplied later.

**Visual language is locked in [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** —
palette, night/glass materials, pins, buttons, shadows vs. glow, motion,
map and typography rules, plus the master prompt for generating assets.
CSS tokens in [css/tokens.css](css/tokens.css) mirror it 1:1.

## Relationship to the Klasse 9 project

This project shares its **engine** with
[`9_lernzeit_26-27`](../9_lernzeit_26-27) (router, view structure,
exercise components, PDF answer sheet, stores) but has a **completely
different visual language and setting**: that one is a watercolor
traveller's journal, this one is a lit island at night.

Nothing visual should be copied between them. When touching shared
component CSS, check it still obeys this project's DESIGN-SYSTEM.md.

## The four units

| # | Unit | Region on the map | Hue |
|---|---|---|---|
| 1 | In New York City | neon skyline headland | violet `#A46CF5` |
| 2 | The best days of your life | school village on the ridge | amber `#F5B94A` |
| 3 | On the road to California | coastal highway | blue `#5FB4F5` |
| 4 | Stories from the Deep South | bayou swamp | green `#5AD98F` |

## Tech decisions

- **Vanilla ES6 modules, no React / no build step.** The site is static,
  animation must be CSS-transforms-only at 60 FPS on iPad, and the app is
  three small views over a hash router — a framework adds weight without
  benefit here. No TypeScript, no backend (per spec).
- **Hash routing** (`#/unit/:id/:sectionId`) so plain static hosting works
  with no server rewrites.
- **localStorage** is used for two things: the Today's Plan checklist
  (`js/state/checklistStore.js`) and saved exercise answers /
  Word Master scores (`js/state/answersStore.js`). Nothing else persists,
  and there are no accounts.
- **Responsive orientations.** Landscape keeps the authored 3:2 map
  composition (pin and card positions in `js/data/units.js` are tuned
  against the plate art). Portrait re-composes it: the plate becomes a
  banner, pins are hidden, unit cards stack. The PWA manifest uses
  `"orientation": "any"`.
- **Sizing in `cqw`.** Everything on the map stage is sized in container
  query units, so the composition scales as one picture and pins stay
  glued to their region at every screen size.

## Structure

```
index.html              App shell: #app mount, font links, manifest
manifest.webmanifest    PWA: fullscreen, icons
favicon.svg             Glowing map pin
css/
  main.css              Import hub (tokens → base → layout → components → views)
  tokens.css            Design tokens — NATIVE (night) + BRIDGE (legacy names)
  base.css              Reset + element defaults
  layout.css            App shell / view containers
  fonts.css             Bundled Caveat face
  components/           back-tab, checklist, journal-carousel, exercises,
                        wordmaster, picturevocab
  views/                map, unit, section
js/
  app.js                Entry point: registers routes
  router.js             Minimal hash router
  data/units.js         Unit/section config — single source of truth for nav
  data/todaysPlan.js    Checklist items
  data/competences/     Per-page lesson content (empty registry for now)
  state/                checklistStore, answersStore (the localStorage users)
  views/                mapView, unitView, sectionView (render functions)
  components/           backTab, checklist, journalCarousel, exercises,
                        wordMaster, pictureVocab
  utils/                pdf.js (answer sheet), video.js (autoplay factory)
assets/
  map/    map-plate.png — the painted night island
  svg/    pins, unit icons, compass, squiggle
  fonts/  caveat.woff2
  images/ icons/ audio/ video/  (empty, for lesson assets)
```

## Running

No build step. Serve the folder with any static server, e.g.:

```
npx serve .
```

(Opening `index.html` via `file://` won't work — ES6 modules require HTTP.)

## Adding content

- **A competence page** → write a module in `js/data/competences/` that
  default-exports the content object, then register it in
  `js/data/competences/index.js` under `"<unitId>/<sectionId>"`. Ids come
  from `js/data/units.js`. Unregistered pages render "coming soon" cards
  automatically — the build never blocks on missing content.
- **Unit names, taglines, map positions** → `js/data/units.js`. Move a
  unit's `pinPos` and `cardPos` together, and re-check on 1440×960 that
  the card does not cover its own pin.
- **Checklist items** → `js/data/todaysPlan.js`.
- **Assets** → follow the master prompt in DESIGN-SYSTEM.md so new art
  matches the plate; images WebP with PNG fallback, transparent
  backgrounds for overlays; video MP4/H.264, short loops.
