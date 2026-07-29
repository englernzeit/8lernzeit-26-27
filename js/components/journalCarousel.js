/**
 * Journal carousel — the competence page's card engine.
 *
 * Three motion modes from the approved design (2a):
 *   "stack"  — postcard pile (New words). Top card flies away to the
 *              left, the pile shuffles forward. Loops infinitely.
 *   "slide"  — side slide (Step 1): active card centered, neighbours
 *              parked one card-width away at 50% opacity.
 *   "spread" — journal spread (Steps 2–3): cross-fade with a gentle
 *              drift, only the active card visible.
 *
 * Cinematic pacing: ~1400ms, cubic-bezier(.22,.85,.25,1) — set in
 * css (--journal-motion). Transforms are computed here per offset
 * and applied inline; everything else lives in journal-carousel.css.
 */

const SPEED_MS = 1400;
const EASING = "cubic-bezier(.22,.85,.25,1)";
const TRANSITION = `transform ${SPEED_MS}ms ${EASING}, opacity ${SPEED_MS}ms ease`;

/**
 * @param {{
 *   mode: "stack" | "slide" | "spread",
 *   accent: string,               // accent key, e.g. "coral" — colors the dots
 *   cards: HTMLElement[],
 * }} config
 * @returns {HTMLElement}
 */
export function createJournalCarousel({ mode, accent, cards }) {
  const root = document.createElement("div");
  root.className = `jcar jcar--${mode}`;

  const stage = document.createElement("div");
  stage.className = "jcar__stage";
  root.appendChild(stage);

  const holders = cards.map((card) => {
    const holder = document.createElement("div");
    holder.className = "jcar__holder";
    holder.style.transition = TRANSITION;
    holder.appendChild(card);
    stage.appendChild(holder);
    return holder;
  });

  const n = cards.length;
  let active = 0;
  const wraps = mode === "stack";

  if (n <= 1) {
    if (holders[0]) applyTransform(holders[0], mode, 0, n);
    return root;
  }

  const go = (index) => {
    resetZoom(false); // drop any pinch-zoom on the card we are leaving
    active = wraps ? (index + n) % n : Math.max(0, Math.min(n - 1, index));
    render();
    centerActive(); // keep the new card centred so the page never "jumps"
  };

  // Blob arrows on the stage sides
  const prev = blobArrow("prev", () => go(active - 1));
  const next = blobArrow("next", () => go(active + 1));
  stage.append(prev, next);

  // Numbered dots
  const dotsRow = document.createElement("div");
  dotsRow.className = "jcar__dots";
  const dots = cards.map((_, i) => {
    const dot = document.createElement("button");
    dot.className = `jcar__dot jcar__dot--${accent}`;
    dot.textContent = String(i + 1);
    dot.setAttribute("aria-label", `Card ${i + 1} of ${n}`);
    dot.addEventListener("click", () => go(i));
    dotsRow.appendChild(dot);
    return dot;
  });
  root.appendChild(dotsRow);

  // --- Gestures: swipe between cards + pinch-zoom (and pan) the active card ---
  const pointers = new Map(); // pointerId -> {x, y}
  let startX = null; // single-pointer swipe origin
  let pinchStart = null; // { dist, scale, x, y, mid }
  let gestured = false; // a pinch/pan happened → don't also fire a swipe
  const zoom = { scale: 1, x: 0, y: 0 };

  const cardEl = () => holders[active] && holders[active].firstElementChild;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  function applyZoom(animate) {
    const el = cardEl();
    if (!el) return;
    el.style.transition = animate ? "transform 200ms ease" : "none";
    el.style.transformOrigin = "center center";
    el.style.transform =
      zoom.scale === 1 ? "" : `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`;
    el.style.zIndex = zoom.scale > 1 ? "30" : "";
    el.style.cursor = zoom.scale > 1 ? "grab" : "";
  }
  function resetZoom(animate = true) {
    zoom.scale = 1;
    zoom.x = 0;
    zoom.y = 0;
    applyZoom(animate);
  }
  function clampPan() {
    const el = cardEl();
    if (!el) return;
    const mx = (el.offsetWidth * (zoom.scale - 1)) / 2;
    const my = (el.offsetHeight * (zoom.scale - 1)) / 2;
    zoom.x = Math.max(-mx, Math.min(mx, zoom.x));
    zoom.y = Math.max(-my, Math.min(my, zoom.y));
  }

  // Re-centre the active card in the viewport after a card change, so
  // switching cards never leaves you scrolled onto the wrong place.
  function centerActive() {
    if (typeof window === "undefined" || !stage.scrollIntoView) return;
    requestAnimationFrame(() => {
      const vh = window.innerHeight || 800;
      const block = stage.offsetHeight > vh * 0.92 ? "start" : "center";
      try {
        stage.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
      } catch {
        stage.scrollIntoView();
      }
    });
  }

  stage.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      startX = e.clientX;
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchStart = { dist: dist(a, b) || 1, scale: zoom.scale, x: zoom.x, y: zoom.y, mid: mid(a, b) };
      startX = null; // a second finger cancels any swipe
      gestured = true;
    }
  });

  stage.addEventListener("pointermove", (e) => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    if (pinchStart && pointers.size >= 2) {
      pointers.set(e.pointerId, cur);
      const [a, b] = [...pointers.values()];
      zoom.scale = Math.max(1, Math.min(3.2, pinchStart.scale * (dist(a, b) / pinchStart.dist)));
      const m = mid(a, b);
      zoom.x = pinchStart.x + (m.x - pinchStart.mid.x);
      zoom.y = pinchStart.y + (m.y - pinchStart.mid.y);
      clampPan();
      applyZoom(false);
      e.preventDefault();
      return;
    }
    if (pointers.size === 1 && zoom.scale > 1) {
      zoom.x += cur.x - prev.x;
      zoom.y += cur.y - prev.y;
      clampPan();
      applyZoom(false);
      startX = null; // panning a zoomed card, not swiping
      gestured = true;
    }
    pointers.set(e.pointerId, cur);
  });

  let lastTap = 0;
  function endPointer(e) {
    // double-tap while zoomed → reset
    const now = Date.now();
    if (now - lastTap < 300 && zoom.scale > 1) resetZoom(true);
    lastTap = now;

    // clean single-finger horizontal flick → change card
    if (startX !== null && !gestured && zoom.scale === 1) {
      const dx = e.clientX - startX;
      if (Math.abs(dx) >= 40) {
        startX = null;
        pointers.delete(e.pointerId);
        go(active + (dx < 0 ? 1 : -1));
        return;
      }
    }
    startX = null;
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (pointers.size === 0) {
      if (zoom.scale <= 1.05) resetZoom(true);
      window.setTimeout(() => {
        gestured = false;
      }, 60);
    }
  }
  stage.addEventListener("pointerup", endPointer);
  stage.addEventListener("pointercancel", endPointer);

  function render() {
    holders.forEach((holder, i) => {
      const d = wraps ? (i - active + n) % n : i - active;
      applyTransform(holder, mode, d, n);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("jcar__dot--active", i === active);
    });
    if (!wraps) {
      prev.disabled = active === 0;
      next.disabled = active === n - 1;
    }
    measure();
  }

  // Stage height follows the active card (slide/spread only), so a card
  // is never cut off or padded with empty space. Stack cards are uniform.
  function measure() {
    if (mode === "stack") return;
    const el = holders[active];
    if (el && el.offsetHeight) stage.style.height = `${el.offsetHeight}px`;
  }

  // Keep in sync as fonts/images finish loading or the window resizes
  if (mode !== "stack" && typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => measure());
    holders.forEach((h) => ro.observe(h));
  }
  if (typeof window !== "undefined") {
    window.addEventListener("resize", measure);
  }

  render();
  return root;
}

