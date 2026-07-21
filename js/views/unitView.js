/**
 * Unit view — the 7 competence pages of one unit.
 *
 * A dark stage tinted with the unit's hue, the unit title, and a grid
 * of glass competence cards. The router re-renders the whole shell per
 * route, which guarantees the spec's swap behaviour: panels never stack.
 *
 * Competence icons are inlined (not <img>) so their strokes inherit
 * `currentColor` and pick up the unit tint — see DESIGN-SYSTEM.md §7.
 */

import { getUnit } from "../data/units.js";
import { createBackTab } from "../components/backTab.js";

/**
 * Line-art glyphs for the 7 competences, drawn on a 44×44 grid in the
 * same hand as the map icons (1.4 stroke, round caps, no fill).
 */
const COMPETENCE_ICONS = {
  reading:
    "M22 14c-4-3-10-4-15-3v22c5-1 11 0 15 3M22 14c4-3 10-4 15-3v22c-5-1-11 0-15 3M22 14v22",
  listening:
    "M9 27v-5a13 13 0 0 1 26 0v5M9 26h4v9H9zM35 26h-4v9h4zM13 35a4 4 0 0 1-4 4M31 35a4 4 0 0 0 4 4",
  grammar:
    "M10 14h24M10 21h17M10 28h11M24 31l4 4 8-9",
  writing:
    "M8 36h28M12 30l16-16 4 4-16 16H12zM12 30v4h4M26 16l4 4",
  vocabulary:
    "M14 12h20v18H14zM10 17v19h20M18 18h12M18 23h8",
  speaking:
    "M8 12h20v13H16l-6 5v-5H8zM20 29h16v11h-6l-5 4v-4h-5z",
  revision:
    "M34 22a12 12 0 1 1-4-9M34 11v6h-6M16 22l4 5 9-10",
};

/**
 * @param {HTMLElement} root
 * @param {string} unitId
 */
export function renderUnitView(root, unitId) {
  const unit = getUnit(unitId);
  if (!unit) {
    window.location.hash = "/";
    return;
  }

  root.innerHTML = "";

  const view = document.createElement("div");
  view.className = `view unit-view unit-view--u${unit.number}`;

  view.appendChild(createBackTab("Back to Map", "/"));

  // --- Header ---------------------------------------------------
  const header = document.createElement("header");
  header.className = "unit-view__header";

  const badge = document.createElement("span");
  badge.className = "unit-view__badge";
  badge.textContent = `Unit ${unit.number}`;

  const title = document.createElement("h1");
  title.className = "unit-view__title";
  title.textContent = unit.label;

  header.append(badge, title);

  if (unit.tagline) {
    const tagline = document.createElement("p");
    tagline.className = "unit-view__tagline";
    tagline.textContent = unit.tagline;
    header.appendChild(tagline);
  }

  view.appendChild(header);

  // --- Competence grid ------------------------------------------
  const grid = document.createElement("div");
  grid.className = "unit-view__grid";

  for (const section of unit.sections) {
    grid.appendChild(buildCompetenceCard(unit, section));
  }

  view.appendChild(grid);
  root.appendChild(view);
}

/** One glass card linking to a competence page. */
function buildCompetenceCard(unit, section) {
  const card = document.createElement("button");
  card.className = "comp-card";
  card.setAttribute("aria-label", `Open ${section.label} — ${unit.label}`);

  const path = COMPETENCE_ICONS[section.id];
  if (path) {
    card.insertAdjacentHTML(
      "beforeend",
      `<svg class="comp-card__icon" viewBox="0 0 44 44" aria-hidden="true">
         <path d="${path}" fill="none" stroke="currentColor"
               stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
       </svg>`
    );
  }

  const label = document.createElement("span");
  label.className = "comp-card__label";
  label.textContent = section.label;
  card.appendChild(label);

  card.addEventListener("click", () => {
    window.location.hash = `/unit/${unit.id}/${section.id}`;
  });

  return card;
}
