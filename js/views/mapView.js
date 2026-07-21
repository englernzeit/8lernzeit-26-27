/**
 * Homepage map view — the night island.
 *
 * A painted map plate fills the stage; over it sit four glowing pins
 * (one per lit region) and four glass info cards. Pin and card of the
 * same unit are linked: hovering or focusing either lights both, and
 * either one opens the unit.
 *
 * Landscape keeps the authored 3:2 composition (positions come from
 * `pinPos` / `cardPos` in js/data/units.js). Portrait drops the
 * absolute layout: the plate becomes a banner and the cards stack.
 *
 * The map deliberately carries no panel furniture beyond the hero and
 * the quote — the island itself has to stay readable.
 */

import { UNITS } from "../data/units.js";

/** @param {HTMLElement} root */
export function renderMapView(root) {
  root.innerHTML = "";

  const view = document.createElement("div");
  view.className = "view map-view";

  const stage = document.createElement("div");
  stage.className = "map-stage";

  // --- Painted map plate (bottom layer) ---
  const plate = document.createElement("img");
  plate.className = "map-stage__plate";
  plate.src = "assets/map/map-plate.png";
  plate.alt = "Illustrated night island map with four lit regions";
  plate.draggable = false;
  stage.appendChild(plate);

  // --- Vignette: sinks the plate edges into the deep (DS §4) ---
  const vignette = document.createElement("div");
  vignette.className = "map-stage__vignette";
  stage.appendChild(vignette);

  // --- Hero lettering ---
  stage.insertAdjacentHTML(
    "beforeend",
    `<section class="map-hero">
       <p class="map-hero__kicker">Choose your</p>
       <h1 class="map-hero__title">English<br>Adventure</h1>
     </section>`
  );

  // --- Pins + cards, paired per unit ---
  for (const unit of UNITS) {
    const pin = buildPin(unit);
    const card = buildCard(unit);
    linkPair(unit, pin, card);
    stage.append(pin, card);
  }

  // --- Handwritten map quote (bottom-left, under the hero) ---
  stage.insertAdjacentHTML(
    "beforeend",
    `<p class="map-quote">
       Every place has a story.<br>Which one will you start with?
       <img src="assets/svg/typ-005-squiggle.svg" alt="" draggable="false">
     </p>`
  );

  // --- Compass rose ---
  const compass = document.createElement("img");
  compass.className = "map-compass";
  compass.src = "assets/svg/ico-008-compass-rose.svg";
  compass.alt = "";
  compass.draggable = false;
  stage.appendChild(compass);

  view.appendChild(stage);
  root.appendChild(view);
}

/* ================= pieces ====================================== */

/** The glowing numbered pin standing on the unit's region. */
function buildPin(unit) {
  const pin = document.createElement("div");
  pin.className = `map-pin map-pin--u${unit.number}`;
  pin.style.setProperty("--x", `${unit.pinPos.x}%`);
  pin.style.setProperty("--y", `${unit.pinPos.y}%`);
  pin.setAttribute("role", "button");
  pin.tabIndex = 0;
  pin.setAttribute("aria-label", `Open unit ${unit.number}: ${unit.label}`);

  const glow = document.createElement("div");
  glow.className = "map-pin__glow";

  const body = document.createElement("img");
  body.className = "map-pin__body";
  body.src = unit.pin;
  body.alt = "";
  body.draggable = false;

  pin.append(glow, body);
  return pin;
}

/** The glass info card naming the unit. */
function buildCard(unit) {
  const card = document.createElement("article");
  card.className = `unit-card unit-card--u${unit.number}`;
  card.style.setProperty("--x", `${unit.cardPos.x}%`);
  card.style.setProperty("--y", `${unit.cardPos.y}%`);
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open unit ${unit.number}: ${unit.label}`);

  const header = document.createElement("header");
  header.className = "unit-card__head";

  const label = document.createElement("span");
  label.className = "unit-card__label";
  label.textContent = `Unit ${unit.number}`;

  const icon = document.createElement("span");
  icon.className = "unit-card__icon";
  // Absolute URL on purpose: a relative url() inside a custom property
  // resolves against the stylesheet that reads it (css/views/), not the
  // document — which would 404. document.baseURI keeps this correct when
  // the site is hosted under a subpath (e.g. GitHub Pages).
  icon.style.setProperty("--icon", `url("${new URL(unit.icon, document.baseURI).href}")`);

  header.append(label, icon);

  const title = document.createElement("h2");
  title.className = "unit-card__title";
  title.textContent = unit.label;

  const rule = document.createElement("hr");
  rule.className = "unit-card__rule";

  const desc = document.createElement("p");
  desc.className = "unit-card__desc";
  desc.textContent = unit.desc;

  card.append(header, title, rule, desc);
  return card;
}

/**
 * Wire a pin and its card together: both open the unit, and hovering
 * or focusing either one highlights the pair so the link is readable.
 */
function linkPair(unit, pin, card) {
  const open = () => {
    window.location.hash = `/unit/${unit.id}`;
  };
  const setActive = (on) => {
    pin.classList.toggle("is-active", on);
    card.classList.toggle("is-active", on);
  };

  for (const el of [pin, card]) {
    el.addEventListener("click", open);
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    el.addEventListener("pointerenter", () => setActive(true));
    el.addEventListener("pointerleave", () => setActive(false));
    el.addEventListener("focus", () => setActive(true));
    el.addEventListener("blur", () => setActive(false));
  }
}