/**
 * Position a card holder for its offset from the active card.
 * Percentages are of the holder's own width, so the design's px
 * choreography survives responsive card widths.
 *
 * @param {HTMLElement} el
 * @param {"stack" | "slide" | "spread"} mode
 * @param {number} d  offset (stack: 0..n-1, others: signed)
 * @param {number} n  total cards (stack fly-out needs it)
 */
function applyTransform(el, mode, d, n) {
  let transform = "";
  let opacity = 1;
  let z = 1;

  if (mode === "stack") {
    if (d === n - 1 && n > 3) {
      // The card that just left the top flies off to the left
      transform = "translate(-190%, -80px) rotate(-13deg)";
      opacity = 0;
      z = 40;
    } else {
      // 0 on top; deeper cards step up-right, fading out after 2
      const k = Math.min(d, 3);
      transform = `translate(${24 * k}px, ${-13 * k}px) rotate(${d === 0 ? -1.6 : 2.1 * k}deg) scale(${1 - 0.035 * k})`;
      opacity = d > 2 ? 0 : 1;
      z = 30 - d;
    }
  } else if (mode === "slide") {
    transform = `translateX(${d * 109}%) rotate(${d === 0 ? -0.8 : d * 2.6}deg) scale(${d === 0 ? 1 : 0.92})`;
    opacity = Math.abs(d) > 1 ? 0 : d === 0 ? 1 : 0.5;
    z = 10 - Math.abs(d);
  } else {
    transform = `translateX(${d * 9}%) scale(${d === 0 ? 1 : 0.975}) rotate(${d === 0 ? -0.4 : 0}deg)`;
    opacity = d === 0 ? 1 : 0;
    z = d === 0 ? 5 : 1;
  }

  el.style.transform = transform;
  el.style.opacity = String(opacity);
  el.style.zIndex = String(z);
  el.style.pointerEvents = d === 0 ? "auto" : "none";
}

/**
 * @param {"prev" | "next"} dir
 * @param {() => void} onClick
 */
function blobArrow(dir, onClick) {
  const btn = document.createElement("button");
  btn.className = `jcar__arrow jcar__arrow--${dir}`;
  btn.setAttribute("aria-label", dir === "prev" ? "Previous card" : "Next card");
  btn.textContent = dir === "prev" ? "←" : "→";
  btn.addEventListener("click", onClick);
  return btn;
}
