/**
 * Competence page — watercolor travel-journal design (handoff 2a).
 *
 * Structure (top to bottom):
 *   header  — back sticky note · title plaque · Name + round PDF badge
 *   New words — postcard-stack carousel, loops infinitely
 *   Step 1  — side-slide carousel (LE: pictures + German help)
 *   Step 2  — journal-spread carousel (G-Kurs)
 *   Step 3  — journal-spread carousel (E-Kurs)
 *   Step 4  — single Check-out card with self-check boxes
 *
 * Content comes from js/data/competences; pages without content yet
 * render the same chrome with a "coming soon" card per step.
 * Striped areas are placeholders for watercolor illustrations.
 */

import { getUnit, getSection } from "../data/units.js";
import { getCompetenceContent, unitHasPictureVocab } from "../data/competences/index.js";
import { createBackTab } from "../components/backTab.js";
import { createJournalCarousel } from "../components/journalCarousel.js";
import {
  createGlossaryText,
  createMultipleChoice,
  createCommentQuiz,
  createRightWrong,
  createGroupSort,
  createSentenceBuild,
  createGame,
  createProfileBuilder,
  createGapFill,
  createAudioPlayer,
  createImageMatch,
  createEventOrder,
  createInlineChoice,
  createCaptionBuilder,
  createPhraseReference,
  createMatchUp,
  createTapMatch,
  createArgumentPick,
  createParagraphBuilder,
  createEssayEditor,
  createDialogueWrite,
  createEmailBuilder,
  createEmailFixer,
  createSpotFix,
  createPosterBuilder,
  createComicStrip,
  createBilingualCard,
  createSignMaker,
  createBilingualPoster,
  createComicSpeech,
  createStoryMaker,
  createCommentLab,
  createCommentThread,
  createCommentFill,
  createDispatchGame,
  createSubwayGame,
  createBridgeGame,
  createCallGame,
  createQuizShowGame,
} from "../components/exercises.js";
import {
  getName,
  setName,
  getAnswers,
  setAnswer,
  getWordMasterScore,
  setWordMasterScore,
} from "../state/answersStore.js";
import { createWordMaster } from "../components/wordMaster.js";
import { createPictureVocab } from "../components/pictureVocab.js";
import { buildAnswerSheetPdf, downloadPdf } from "../utils/pdf.js";

/** The six fields of the Step 4 "dream profile" builder, in PDF order. */
const PROFILE_FIELDS = ["username", "bio", "post1", "post2", "post3", "nevershare"];
const PROFILE_LABELS = {
  username: "Username",
  bio: "Bio",
  post1: "Post 1",
  post2: "Post 2",
  post3: "Post 3",
  nevershare: "Never share",
};

/** The two fields of the "Sell It!" caption builder, in PDF order. */
const CAPTION_FIELDS = ["product", "caption"];
const CAPTION_LABELS = { product: "Product", caption: "Instagram caption" };

/** The six parts of the official-email builder, in PDF order. */
const EMAIL_FIELDS = ["subject", "dear", "reason", "q1", "q2", "name"];
const EMAIL_LABELS = {
  subject: "Subject",
  dear: "Dear …",
  reason: "I am writing because …",
  q1: "Could you please tell me …?",
  q2: "Could you also tell me …?",
  name: "Full name",
};

/** The corrected-email fields of the "Fix the email" task, in PDF order. */
const FIXER_FIELDS = ["subject", "body"];
const FIXER_LABELS = { subject: "Subject", body: "Corrected email" };

/** Saved answers whose keys start with `${base}-`, re-keyed without the
 * prefix (e.g. { "step4-task1-comic-p0-cap": "x" } → { "p0-cap": "x" }). */
function prefix(saved, base) {
  const out = {};
  const p = `${base}-`;
  for (const [k, v] of Object.entries(saved)) {
    if (k.startsWith(p)) out[k.slice(p.length)] = v;
  }
  return out;
}

/** The six lines of the safety-poster builder, in PDF order. */
const POSTER_FIELDS = ["headline", "subhead", "tip1", "tip2", "tip3", "emergency"];
const POSTER_LABELS = {
  headline: "Headline",
  subhead: "Subheading",
  tip1: "Tip 1",
  tip2: "Tip 2",
  tip3: "Tip 3",
  emergency: "Emergency line",
};

/** Fallback shape for pages whose lesson content is not written yet. */
function comingSoonContent() {
  const card = (kind) => ({
    kind,
    title: "Coming soon…",
    intro: "This task is being prepared.",
    lines: [],
    help: "",
  });
  return {
    newWords: null,
    steps: [
      { step: 1, subtitle: "LE", accent: "coral", layout: "slide", cards: [card("Lesen · Text")] },
      { step: 2, subtitle: "G-Kurs", accent: "olive", layout: "spread", cards: [card("Aufgabe")] },
      { step: 3, subtitle: "E-Kurs", accent: "slate", layout: "spread", cards: [card("Aufgabe")] },
      { step: 4, subtitle: "Check-out", accent: "ochre", layout: "single", cards: [{ ...card("Check-out · Selbstcheck"), checklist: true }] },
    ],
  };
}

/**
 * @param {HTMLElement} root
 * @param {string} unitId
 * @param {string} sectionId
 */
export function renderSectionView(root, unitId, sectionId) {
  const unit = getUnit(unitId);
  const section = getSection(unitId, sectionId);
  if (!unit || !section) {
    window.location.hash = "/";
    return;
  }

  const content = getCompetenceContent(unitId, sectionId) ?? comingSoonContent();

  root.innerHTML = "";

  // A field focused on the previous page may not fire focusout when its view is
  // torn down, which would leave the keyboard freeze stuck on. Clear it so the
  // new page measures --app-vh normally.
  keyboardOpen = false;

  const view = document.createElement("div");
  view.className = "view journal";
  view.dataset.section = sectionId; // lets CSS target one competence page

  // --- Header ---------------------------------------------------
  const header = document.createElement("header");
  header.className = "journal__header";

  header.appendChild(createBackTab("Back", `/unit/${unit.id}`));

  const plaque = document.createElement("div");
  plaque.className = "journal__plaque";
  const title = document.createElement("h1");
  title.className = "journal__title";
  title.textContent = content.title ?? section.label;
  const subtitle = document.createElement("p");
  subtitle.className = "journal__subtitle";
  subtitle.textContent = `${unit.label}${unit.tagline ? ` · ${unit.tagline}` : ""}`;
  plaque.append(title, subtitle);
  header.appendChild(plaque);

  header.appendChild(buildNamePdfCluster(view, unit, section, content));

  view.appendChild(header);

  const ctx = { unitId, sectionId };

  // --- Vocabulary hub (Picture Vocabulary + Word Master) ---------
  // Sits directly under the PDF button, top-right. Word Master is only
  // offered in units that have picture vocabulary.
  const hasPicture = content.pictureVocab?.courses?.some((c) => (c.count ?? c.cards?.length ?? 0) > 0);
  const showWordMaster =
    Boolean(content.wordMaster?.courses?.some((c) => c.items?.length)) && unitHasPictureVocab(unitId);
  if (hasPicture || showWordMaster) {
    view.appendChild(buildVocabHub(content, ctx, { showWordMaster }));
  }

  // --- Reading passage (optional) --------------------------------
  if (content.passage) {
    view.appendChild(buildPassage(content.passage));
  }

  // --- Grammar guide (optional) ----------------------------------
  if (content.guide) {
    view.appendChild(buildGuideSection(content.guide));
  }

  // --- Steps ------------------------------------------------------
  for (const step of content.steps) {
    view.appendChild(buildStepSection(step, ctx));
  }

  root.appendChild(view);

  // Full-screen vertical pager on every competence page: group the intro
  // (header + vocab hub + theory) into one "cover" page, then shrink any
  // over-full page so a single swipe up lands cleanly on the next full screen.
  if (content.steps && content.steps.length) {
    buildCoverPage(view);
    const pager = buildVerticalPager(view);
    fitUniformCards(view, pager);
  }
}

/**
 * Fold the page intro into one full-screen cover: the header (title, name,
 * PDF), the vocabulary hub and the theory/guide all sit on screen 0, so a
 * swipe up moves to Step 1. Everything before the first carousel becomes the
 * cover; the fit layer lets it be scaled to fit one screen (see fitUniformCards).
 * @param {HTMLElement} view
 */
function buildCoverPage(view) {
  const kids = [...view.children];
  const firstStep = kids.find((el) => el.querySelector && el.querySelector(".jcar"));
  if (!firstStep) return;
  const cover = document.createElement("section");
  cover.className = "journal__cover";
  const fit = document.createElement("div");
  fit.className = "journal__cover-fit";
  cover.appendChild(fit);
  for (const el of kids) {
    if (el === firstStep) break;
    fit.appendChild(el); // moves header/vocab/guide out of the view into the cover
  }
  view.insertBefore(cover, firstStep);
}

/**
 * The vertical page navigator — the *same* mechanic as the card carousel, but
 * up/down. Each screen (cover + one per Step) is a page; a single vertical
 * swipe animates exactly one page into place with a CSS transform (no native
 * scroll-snap, which felt loose). Horizontal swipes still reach the card
 * carousel (we only act on a clearly vertical gesture); a page taller than the
 * screen — the Step-4 game — is allowed to scroll natively, and you flip off it
 * once it's scrolled to the edge. Returns a handle with { sync } for the fitter.
 * @param {HTMLElement} view
 */
/**
 * True while a text field is focused (the on-screen keyboard is up). Module-
 * level on purpose: buildVerticalPager / fitUniformCards add window listeners
 * on every route change and never remove them, so stale listeners from earlier
 * pages keep firing. A per-pager flag wouldn't stop those; a shared one does —
 * and updateAppVh honours it, so no listener can shrink --app-vh (and every
 * card with it) while the keyboard is animating in. Reset on each render.
 */
let keyboardOpen = false;

/**
 * Publish the real viewport height as `--app-vh` (px). The whole pager is
 * built on full-screen pages; relying on the CSS `svh` unit alone is not
 * robust on iPad Safari (heights come out wrong, so cards don't scale and
 * overflow). A measured px value keeps clientHeight — and therefore the
 * shrink-to-fit pass — correct everywhere. Uses the layout viewport
 * (window.innerHeight), which is stable under pinch-zoom.
 */
function updateAppVh() {
  if (typeof window === "undefined") return;
  // Never re-measure under the keyboard: iPad shrinks innerHeight then, and
  // baking that in would shrink --card-h and shift every card up.
  if (keyboardOpen) return;
  const h = window.innerHeight || 800;
  document.documentElement.style.setProperty("--app-vh", `${h}px`);
}

function buildVerticalPager(view) {
  const pages = [...view.children].filter(
    (el) => el.classList.contains("journal__cover") || el.classList.contains("journal__section"),
  );
  if (pages.length < 2) return null;
  updateAppVh();

  const pager = document.createElement("div");
  pager.className = "rpager";
  const track = document.createElement("div");
  track.className = "rpager__track";
  pages.forEach((p) => {
    p.classList.add("rpager__page");
    track.appendChild(p);
  });
  pager.appendChild(track);

  const rail = document.createElement("div");
  rail.className = "rpager__rail";
  const dots = pages.map((_, i) => {
    const d = document.createElement("button");
    d.className = "rpager__dot";
    d.setAttribute("aria-label", `Screen ${i + 1} of ${pages.length}`);
    d.addEventListener("click", () => go(i));
    rail.appendChild(d);
    return d;
  });
  pager.appendChild(rail);

  // "Scroll for more" cue for the one scrollable page (the Step-4 game). On a
  // computer the hidden scrollbar gave no hint that the card continued below;
  // this chevron shows while there is more to scroll and fades at the bottom.
  const moreHint = document.createElement("div");
  moreHint.className = "rpager__more";
  moreHint.setAttribute("aria-hidden", "true");
  moreHint.innerHTML = "<span>more</span>⌄";
  pager.appendChild(moreHint);

  view.appendChild(pager);

  const n = pages.length;
  let active = 0;
  track.style.transition = "transform 620ms cubic-bezier(.22,.85,.25,1)";

  function updateMore() {
    const p = pages[active];
    const scrollable = p.classList.contains("rpager__page--scroll");
    const atBottom = p.scrollTop + p.clientHeight >= p.scrollHeight - 8;
    moreHint.classList.toggle("rpager__more--on", scrollable && !atBottom);
  }

  function render() {
    // Translate by an exact pixel multiple of the measured viewport height —
    // the pages are sized by --app-vh (= innerHeight), so this lines each page
    // up precisely. (A CSS calc() on the var proved unreliable across engines.)
    const vh = window.innerHeight || 800;
    track.style.transform = `translateY(-${active * vh}px)`;
    dots.forEach((d, i) => d.classList.toggle("rpager__dot--on", i === active));
    pages.forEach((p, i) => (p.style.visibility = Math.abs(i - active) > 1 ? "hidden" : "visible"));
    updateMore();
  }
  function go(i) {
    const next = Math.max(0, Math.min(n - 1, i));
    if (next === active) return;
    active = next;
    render();
    // reveal a freshly-entered scrollable page from its top
    pages[active].scrollTop = 0;
  }

  // Keep the "more" cue in step with scrolling on the scrollable page.
  pages.forEach((p) => {
    let raf = 0;
    p.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(updateMore);
      },
      { passive: true },
    );
  });

  // A page taller than the screen (the game) scrolls natively; the fit pages
  // don't, so every vertical swipe over them flips the page. Keep touch-action
  // in sync so the browser only ever pans the pages that can actually scroll.
  function sync() {
    pages.forEach((p) => {
      // A page truly scrolls only if its own overflow allows it AND its
      // content is taller than the screen. (Fit-scaled pages keep their tall
      // layout height under a transform, so scrollHeight alone would lie.)
      const oy = getComputedStyle(p).overflowY;
      const scrollable = oy !== "hidden" && oy !== "visible" && p.scrollHeight - p.clientHeight > 4;
      p.style.touchAction = scrollable ? "pan-y pinch-zoom" : "pinch-zoom";
      p.classList.toggle("rpager__page--scroll", scrollable);
    });
    updateMore();
  }

  // A vertical swipe flips one page — but only if a scrollable page (the game)
  // is at the relevant edge; otherwise the drag scrolls it. Returns true if it
  // flipped. Kept in one place so pointermove/up/cancel all agree.
  function tryFlip(dx, dy, sp) {
    if (!sp || Math.abs(dy) < 50 || Math.abs(dy) <= Math.abs(dx)) return false;
    const scrollable = sp.classList.contains("rpager__page--scroll");
    if (dy < 0) {
      if (!scrollable || sp.scrollTop + sp.clientHeight >= sp.scrollHeight - 4) {
        go(active + 1);
        return true;
      }
    } else if (!scrollable || sp.scrollTop <= 4) {
      go(active - 1);
      return true;
    }
    return false;
  }

  let sx = null;
  let sy = null;
  let lastX = null;
  let lastY = null;
  let sp = null;
  let decided = false;
  pager.addEventListener("pointerdown", (e) => {
    if (!e.isPrimary) {
      sx = sy = null;
      return;
    }
    sx = lastX = e.clientX;
    sy = lastY = e.clientY;
    sp = pages[active];
    decided = false;
  });
  // Flip as soon as the gesture is clearly a vertical swipe — this fires before
  // a scrollable page's overscroll can cancel the pointer, so Step-4 → Step-3
  // (drag down at the top of the game) works reliably.
  pager.addEventListener("pointermove", (e) => {
    if (!e.isPrimary || sy === null || decided) return;
    lastX = e.clientX;
    lastY = e.clientY;
    decided = tryFlip(e.clientX - sx, e.clientY - sy, sp);
  });
  pager.addEventListener("pointerup", (e) => {
    if (!e.isPrimary || sy === null) return;
    if (!decided) tryFlip(e.clientX - sx, e.clientY - sy, sp);
    sx = sy = null;
  });
  // Overscroll on a scrollable page cancels the pointer — salvage the gesture
  // from the last position we saw so a page still flips.
  pager.addEventListener("pointercancel", () => {
    if (sy !== null && !decided) tryFlip(lastX - sx, lastY - sy, sp);
    sx = sy = null;
  });

  // Wheel (desktop / trackpad): flip one page, unless the active page still has
  // room to scroll in that direction.
  let wheelLock = 0;
  pager.addEventListener(
    "wheel",
    (e) => {
      const p = pages[active];
      if (p.classList.contains("rpager__page--scroll")) {
        if (e.deltaY > 0 && p.scrollTop + p.clientHeight < p.scrollHeight - 4) return;
        if (e.deltaY < 0 && p.scrollTop > 4) return;
      }
      e.preventDefault();
      const now = Date.now();
      if (now < wheelLock) return;
      wheelLock = now + 650;
      go(active + (e.deltaY > 0 ? 1 : -1));
    },
    { passive: false },
  );

  // Keyboard
  view.tabIndex = 0;
  view.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      go(active - 1);
    }
  });

  render();
  // While a text field is focused, the on-screen keyboard shrinks the viewport
  // and iPad Safari fires resize / visualViewport-resize events. Re-measuring
  // --app-vh and re-fitting the cards then would rescale every page and jump it
  // to a new offset mid-typing — so freeze the layout while a field is focused
  // (module-level keyboardOpen, honoured by updateAppVh and fitUniformCards),
  // and restore it once the keyboard has closed.
  if (typeof window !== "undefined") {
    const isField = (el) => {
      if (!el) return false;
      const t = el.tagName;
      return t === "INPUT" || t === "TEXTAREA" || t === "SELECT" || el.isContentEditable;
    };

    // Keep --app-vh (and the page geometry that depends on it) in step with the
    // real viewport — orientation flips and the iPad toolbar showing/hiding.
    const onViewport = () => {
      // Don't relayout under the keyboard (see above) …
      if (keyboardOpen) return;
      // … or during a pinch-zoom: iPad Safari fires visualViewport "resize"
      // continuously then, and re-laying-out mid-gesture makes it jitter. Only
      // react to real viewport changes (orientation flip, toolbar), at scale 1.
      if (window.visualViewport && window.visualViewport.scale > 1.01) return;
      updateAppVh();
      render();
      sync();
    };
    window.addEventListener("resize", onViewport);
    window.addEventListener("orientationchange", onViewport);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", onViewport);

    view.addEventListener("focusin", (e) => {
      if (isField(e.target)) keyboardOpen = true;
    });
    view.addEventListener("focusout", (e) => {
      if (!isField(e.target)) return;
      keyboardOpen = false;
      // The keyboard animates away asynchronously: iOS restores the viewport
      // height and undoes its scroll only a few hundred ms later. A single
      // reset would fire mid-animation and bake a too-short --app-vh into every
      // card (they'd stay a bit high). So pin the scroll to the top and re-lay
      // everything out (pager geometry + card fit, via a synthetic resize) on a
      // short loop until innerHeight has been stable for two ticks — then stop.
      let ticks = 0;
      let lastH = -1;
      let stable = 0;
      const settle = () => {
        if (keyboardOpen) return; // another field took focus — stay frozen
        window.scrollTo(0, 0);
        if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
        const h = window.innerHeight || 0;
        if (h === lastH) stable += 1;
        else {
          stable = 0;
          lastH = h;
        }
        // Re-runs onViewport (updateAppVh + render + sync) and fitUniformCards.
        window.dispatchEvent(new Event("resize"));
        ticks += 1;
        if (stable < 2 && ticks < 14) setTimeout(settle, 90);
      };
      // Defer the first pass so a follow-up focus (tabbing to the next field)
      // can re-arm the freeze before we start resetting anything.
      setTimeout(settle, 80);
    });
  }
  return { sync, go, isKeyboardOpen: () => keyboardOpen };
}

/* ================= reading passage ============================= */

/** @param {{title: string, lead?: string[], tipsTitle?: string, tips?: string[], closing?: string[]}} passage */
function buildPassage(passage) {
  const section = document.createElement("section");
  section.className = "journal__section";

  const article = document.createElement("article");
  article.className = "journal-passage";

  const h = document.createElement("h2");
  h.className = "journal-passage__title";
  h.textContent = passage.title;
  article.appendChild(h);

  (passage.lead ?? []).forEach((para, i) => {
    const p = document.createElement("p");
    p.className = "journal-passage__para";
    if (i === 0) p.classList.add("journal-passage__para--lead");
    p.textContent = para;
    article.appendChild(p);
  });

  if (passage.tips?.length) {
    if (passage.tipsTitle) {
      const th = document.createElement("h3");
      th.className = "journal-passage__subhead";
      th.textContent = passage.tipsTitle;
      article.appendChild(th);
    }
    const ol = document.createElement("ol");
    ol.className = "journal-passage__tips";
    for (const tip of passage.tips) {
      const li = document.createElement("li");
      li.className = "journal-passage__tip";
      const num = document.createElement("span");
      num.className = "journal-passage__tip-num";
      li.appendChild(num);
      const span = document.createElement("span");
      span.textContent = tip;
      li.appendChild(span);
      ol.appendChild(li);
    }
    article.appendChild(ol);
  }

  (passage.closing ?? []).forEach((para) => {
    const p = document.createElement("p");
    p.className = "journal-passage__para";
    p.textContent = para;
    article.appendChild(p);
  });

  section.appendChild(article);
  return section;
}

/* ================= header: Name + PDF ========================== */

/**
 * @param {HTMLElement} view
 * @param {object} unit
 * @param {object} section
 * @param {object} content
 */
function buildNamePdfCluster(view, unit, section, content) {
  const cluster = document.createElement("div");
  cluster.className = "journal__id-cluster";

  const nameTag = document.createElement("label");
  nameTag.className = "journal__nametag";
  const caption = document.createElement("span");
  caption.className = "journal__nametag-caption";
  caption.textContent = "Name:";
  const input = document.createElement("input");
  input.className = "journal__nametag-input";
  input.type = "text";
  input.maxLength = 60;
  input.autocomplete = "name";
  input.value = getName();
  nameTag.append(caption, input);

  const pdf = document.createElement("button");
  pdf.className = "journal__pdf-badge";
  pdf.textContent = "PDF";
  pdf.setAttribute("aria-label", "Download your answers as a PDF");

  const hint = document.createElement("span");
  hint.className = "journal__pdf-hint";
  hint.textContent = "Please enter your name first!";

  input.addEventListener("input", () => {
    setName(input.value);
    input.classList.remove("journal__nametag-input--missing");
    hint.classList.remove("journal__pdf-hint--show");
  });

  pdf.addEventListener("click", () => {
    const name = input.value.trim();
    if (!name) {
      input.classList.add("journal__nametag-input--missing");
      hint.classList.add("journal__pdf-hint--show");
      input.focus();
      return;
    }
    downloadAnswerSheet(view, unit, section, content, name);
  });

  cluster.append(nameTag, pdf, hint);
  return cluster;
}

/**
 * @param {HTMLElement} view
 * @param {object} unit
 * @param {object} section
 * @param {object} content
 * @param {string} name
 */
function downloadAnswerSheet(view, unit, section, content, name) {
  const answers = getAnswers(unit.id, section.id);
  for (const el of view.querySelectorAll("[data-answer-key]")) {
    const value = /** @type {HTMLInputElement} */ (el).value ?? el.textContent;
    if (value && value.trim()) answers[el.dataset.answerKey] = value;
  }

  // Only written / sentence-starter cards contribute to the PDF;
  // text, games and self-checking exercises are done in-app.
  const steps = content.steps
    .map((s) => ({
      heading: `Step ${s.step} — ${s.subtitle}`,
      items: s.cards.flatMap((card, i) => {
        const base = `step${s.step}-task${i + 1}`;
        if (card.type === "profile-builder") {
          return PROFILE_FIELDS.map((f) => ({
            label: `${card.title} — ${PROFILE_LABELS[f]}`,
            answer: answers[`${base}-profile-${f}`] ?? "",
          }));
        }
        if (card.type === "caption-builder") {
          return CAPTION_FIELDS.map((f) => ({
            label: `${card.title} — ${CAPTION_LABELS[f]}`,
            answer: answers[`${base}-caption-${f}`] ?? "",
          }));
        }
        if (card.type === "email-builder") {
          return EMAIL_FIELDS.map((f) => ({
            label: `${card.title} — ${EMAIL_LABELS[f]}`,
            answer: answers[`${base}-email-${f}`] ?? "",
          }));
        }
        if (card.type === "email-fixer") {
          return FIXER_FIELDS.map((f) => ({
            label: `${card.title} — ${FIXER_LABELS[f]}`,
            answer: answers[`${base}-fix-${f}`] ?? "",
          }));
        }
        if (card.type === "poster-builder") {
          return POSTER_FIELDS.map((f) => ({
            label: `${card.title} — ${POSTER_LABELS[f]}`,
            answer: answers[`${base}-poster-${f}`] ?? "",
          }));
        }
        if (card.type === "comic-strip") {
          return card.panels.flatMap((panel, k) => [
            { label: `${card.title} — Panel ${panel.n ?? k + 1} caption`, answer: answers[`${base}-comic-p${k}-cap`] ?? "" },
            { label: `${card.title} — Panel ${panel.n ?? k + 1} speech`, answer: answers[`${base}-comic-p${k}-bubble`] ?? "" },
          ]);
        }
        if (card.type === "comic-speech") {
          return card.panels.flatMap((panel, k) =>
            (panel.bubbles ?? []).map((_, j) => ({
              label: `${card.title} — Panel ${panel.n ?? k + 1}, bubble ${j + 1}`,
              answer: answers[`${base}-comicx-p${k}-b${j}`] ?? "",
            })),
          );
        }
        if (card.type === "multiple-choice" && card.lineRef) {
          // The self-check ran in-app; the sheet prints only the learner's
          // line-number evidence (never validated, teacher checks it).
          const refs = card.questions
            .map((q, k) => {
              const v = (answers[`${base}-line${k + 1}`] ?? "").trim();
              return v ? `${k + 1} → Zeile ${v}` : null;
            })
            .filter(Boolean);
          return refs.length
            ? [{ label: `${card.title} — Beweis-Zeilen`, answer: refs.join(" · ") }]
            : [];
        }
        if (
          card.type === "dispatch-game" ||
          card.type === "subway-game" ||
          card.type === "bridge-game" ||
          card.type === "call-game" ||
          card.type === "quizshow-game"
        ) {
          // The finished result (deliveries/arrival/crossing/call/quiz + rank), if played.
          const r = answers[`${base}-game`];
          return r ? [{ label: card.title, answer: r }] : [];
        }
        if (card.type === "comment-fill") {
          // Sam's completed comment prints as one whole text (like the
          // Step-4 rule) — unfilled gaps become write-in blanks.
          const t = (card.segments ?? [])
            .map((s) => (typeof s === "string" ? s : answers[`${base}-cfill-${s.key}`] || "____"))
            .join("");
          return [{ label: card.title, answer: t.trim() }];
        }
        if (card.type === "comment-lab") {
          // Step-4 house rule: the sheet shows the whole written comment.
          const user = (answers[`${base}-clab-user`] ?? "").trim();
          const text = (answers[`${base}-clab-text`] ?? "").trim();
          return [{ label: card.title, answer: text ? (user ? `@${user}: ${text}` : text) : "" }];
        }
        if (card.type === "story-maker") {
          // The sheet shows the finished story, not the seven separate
          // blanks — the whole point is the text the learner produced.
          const render = (tpl) =>
            (tpl ?? [])
              .map((seg) =>
                typeof seg === "string"
                  ? seg
                  : answers[`${base}-story-${seg.blank}`] || "____",
              )
              .join("");
          const story = card.scenes
            ? card.scenes.map((sc) => render(sc.template)).join(" ")
            : render(card.template);
          return [{ label: card.title, answer: story.trim() }];
        }
        if (card.type === "bilingual-card") {
          return card.rows.flatMap((row, k) => [
            { label: `${card.title} — ${row.hazard} (EN)`, answer: answers[`${base}-bicard-r${k}-en`] ?? "" },
            { label: `${card.title} — ${row.hazard} (DE)`, answer: answers[`${base}-bicard-r${k}-de`] ?? "" },
          ]);
        }
        if (card.type === "sign-maker") {
          return card.signs.map((sign, k) => ({
            label: `${card.title} — ${sign.hint ?? `Sign ${k + 1}`}`,
            answer: answers[`${base}-signs-s${k}`] ?? "",
          }));
        }
        if (card.type === "bilingual-poster") {
          const bp = `${base}-biposter`;
          const items = [
            { label: `${card.title} — Headline (EN)`, answer: answers[`${bp}-head-en`] ?? "" },
            { label: `${card.title} — Überschrift (DE)`, answer: answers[`${bp}-head-de`] ?? "" },
          ];
          (card.tips ?? []).forEach((_, k) => {
            items.push({ label: `${card.title} — Tip ${k + 1} (EN)`, answer: answers[`${bp}-tip${k}-en`] ?? "" });
            items.push({ label: `${card.title} — Tipp ${k + 1} (DE)`, answer: answers[`${bp}-tip${k}-de`] ?? "" });
          });
          items.push({ label: `${card.title} — Emergency (EN)`, answer: answers[`${bp}-foot-en`] ?? "" });
          items.push({ label: `${card.title} — Notfall (DE)`, answer: answers[`${bp}-foot-de`] ?? "" });
          return items;
        }
        if (card.type === "paragraph-builder") {
          return card.paragraph.sentences.map((sentence, k) => ({
            label: `${card.paragraph.title} — ${sentence.starter}`,
            answer: answers[`${base}-para-s${k}`] ?? "",
          }));
        }
        if (card.type === "essay-editor") {
          return [{ label: card.title, answer: answers[`${base}-essay`] ?? "" }];
        }
        // Join any extra ruled writing lines (answerLines) into one answer.
        const nLines = Math.max(1, card.answerLines || 1);
        const joinLines = (k) => {
          const b = `${base}s${k + 1}`;
          const parts = [answers[b] ?? ""];
          for (let li = 2; li <= nLines; li += 1) parts.push(answers[`${b}_${li}`] ?? "");
          return parts.filter(Boolean).join(" ");
        };
        if (card.questions?.length) {
          return card.questions.map((q, k) => ({
            label: `${card.title}: ${q.q}`,
            answer: joinLines(k),
          }));
        }
        if (card.starters?.length) {
          return card.starters.map((starter, k) => ({
            label: `${card.title}: ${starter}`,
            answer: joinLines(k),
          }));
        }
        if (card.answer) {
          return [{ label: card.title, answer: answers[base] ?? "" }];
        }
        return [];
      }),
    }))
    .filter((s) => s.items.length);

  // Word Master result(s), if the learner played any course
  const wmItems = [];
  for (const c of content.wordMaster?.courses ?? []) {
    if (!c.items?.length) continue;
    const s = getWordMasterScore(unit.id, section.id, c.key);
    if (s) wmItems.push({ label: `Sentences correct (${c.key.toUpperCase()})`, answer: `${s.correct} / ${s.total}` });
  }
  if (wmItems.length) {
    steps.unshift({ heading: "Word Master", items: wmItems });
  }

  const blob = buildAnswerSheetPdf({
    title: `${section.label} — Answer Sheet`,
    subtitle: `English Explorer · Unit ${unit.number}: ${unit.label}`,
    name,
    date: new Date().toLocaleDateString("de-DE"),
    steps,
  });

  const safe = (s) => s.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
  downloadPdf(blob, `${safe(section.label)}_${safe(name)}.pdf`);
}

/* ================= Grammar guide =============================== */

/**
 * Reference panel shown once at the top of a grammar page: the three
 * conditional types (formula + example) plus an optional infographic.
 *
 * @param {{ subtitle?: string, label?: string, types: Array<{n:number,name:string,tag:string,accent:string,formula:string,example:string}>, infographic?: {src:string, alt:string, caption?:string} }} guide
 */
function buildGuideSection(guide) {
  const section = sectionShell("ochre", guide.label ?? "The 3 Types", guide.subtitle ?? "");

  const article = document.createElement("article");
  article.className = "grammar-guide";

  // Optional teaching video, full width above the reference cards.
  if (guide.video) {
    const figure = document.createElement("figure");
    figure.className = "grammar-guide__video";
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    if (guide.video.poster) video.poster = guide.video.poster;
    video.src = guide.video.src;
    figure.appendChild(video);
    if (guide.video.caption) {
      const cap = document.createElement("figcaption");
      cap.className = "grammar-guide__caption";
      cap.textContent = guide.video.caption;
      figure.appendChild(cap);
    }
    article.appendChild(figure);
  }

  const grid = document.createElement("div");
  // Without an infographic the reference cards tile across the full width.
  grid.className = guide.infographic ? "grammar-guide__grid" : "grammar-guide__grid grammar-guide__grid--full";

  const types = document.createElement("div");
  types.className = "grammar-guide__types";
  // Tag the card count so an odd grid (e.g. 5 → 3+2) can be balanced in CSS.
  const typeCount = guide.types?.length ?? 0;
  if (typeCount) types.classList.add(`grammar-guide__types--n${typeCount}`);
  for (const t of guide.types ?? []) {
    const card = document.createElement("div");
    card.className = `grammar-guide__type grammar-guide__type--${t.accent}`;

    const head = document.createElement("div");
    head.className = "grammar-guide__type-head";
    const dot = document.createElement("span");
    dot.className = "grammar-guide__dot";
    const name = document.createElement("span");
    name.className = "grammar-guide__type-name";
    name.textContent = guide.numbered === false ? t.name : `Type ${t.n} — ${t.name}`;
    const tag = document.createElement("span");
    tag.className = "grammar-guide__tag";
    tag.textContent = t.tag;
    head.append(dot, name, tag);

    const formula = document.createElement("p");
    formula.className = "grammar-guide__formula";
    formula.textContent = t.formula;

    card.append(head, formula);

    // Optional German meaning line (with a DE badge).
    if (t.de) {
      const de = document.createElement("p");
      de.className = "grammar-guide__de";
      const badge = document.createElement("span");
      badge.className = "grammar-guide__de-badge";
      badge.textContent = "DE";
      de.append(badge, document.createTextNode(t.de));
      card.appendChild(de);
    }

    const example = document.createElement("p");
    example.className = "grammar-guide__example";
    example.textContent = `“${t.example}”`;
    card.appendChild(example);

    types.appendChild(card);
  }
  grid.appendChild(types);

  // If the guide is a video-only guide (no reference cards, no infographic),
  // skip the empty grid so only the video shows.
  const hasGrid = (guide.types?.length ?? 0) > 0 || Boolean(guide.infographic);

  if (guide.infographic) {
    const figure = document.createElement("figure");
    figure.className = "grammar-guide__figure";
    const img = document.createElement("img");
    img.className = "grammar-guide__img";
    img.src = guide.infographic.src;
    img.alt = guide.infographic.alt ?? "";
    img.loading = "lazy";
    figure.appendChild(img);
    if (guide.infographic.caption) {
      const cap = document.createElement("figcaption");
      cap.className = "grammar-guide__caption";
      cap.textContent = guide.infographic.caption;
      figure.appendChild(cap);
    }
    grid.appendChild(figure);
  }

  if (hasGrid) article.appendChild(grid);

  // Optional 4-tenses revision table (tense · use · signal words), shown
  // below the reference cards.
  if (guide.tenses?.length) {
    const tbl = document.createElement("div");
    tbl.className = "grammar-guide__tenses";
    const cap = document.createElement("div");
    cap.className = "grammar-guide__tenses-cap";
    cap.textContent = guide.tensesLabel ?? "The 4 tenses — quick revision";
    tbl.appendChild(cap);
    for (const t of guide.tenses) {
      const row = document.createElement("div");
      row.className = "grammar-guide__tense";
      const nm = document.createElement("span");
      nm.className = "grammar-guide__tense-name";
      nm.textContent = t.tense;
      const use = document.createElement("span");
      use.className = "grammar-guide__tense-use";
      use.textContent = t.use;
      if (t.example) {
        const ex = document.createElement("span");
        ex.className = `grammar-guide__tense-ex grammar-guide__tense-ex--${t.accent ?? "olive"}`;
        ex.textContent = `“${t.example}”`;
        use.appendChild(ex);
      }
      const sig = document.createElement("span");
      sig.className = "grammar-guide__tense-sig";
      sig.textContent = t.signals;
      row.append(nm, use, sig);
      tbl.appendChild(row);
    }
    article.appendChild(tbl);
  }

  section.appendChild(article);
  return section;
}

/* ================= Vocabulary hub ============================== */

/**
 * Vocabulary launcher buttons — a right-aligned stack of "Picture
 * Vocabulary" (a full-screen hand-painted flashcard deck) above "Word
 * Master" (the gap-fill drill), pulled up beside the page header. No
 * heading/subtitle. Either button appears only when the page supplies
 * its data.
 *
 * @param {{pictureVocab?: object, wordMaster?: {subtitle?: string, items: Array}}} content
 * @param {{unitId: string, sectionId: string}} ctx
 * @param {{showWordMaster?: boolean}} [opts]
 */
function buildVocabHub(content, ctx, { showWordMaster = false } = {}) {
  const hub = document.createElement("div");
  hub.className = "vocab-hub";

  // Picture Vocabulary — sits above Word Master.
  if (content.pictureVocab?.courses?.some((c) => (c.count ?? c.cards?.length ?? 0) > 0)) {
    const pv = content.pictureVocab;
    const picBtn = document.createElement("button");
    picBtn.className = "vocab-hub__btn";
    picBtn.setAttribute("aria-label", "Open the Picture Vocabulary flashcard deck");
    picBtn.textContent = "Picture Vocabulary";
    picBtn.addEventListener("click", () => {
      const overlay = createPictureVocab({
        title: pv.title ?? "Picture Vocabulary",
        base: pv.base,
        courses: pv.courses,
        onClose: () => {},
      });
      document.body.appendChild(overlay);
      overlay.focus();
    });
    hub.appendChild(picBtn);
  }

  // Word Master — the gap-fill drill, split by course (words match the
  // Picture Vocabulary cards). Score is saved per course and printed in
  // the PDF. Only offered in units that have picture vocabulary.
  const wmCourses = wordMasterCourses(content);
  if (showWordMaster && wmCourses.length) {
    const btn = document.createElement("button");
    btn.className = "journal__wordmaster-btn";
    btn.textContent = "Word Master";
    btn.setAttribute("aria-label", "Open the Word Master vocabulary game");

    const badge = document.createElement("span");
    badge.className = "journal__wordmaster-badge";
    const paintBadge = () => {
      let correct = 0;
      let total = 0;
      let played = false;
      for (const c of wmCourses) {
        const s = getWordMasterScore(ctx.unitId, ctx.sectionId, c.key);
        if (s) {
          played = true;
          correct += s.correct;
          total += s.total;
        }
      }
      badge.textContent = played ? `${correct}/${total}` : "";
      badge.style.display = played ? "" : "none";
    };
    paintBadge();
    btn.appendChild(badge);

    btn.addEventListener("click", () => {
      const overlay = createWordMaster({
        title: "Word Master",
        courses: wmCourses,
        onScore: (courseKey, correct, total) => {
          setWordMasterScore(ctx.unitId, ctx.sectionId, courseKey, { correct, total });
        },
        onClose: paintBadge,
      });
      document.body.appendChild(overlay);
      overlay.focus();
    });

    hub.appendChild(btn);
  }

  return hub;
}

/** The Word Master courses that actually carry gap-fill items. */
function wordMasterCourses(content) {
  return content.wordMaster?.courses?.filter((c) => c.items?.length) ?? [];
}

/* ================= Step sections ================================ */

/**
 * @param {{step: number, subtitle: string, accent: string, layout: string, cards: Array}} step
 * @param {{unitId: string, sectionId: string}} ctx
 */
function buildStepSection(step, ctx) {
  // Step 4 is, by convention, the starred "challenge" — an extra creative
  // mini-project. `challenge: true` gives it the gold star treatment.
  const section = sectionShell(step.accent, `Step ${step.step}`, step.subtitle, {
    challenge: step.challenge,
  });

  // Task numbering skips text/game cards so writing tasks read 1, 2, 3…
  let taskNo = 0;
  const cards = step.cards.map((data, i) => {
    if (
      data.type !== "text" &&
      data.type !== "game" &&
      data.type !== "phrase-reference" &&
      data.type !== "video" &&
      data.type !== "image" &&
      data.type !== "comment-view"
    )
      taskNo += 1;
    return buildCard(step, data, i, taskNo, ctx);
  });

  if (step.layout === "single") {
    const holder = document.createElement("div");
    holder.className = "jcar jcar--single";
    const stage = document.createElement("div");
    stage.className = "jcar__stage";
    stage.appendChild(cards[0]);
    holder.appendChild(stage);
    section.appendChild(holder);
  } else {
    section.appendChild(
      createJournalCarousel({ mode: step.layout, accent: step.accent, cards }),
    );
  }

  return section;
}

/**
 * One card, dispatched on `data.type`:
 *   text            → reading variant (tappable glossary if flagged)
 *   multiple-choice → self-checking MC test
 *   group-sort      → sort chips into bins, self-checking
 *   sentence-build  → order word tokens, self-checking
 *   game            → hangman placeholder (code later)
 *   written / —     → intro + optional lines + answer field
 *
 * @param {object} step
 * @param {object} data
 * @param {number} index
 * @param {number} taskNo
 * @param {{unitId: string, sectionId: string}} ctx
 */
/* A small glass "blog card" that floats in the top-right corner of the Writing
 * scene cards: Alex's avatar, the blog + post title, and a meta row (date ·
 * place · likes · comments). Card chrome — sits over the desk photo. */
const CHIP_ICONS = {
  cal: '<path d="M7 2v3M17 2v3M3.5 8.5h17M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5z"/>',
  pin: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  heart: '<path d="M12 20s-7-4.6-7-9.7A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7 3.3C19 15.4 12 20 12 20z"/>',
  chat: '<path d="M20 12a7.5 7.5 0 0 1-10.9 6.7L4 20l1.3-4.2A7.5 7.5 0 1 1 20 12z"/>',
};
function chipMeta(icon, text) {
  return (
    '<span class="taskcard__blogchip-m"><svg viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
    `aria-hidden="true">${CHIP_ICONS[icon]}</svg>${text}</span>`
  );
}
function buildBlogChip(chip) {
  const el = document.createElement("aside");
  el.className = "taskcard__blogchip";
  if (chip.avatar) {
    const ava = document.createElement("span");
    ava.className = "taskcard__blogchip-ava";
    const img = document.createElement("img");
    img.src = chip.avatar;
    img.alt = "";
    ava.appendChild(img);
    el.appendChild(ava);
  }
  const bd = document.createElement("div");
  bd.className = "taskcard__blogchip-body";
  const label = document.createElement("span");
  label.className = "taskcard__blogchip-label";
  label.textContent = chip.blog;
  const title = document.createElement("span");
  title.className = "taskcard__blogchip-title";
  title.textContent = chip.title;
  const meta = document.createElement("div");
  meta.className = "taskcard__blogchip-meta";
  meta.innerHTML =
    chipMeta("cal", chip.date) +
    chipMeta("pin", chip.place) +
    chipMeta("heart", chip.likes) +
    chipMeta("chat", chip.comments);
  bd.append(label, title, meta);
  el.appendChild(bd);
  return el;
}

/* A frosted "checklist" panel that floats over the desk photo on the right of a
 * Writing scene card (e.g. the model comment's "All 5 blocks"): a quill icon +
 * green title, then numbered items each ticked with a green check. */
const CHECKLIST_PEN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M4 20h3.5L18 9.5a2 2 0 1 0-2.8-2.8L4.5 17.4 4 20z"/><path d="M13.5 8.2l2.3 2.3"/></svg>';
const CHECKLIST_TICK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<circle cx="12" cy="12" r="9"/><path d="M8.4 12.3l2.3 2.3 4.9-5"/></svg>';
function buildBlockChecklist(cl) {
  const el = document.createElement("aside");
  el.className = "taskcard__checklist";
  const head = document.createElement("div");
  head.className = "taskcard__checklist-head";
  const ic = document.createElement("span");
  ic.className = "taskcard__checklist-icon";
  ic.innerHTML = CHECKLIST_PEN;
  const title = document.createElement("span");
  title.className = "taskcard__checklist-title";
  title.textContent = cl.title;
  head.append(ic, title);
  const ul = document.createElement("ul");
  ul.className = "taskcard__checklist-list";
  cl.items.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "taskcard__checklist-item";
    const tick = document.createElement("span");
    tick.className = "taskcard__checklist-tick";
    tick.innerHTML = CHECKLIST_TICK;
    const label = document.createElement("span");
    label.textContent = `${i + 1}. ${item}`;
    li.append(tick, label);
    ul.appendChild(li);
  });
  el.append(head, ul);
  return el;
}

function buildCard(step, data, index, taskNo, ctx) {
  const card = document.createElement("article");
  card.className = `taskcard taskcard--sheet taskcard--${step.accent}`;
  if (data.type === "game") card.classList.add("taskcard--game");
  // A video card is just its player; tag it so page backgrounds can skip it.
  if (data.type === "video") card.classList.add("taskcard--video");

  // A reading card can be dressed as a real blog post (byline, hint callout,
  // article + sidebar) when it carries a `blog` block — see buildBlogPost.
  const isBlog = data.type === "text" && Boolean(data.blog);
  if (isBlog) card.classList.add("taskcard--blog");

  // The Listening page carries a faint NYC skyline rising from the bottom of
  // every task card — except the Step-4 ★ game. A card can instead run a
  // subway-line footer (data.subway); the wide dialogue (dlgwide) carries its
  // own faint subway map, so it opts out of both.
  if (ctx?.sectionId === "listening" && step.step !== 4 && data.type !== "game") {
    const isDlgWide = data.type === "gap-fill" && data.columns >= 2;
    if (data.subway) card.classList.add("taskcard--subway");
    else if (!isDlgWide) card.classList.add("taskcard--skyline");
  }

  // Optional faded full-card background image (a picture behind the task, so
  // the picture costs no vertical space — the content sits on top).
  if (data.bgImage) {
    card.classList.add("taskcard--bg");
    const bg = document.createElement("div");
    bg.className = "taskcard__bg";
    bg.style.backgroundImage = `url("${data.bgImage}")`;
    if (data.bgAlt) {
      bg.setAttribute("role", "img");
      bg.setAttribute("aria-label", data.bgAlt);
    }
    card.appendChild(bg);
  }

  const body = document.createElement("div");
  body.className = "taskcard__body";
  card.appendChild(body);

  // The game card is nothing but the game — no header, title or intro.
  // A blog card builds its own header (tag + headline + byline) in
  // buildBlogPost, so skip the generic one here.
  let headEl = null;
  if (data.type !== "game" && !isBlog) {
    const head = document.createElement("div");
    head.className = "taskcard__head";
    headEl = head;
    const num = document.createElement("span");
    num.className = "taskcard__num";
    num.textContent =
      data.type === "text"
        ? "Text"
        : data.type === "video"
          ? "Video"
          : data.type === "image" || data.type === "comment-view"
            ? "Model"
            : data.type === "phrase-reference"
              ? "Words"
              : `Task ${taskNo}`;
    const kind = document.createElement("span");
    kind.className = "taskcard__kind";
    kind.textContent = data.kind ?? "";
    head.append(num, kind);
    body.appendChild(head);

    if (data.title) {
      const title = document.createElement("h3");
      title.className = "taskcard__title";
      title.textContent = data.title;
      body.appendChild(title);
    }
    if (data.intro) {
      const intro = document.createElement("p");
      intro.className = "taskcard__intro";
      intro.textContent = data.intro;
      body.appendChild(intro);
    }
    // A glossed intro line: the task question itself carries tappable
    // glossary words (e.g. the Reading warm-up's "delivered").
    if (data.introGloss) {
      const g = createGlossaryText({ paragraphs: [data.introGloss], tapHint: false });
      g.classList.add("taskcard__introgloss");
      body.appendChild(g);
    }
  }

  // Optional listening track above the task body.
  if (data.audio) {
    body.appendChild(createAudioPlayer(data.audio));
  }

  // Optional picture above the task body (e.g. Speaking picture-description).
  if (data.image) {
    body.appendChild(buildTaskFigure(data.image, data.imageAlt, data.imageCaption, data.imageSize));
  }

  // Optional teaching video (e.g. Writing "Email Survival Guide" cards).
  if (data.video) {
    body.appendChild(buildTaskVideo(data.video));
  }

  // Optional read-only email to react to (e.g. Writing "write the reply").
  if (data.incoming) {
    body.appendChild(buildReceivedEmail(data.incoming));
  }

  switch (data.type) {
    case "video":
    case "image":
      break; // the video/image is rendered above; the card is just that

    case "text":
      body.appendChild(
        isBlog
          ? buildBlogPost(data)
          : createGlossaryText({
              paragraphs: normalizeParagraphs(data.paragraphs),
              highlight: data.highlight,
              lineNumbers: data.lineNumbers,
              paraStarts: data.paraStarts,
            }),
      );
      break;
    case "multiple-choice": {
      const base = `step${step.step}-task${index + 1}`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const keyFor = (qi) => `${base}-line${qi + 1}`;
      body.appendChild(
        createMultipleChoice({
          questions: data.questions,
          columns: data.columns,
          shuffle: data.shuffle,
          lineRef: data.lineRef,
          values: saved,
          keyFor,
          onChange: (qi, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, keyFor(qi), v),
        }),
      );
      break;
    }
    case "comment-quiz":
      body.appendChild(createCommentQuiz({ comments: data.comments }));
      break;
    case "right-wrong": {
      const base = `step${step.step}-task${index + 1}`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const keyFor = (i) => `${base}-rw${i}`;
      body.appendChild(
        createRightWrong({
          statements: data.statements,
          values: saved,
          keyFor,
          onChange: (i, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, keyFor(i), v),
        }),
      );
      break;
    }
    case "group-sort":
      body.appendChild(createGroupSort({ groups: data.groups, trayLabel: data.trayLabel }));
      break;
    case "sentence-build":
      body.appendChild(createSentenceBuild({ sentences: data.sentences }));
      break;
    case "gap-fill": {
      const gap = createGapFill({ items: data.items, columns: data.columns });
      body.appendChild(gap);
      // A wide 2-column dialogue is laid out at a generous design width (so the
      // lines wrap like the mockup, not into tall 4-line panels) and then the
      // fit-scaler shrinks the whole card to fill the width. See the width
      // branch in fitUniformCards + .taskcard--dlgwide in CSS.
      if (data.columns >= 2) {
        card.classList.add("taskcard--dlgwide");
        // Three-column dialogue: lay it out at the real card width (not the wide
        // design width) so the type-in blanks read at full size instead of being
        // scaled down small. See .taskcard--dlg3 in journal-carousel.css.
        if (data.columns >= 3) card.classList.add("taskcard--dlg3");
        // Faint NYC subway map behind the dialogue (screen-blended card chrome).
        const map = document.createElement("div");
        map.className = "taskcard__submap";
        map.setAttribute("aria-hidden", "true");
        card.appendChild(map);
        // Lift the Check bar out of the flow into the card's top-right corner so
        // the dialogue owns the whole height and reads bigger.
        const bar = gap.querySelector(".exo__checkbar");
        if (bar) {
          bar.classList.add("taskcard__corner-check");
          card.appendChild(bar);
        }
      }
      break;
    }
    case "image-match":
      body.appendChild(createImageMatch({ pairs: data.pairs }));
      break;
    case "event-order":
      body.appendChild(createEventOrder({ events: data.events }));
      break;
    case "inline-choice": {
      const inline = createInlineChoice(data);
      // Dialogue split: the word box ("Useful language") belongs in the left
      // column with the directions + player, not above the dialogue. Hoist it
      // out of the exercise so the split sorts it left (it isn't "visual").
      if (data.split === "dialogue") {
        const bank = inline.querySelector(".exo-inline__bank");
        if (bank) body.appendChild(bank);
      }
      body.appendChild(inline);
      break;
    }
    case "phrase-reference":
      body.appendChild(createPhraseReference({ sections: data.sections }));
      break;
    case "match-up":
      body.appendChild(createMatchUp({ options: data.options, items: data.items }));
      break;
    case "tap-match": {
      const tap = createTapMatch({ pairs: data.pairs });
      // Lift the count + reset into the card's top-right head corner so the
      // word chips get the whole card height (no bottom footer row).
      if (headEl && tap._corner) headEl.appendChild(tap._corner);
      body.appendChild(tap);
      break;
    }
    case "argument-pick":
      body.appendChild(createArgumentPick({ args: data.args, lead: data.lead, labels: data.labels }));
      break;
    case "paragraph-builder": {
      const base = `step${step.step}-task${index + 1}`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const keyFor = (k) => `${base}-para-s${k}`;
      body.appendChild(
        createParagraphBuilder({
          paragraph: data.paragraph,
          values: saved,
          keyFor,
          onChange: (k, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, keyFor(k), v),
        }),
      );
      break;
    }
    case "essay-editor": {
      const base = `step${step.step}-task${index + 1}`;
      const key = `${base}-essay`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createEssayEditor({
          min: data.min,
          max: data.max,
          placeholder: data.placeholder,
          checklist: data.checklist,
          chips: data.chips,
          subject: data.subject,
          comment: data.comment,
          postcard: data.postcard,
          fillCard: data.fill,
          value: saved[key] ?? "",
          answerKey: key,
          onChange: (v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, v),
        }),
      );
      break;
    }
    case "dialogue-write": {
      const base = `step${step.step}-task${index + 1}`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const keyFor = (i) => `${base}-line${i}`;
      body.appendChild(
        createDialogueWrite({
          lines: data.lines,
          values: saved,
          keyFor,
          onChange: (i, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, keyFor(i), v),
        }),
      );
      break;
    }
    case "game":
      body.appendChild(createGame(data));
      break;
    case "profile-builder": {
      const base = `step${step.step}-task${index + 1}-profile`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const values = {};
      for (const f of PROFILE_FIELDS) values[f] = saved[`${base}-${f}`] ?? "";
      body.appendChild(
        createProfileBuilder({
          values,
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) =>
            ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "caption-builder": {
      const base = `step${step.step}-task${index + 1}-caption`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const values = {};
      for (const f of CAPTION_FIELDS) values[f] = saved[`${base}-${f}`] ?? "";
      body.appendChild(
        createCaptionBuilder({
          values,
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) =>
            ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "email-builder": {
      const base = `step${step.step}-task${index + 1}-email`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const values = {};
      for (const f of EMAIL_FIELDS) values[f] = saved[`${base}-${f}`] ?? "";
      body.appendChild(
        createEmailBuilder({
          to: data.to,
          values,
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) =>
            ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "email-fixer": {
      const base = `step${step.step}-task${index + 1}-fix`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const values = {};
      for (const f of FIXER_FIELDS) values[f] = saved[`${base}-${f}`] ?? "";
      values.flags = saved[`${base}-flags`] ?? "";
      body.appendChild(
        createEmailFixer({
          draft: data.draft,
          to: data.to,
          subjectPlaceholder: data.subjectPlaceholder,
          bodyPlaceholder: data.bodyPlaceholder,
          values,
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) =>
            ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "spot-fix":
      body.appendChild(
        createSpotFix({ paragraphs: data.paragraphs, fixes: data.fixes, hint: data.hint, checkLabel: data.checkLabel }),
      );
      break;
    case "poster-builder": {
      const base = `step${step.step}-task${index + 1}-poster`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      const values = {};
      for (const f of POSTER_FIELDS) values[f] = saved[`${base}-${f}`] ?? "";
      body.appendChild(
        createPosterBuilder({
          values,
          prompts: data.prompts,
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "comic-strip": {
      const base = `step${step.step}-task${index + 1}-comic`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createComicStrip({
          panels: data.panels,
          base: data.base,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "comment-view":
      body.appendChild(createCommentThread({ comments: data.comments }));
      break;
    case "dispatch-game": {
      const key = `step${step.step}-task${index + 1}-game`;
      body.appendChild(
        createDispatchGame({
          board: data.board,
          rider: data.rider,
          start: data.start,
          stops: data.stops,
          onResult: (summary) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, summary),
        }),
      );
      break;
    }
    case "subway-game": {
      const key = `step${step.step}-task${index + 1}-game`;
      body.appendChild(
        createSubwayGame({
          stations: data.stations,
          stops: data.stops,
          onResult: (summary) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, summary),
        }),
      );
      break;
    }
    case "bridge-game": {
      const key = `step${step.step}-task${index + 1}-game`;
      body.appendChild(
        createBridgeGame({
          spans: data.spans,
          stops: data.stops,
          onResult: (summary) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, summary),
        }),
      );
      break;
    }
    case "call-game": {
      const key = `step${step.step}-task${index + 1}-game`;
      body.appendChild(
        createCallGame({
          contact: data.contact,
          turns: data.turns,
          onResult: (summary) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, summary),
        }),
      );
      break;
    }
    case "quizshow-game": {
      const key = `step${step.step}-task${index + 1}-game`;
      body.appendChild(
        createQuizShowGame({
          host: data.host,
          rounds: data.rounds,
          onResult: (summary) => ctx && setAnswer(ctx.unitId, ctx.sectionId, key, summary),
        }),
      );
      break;
    }
    case "comment-fill": {
      const base = `step${step.step}-task${index + 1}-cfill`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createCommentFill({
          user: data.user,
          when: data.when,
          segments: data.segments,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "comment-lab": {
      const base = `step${step.step}-task${index + 1}-clab`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createCommentLab({
          post: data.post,
          comments: data.comments,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "story-maker": {
      const base = `step${step.step}-task${index + 1}-story`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createStoryMaker({
          template: data.template,
          scenes: data.scenes,
          blanks: data.blanks,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "bilingual-card": {
      const base = `step${step.step}-task${index + 1}-bicard`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createBilingualCard({
          rows: data.rows,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "sign-maker": {
      const base = `step${step.step}-task${index + 1}-signs`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createSignMaker({
          signs: data.signs,
          base: data.base,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "comic-speech": {
      const base = `step${step.step}-task${index + 1}-comicx`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createComicSpeech({
          panels: data.panels,
          base: data.base,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    case "bilingual-poster": {
      const base = `step${step.step}-task${index + 1}-biposter`;
      const saved = ctx ? getAnswers(ctx.unitId, ctx.sectionId) : {};
      body.appendChild(
        createBilingualPoster({
          icon: data.icon,
          headline: data.headline,
          tips: data.tips,
          footer: data.footer,
          values: prefix(saved, base),
          keyFor: (f) => `${base}-${f}`,
          onChange: (f, v) => ctx && setAnswer(ctx.unitId, ctx.sectionId, `${base}-${f}`, v),
        }),
      );
      break;
    }
    default:
      appendWrittenBody(body, step, data, index, ctx);
  }

  // Unit-wide: the Check button belongs in the card's top-right corner rather
  // than a bottom footer row. Skip cards that already put something in that
  // corner (tap-match's count/reset, or a card like the wide dialogue that
  // cornered its own Check) — leave those where the card placed them.
  const cornerBusy =
    card.querySelector(".taskcard__corner-check") ||
    (headEl && headEl.querySelector(".exo-tap__corner"));
  const checkbar = body.querySelector(".exo__checkbar");
  if (checkbar && !cornerBusy) {
    if (data.split) {
      // Split cards put their header in the LEFT column, so the header's right
      // end is mid-card — pin the Check to the card's own top-right corner as
      // chrome (same slot as the wide dialogue), unscaled and clear of the flow.
      checkbar.classList.add("taskcard__corner-check");
      card.classList.add("taskcard--has-corner-check");
      card.appendChild(checkbar);
    } else if (headEl) {
      // Full-width header: the Check rides in the header's right end.
      checkbar.classList.add("taskcard__head-check");
      headEl.appendChild(checkbar);
    }
  }

  if (data.help) {
    const help = document.createElement("div");
    help.className = "taskcard__help";
    help.textContent = data.help;
    body.appendChild(help);
  }

  // Uniform-size cards: every card is exactly --card-w × --card-h and nothing
  // scrolls inside it. We wrap the body content in a "fit" layer so a later
  // pass (fitUniformCards) can shrink it just enough to fit the fixed height —
  // text stretches to the edges first, then scales.
  if (ctx && !card.classList.contains("taskcard--game")) {
    const fit = document.createElement("div");
    fit.className = "taskcard__fit";
    if (data.split) {
      // Two imaginary columns. Two flavours:
      //   split: true       → task directions left, framed image / postcard
      //                       right (the image grows to the full card height).
      //   split: "dialogue" → task + audio player left, the dialogue widget
      //                       (inline-choice / gap-fill) right.
      const dialogueSplit = data.split === "dialogue";
      card.classList.add("taskcard--split");
      if (dialogueSplit) card.classList.add("taskcard--split-dialogue");
      const cols = document.createElement("div");
      cols.className = "taskcard__cols";
      const left = document.createElement("div");
      left.className = "taskcard__col taskcard__col--left";
      const right = document.createElement("div");
      right.className = "taskcard__col taskcard__col--right";
      const isVisual = (el) =>
        el.classList &&
        (el.classList.contains("taskcard__frame") ||
          el.classList.contains("exo-essay__pc") ||
          el.classList.contains("taskcard__figure") ||
          el.classList.contains("taskcard__figure-frame") ||
          el.classList.contains("exo-inline") ||
          el.classList.contains("exo-dwrite") ||
          el.classList.contains("exo-gap"));
      while (body.firstChild) {
        const el = body.firstChild;
        (isVisual(el) ? right : left).appendChild(el);
      }
      cols.append(left, right);
      fit.appendChild(cols);
    } else {
      while (body.firstChild) fit.appendChild(body.firstChild);
    }
    body.appendChild(fit);
  }

  // Subway-line footer (card chrome): a stylised red line with named stops in
  // the reserved bottom strip. Sits outside the fit layer so it never scales.
  if (data.subway?.length) {
    card.appendChild(buildSubwayLine(data.subway));
  }

  // Alex's-blog "scene" cards (Writing drafts): a glass blog chip floats in the
  // top-right corner over the desk photo. `blogScene` additionally holds the
  // content in a left column so the photo shows on the right (Task 1 quiz);
  // without it the content keeps the full width (Task 5 step grid). Appended
  // last so it layers above the content.
  if (data.blogChip) {
    card.classList.add("taskcard--haschip");
    card.appendChild(buildBlogChip(data.blogChip));
  }
  // `blogScene` holds the content in a left column so the photo (and any right
  // panel) shows on the right; a checklist panel floats over that right side.
  if (data.blogScene || data.checklist) card.classList.add("taskcard--blogscene");
  if (data.checklist) card.appendChild(buildBlockChecklist(data.checklist));

  return card;
}

/**
 * A stylised subway line for the bottom strip of a Listening card: a red line
 * with a "1"-train bullet at the start, hollow stops along the way, a terminus
 * ring at the end, and a name under every stop.
 * @param {string[]} stations
 */
function buildSubwayLine(stations) {
  const foot = document.createElement("div");
  foot.className = "taskcard__subway";
  const stops = document.createElement("div");
  stops.className = "taskcard__subway-stops";
  stations.forEach((name, i) => {
    const stop = document.createElement("div");
    stop.className = "taskcard__subway-stop";
    if (i === 0) stop.classList.add("taskcard__subway-stop--start");
    if (i === stations.length - 1) stop.classList.add("taskcard__subway-stop--end");
    const dot = document.createElement("span");
    dot.className = "taskcard__subway-dot";
    if (i === 0) dot.textContent = "1";
    const label = document.createElement("span");
    label.className = "taskcard__subway-name";
    label.textContent = name;
    stop.append(dot, label);
    stops.appendChild(stop);
  });
  foot.appendChild(stops);
  return foot;
}

/**
 * Render a reading card as a blog post in the night-journal palette: an
 * article column (kind tag → headline → author byline → hint callout →
 * glossed text) beside a sidebar of "blog furniture" (About the author,
 * Categories, Popular posts). Mirrors a real blog page so the reading feels
 * like the genuine article it asks the student to comment on.
 *
 * @param {{ title?: string, kind?: string, intro?: string, paragraphs: Array,
 *   blog: { author?: string, date?: string, avatar?: string,
 *     about?: { title?: string, bio: string, avatar?: string },
 *     categories?: Array<string|{name:string,active?:boolean}>,
 *     popular?: Array<{icon?:string,title:string,date?:string}> } }} data
 */
function buildBlogPost(data) {
  const blog = data.blog ?? {};
  const post = document.createElement("div");
  post.className = "blogpost";

  /* ---- article column ---- */
  const main = document.createElement("article");
  main.className = "blogpost__main";

  const tag = document.createElement("div");
  tag.className = "blogpost__tag";
  tag.textContent = ["Text", data.kind].filter(Boolean).join(" · ");
  main.appendChild(tag);

  if (data.title) {
    const h = document.createElement("h3");
    h.className = "blogpost__title";
    h.textContent = data.title;
    main.appendChild(h);
  }

  const byline = document.createElement("div");
  byline.className = "blogpost__byline";
  const av = document.createElement("span");
  av.className = "blogpost__avatar";
  if (blog.photo) {
    av.classList.add("blogpost__avatar--img");
    const img = document.createElement("img");
    img.src = blog.photo;
    img.alt = blog.author ?? "";
    img.loading = "lazy";
    av.appendChild(img);
  } else {
    av.textContent = blog.avatar ?? (blog.author ?? "A").trim().charAt(0).toUpperCase();
  }
  byline.appendChild(av);
  const who = document.createElement("span");
  who.className = "blogpost__author";
  who.textContent = blog.author ?? "";
  byline.appendChild(who);
  if (blog.date) {
    const dot = document.createElement("span");
    dot.className = "blogpost__dot";
    dot.textContent = "•";
    const date = document.createElement("span");
    date.className = "blogpost__date";
    date.textContent = blog.date;
    byline.append(dot, date);
  }
  main.appendChild(byline);

  if (data.intro) {
    const hint = document.createElement("div");
    hint.className = "blogpost__hint";
    const ico = document.createElement("span");
    ico.className = "blogpost__hint-ico";
    ico.textContent = "💡";
    ico.setAttribute("aria-hidden", "true");
    const tx = document.createElement("span");
    tx.textContent = data.intro;
    hint.append(ico, tx);
    main.appendChild(hint);
  }

  // Optional cover photo (a slim lead banner) under the byline/hint.
  if (blog.hero) {
    const h = typeof blog.hero === "string" ? { src: blog.hero } : blog.hero;
    const fig = document.createElement("figure");
    fig.className = "blogpost__hero";
    const img = document.createElement("img");
    img.src = h.src;
    img.alt = h.alt ?? "";
    img.loading = "lazy";
    fig.appendChild(img);
    if (h.caption) {
      const cap = document.createElement("figcaption");
      cap.className = "blogpost__hero-cap";
      cap.textContent = h.caption;
      fig.appendChild(cap);
    }
    main.appendChild(fig);
  }

  // The article text keeps the tappable glossary words; its own tap hint is
  // suppressed because the callout above already gives the instruction.
  const article = createGlossaryText({
    paragraphs: normalizeParagraphs(data.paragraphs),
    tapHint: false,
  });
  article.classList.add("blogpost__article");
  main.appendChild(article);

  post.appendChild(main);

  /* ---- sidebar ---- */
  const side = document.createElement("aside");
  side.className = "blogpost__side";

  if (blog.about) {
    const box = document.createElement("section");
    box.className = "blogpost__widget blogpost__widget--about";
    const h = document.createElement("h4");
    h.className = "blogpost__widget-title";
    h.textContent = blog.about.title ?? "About the author";
    const portrait = document.createElement("div");
    portrait.className = "blogpost__portrait";
    const portraitSrc = blog.about.photo ?? blog.photo;
    if (portraitSrc) {
      portrait.classList.add("blogpost__portrait--img");
      const img = document.createElement("img");
      img.src = portraitSrc;
      img.alt = blog.author ?? "";
      img.loading = "lazy";
      portrait.appendChild(img);
    } else {
      portrait.textContent =
        blog.about.avatar ?? blog.avatar ?? (blog.author ?? "A").trim().charAt(0).toUpperCase();
    }
    const bio = document.createElement("p");
    bio.className = "blogpost__bio";
    bio.textContent = blog.about.bio;
    box.append(h, portrait, bio);
    side.appendChild(box);
  }

  if (blog.categories?.length) {
    const box = document.createElement("section");
    box.className = "blogpost__widget";
    const h = document.createElement("h4");
    h.className = "blogpost__widget-title";
    h.textContent = "Categories";
    const ul = document.createElement("ul");
    ul.className = "blogpost__cats";
    for (const c of blog.categories) {
      const li = document.createElement("li");
      li.className = "blogpost__cat";
      const obj = typeof c === "object" && c !== null;
      li.textContent = obj ? c.name : c;
      if (obj && c.active) li.classList.add("blogpost__cat--on");
      ul.appendChild(li);
    }
    box.append(h, ul);
    side.appendChild(box);
  }

  if (blog.popular?.length) {
    const box = document.createElement("section");
    box.className = "blogpost__widget";
    const h = document.createElement("h4");
    h.className = "blogpost__widget-title";
    h.textContent = "Popular posts";
    const ul = document.createElement("ul");
    ul.className = "blogpost__posts";
    for (const p of blog.popular) {
      const li = document.createElement("li");
      li.className = "blogpost__post";
      const thumb = document.createElement("span");
      thumb.className = "blogpost__thumb";
      if (p.img) {
        thumb.classList.add("blogpost__thumb--img");
        const img = document.createElement("img");
        img.src = p.img;
        img.alt = "";
        img.loading = "lazy";
        thumb.appendChild(img);
      } else {
        thumb.textContent = p.icon ?? "🗽";
        thumb.setAttribute("aria-hidden", "true");
      }
      const meta = document.createElement("span");
      meta.className = "blogpost__post-meta";
      const t = document.createElement("span");
      t.className = "blogpost__post-title";
      t.textContent = p.title;
      meta.appendChild(t);
      if (p.date) {
        const d = document.createElement("span");
        d.className = "blogpost__post-date";
        d.textContent = p.date;
        meta.appendChild(d);
      }
      li.append(thumb, meta);
      ul.appendChild(li);
    }
    box.append(h, ul);
    side.appendChild(box);
  }

  if (side.childElementCount) post.appendChild(side);
  return post;
}

/**
 * Shrink-to-fit pass for the uniform-size cards. Each card is a fixed box
 * (--card-w × --card-h); if its content is taller than the box we scale the
 * `.taskcard__fit` layer down (never below a floor, so it stays readable —
 * anything that still won't fit gets its copy rewritten by hand). Content
 * that already fits is left at 1:1. Runs after layout and on resize.
 * @param {HTMLElement} view
 */
function fitUniformCards(view, pager) {
  // Low floor: the point is to NEVER clip content. A handful of genuinely tall
  // cards render small until their copy is tightened by hand (as on Reading).
  const MIN_SCALE = 0.35;
  const observed = [];
  // Scale `fit` down (as far as needed, never below the floor) so its content
  // fits `avail` px. Returns the fit element so we can observe it for reflow.
  const fitInto = (fit, avail, availW) => {
    fit.style.transform = "none";
    const need = fit.scrollHeight;
    const needW = fit.scrollWidth;
    // Fit to BOTH the height box and the width box, whichever binds harder.
    // For every normal card the content is already ≤ the card width, so the
    // width term is 1 and this behaves exactly as before. A card laid out
    // deliberately wider than the box (taskcard--dlgwide) is scaled down by
    // the width term so it fills the card at the mockup's proportions.
    let k = 1;
    if (avail > 0 && need > avail) k = Math.min(k, avail / need);
    if (availW > 0 && needW > availW) k = Math.min(k, availW / needW);
    if (k < 1) {
      k = Math.max(MIN_SCALE, k);
      fit.style.transform = `scale(${k})`;
      fit.dataset.fit = k.toFixed(3);
    } else {
      delete fit.dataset.fit;
    }
    return fit;
  };
  const run = () => {
    // Never re-fit while the keyboard is up: the viewport is temporarily short,
    // and rescaling every card to it is what makes the focused card jump and
    // its layout collapse. The blur handler re-runs this once the keyboard goes.
    if (pager && pager.isKeyboardOpen && pager.isKeyboardOpen()) return;
    // Cards: fit each into its fixed body box.
    view.querySelectorAll(".taskcard--sheet > .taskcard__body > .taskcard__fit").forEach((fit) => {
      const body = fit.parentElement;
      // Dialogue-split cards are laid out at a fixed, readable size and are
      // never shrunk to fit: if the dialogue is too tall we surface it rather
      // than scaling it down. (Deliberate design choice for these cards.)
      if (body.parentElement.classList.contains("taskcard--split-dialogue")) {
        fit.style.transform = "none";
        delete fit.dataset.fit;
        return;
      }
      const cs = getComputedStyle(body);
      fitInto(
        fit,
        body.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom),
        body.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight),
      );
    });
    // Cover: fit the whole intro (header + vocab + theory) into one screen.
    const cover = view.querySelector(".journal__cover");
    if (cover) {
      const cfit = cover.querySelector(":scope > .journal__cover-fit");
      const cs = getComputedStyle(cover);
      if (cfit)
        fitInto(
          cfit,
          cover.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom),
          cover.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight),
        );
    }
    // Now that heights are settled, tell the pager which pages can scroll.
    if (pager && pager.sync) pager.sync();
  };
  const kick = () => requestAnimationFrame(() => requestAnimationFrame(run));
  // Fit once synchronously, before the first paint, so the cover/cards never
  // flash at full size and then visibly shrink. rAF + a late pass refine it
  // once fonts/images settle.
  run();
  kick();
  // Re-fit once images/fonts settle and whenever the viewport changes.
  setTimeout(run, 350);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => requestAnimationFrame(run));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
    // Content can reflow after the first passes (late images, a guide table,
    // a video poster). A ResizeObserver re-fits when any fit layer's own
    // height changes — transforms don't change layout height, so this can't
    // loop. This is what keeps a dense cover (e.g. Grammar) correctly fitted.
    if (typeof ResizeObserver !== "undefined") {
      let raf = 0;
      const ro = new ResizeObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(run);
      });
      const observeAll = () => {
        view
          .querySelectorAll(".taskcard__fit, .journal__cover-fit")
          .forEach((el) => {
            if (!observed.includes(el)) {
              observed.push(el);
              ro.observe(el);
            }
          });
      };
      observeAll();
      setTimeout(observeAll, 400);
    }
  }
}

/**
 * A read-only "received email" shown above a reply task, so the incoming
 * message stays visible while the learner writes their answer.
 * @param {{from?: string, subject?: string, body: string[]}} email
 */
function buildReceivedEmail(email) {
  const art = document.createElement("article");
  art.className = "received-mail";

  const head = document.createElement("div");
  head.className = "received-mail__head";
  const tag = document.createElement("span");
  tag.className = "received-mail__tag";
  tag.textContent = "📨 New message";
  head.appendChild(tag);
  if (email.from) {
    const from = document.createElement("div");
    from.className = "received-mail__meta";
    from.innerHTML = `<span>From:</span> ${email.from}`;
    head.appendChild(from);
  }
  if (email.subject) {
    const subj = document.createElement("div");
    subj.className = "received-mail__meta";
    subj.innerHTML = `<span>Subject:</span> ${email.subject}`;
    head.appendChild(subj);
  }
  art.appendChild(head);

  const bodyEl = document.createElement("div");
  bodyEl.className = "received-mail__body";
  (email.body ?? []).forEach((para) => {
    const p = document.createElement("p");
    p.textContent = para;
    bodyEl.appendChild(p);
  });
  art.appendChild(bodyEl);

  return art;
}

/**
 * A framed picture inside a task card. If the image is missing (e.g. the
 * artwork hasn't been added yet), it degrades to a labelled placeholder so
 * the slot is still visible and the page never shows a broken image.
 */
function buildTaskFigure(src, alt, caption, size) {
  const figure = document.createElement("figure");
  figure.className = "taskcard__figure" + (size === "small" ? " taskcard__figure--small" : "");

  const frame = document.createElement("div");
  frame.className = "taskcard__figure-frame";

  const img = document.createElement("img");
  img.className = "taskcard__figure-img";
  img.src = src;
  img.alt = alt ?? "";
  img.loading = "lazy";
  img.addEventListener("error", () => {
    frame.classList.add("taskcard__figure-frame--pending");
    img.remove();
    const ph = document.createElement("div");
    ph.className = "taskcard__figure-placeholder";
    ph.innerHTML = "<span>📷</span><span>Picture coming soon</span>";
    frame.appendChild(ph);
  });
  frame.appendChild(img);
  figure.appendChild(frame);

  if (caption) {
    const cap = document.createElement("figcaption");
    cap.className = "taskcard__figure-cap";
    cap.textContent = caption;
    figure.appendChild(cap);
  }
  return figure;
}

/** A teaching video inside a task card (controls, lazy metadata). */
function buildTaskVideo(video) {
  const figure = document.createElement("figure");
  figure.className = "taskcard__video";
  const el = document.createElement("video");
  el.controls = true;
  el.preload = "metadata";
  el.playsInline = true;
  if (video.poster) el.poster = video.poster;
  el.src = video.src;
  figure.appendChild(el);
  if (video.caption) {
    const cap = document.createElement("figcaption");
    cap.className = "taskcard__video-cap";
    cap.textContent = video.caption;
    figure.appendChild(cap);
  }
  return figure;
}

/** Written-task content: optional bullet/check lines + a saved answer field. */
function appendWrittenBody(body, step, data, index, ctx) {
  // Optional icon strip — a row of round transport (or topic) badges above the
  // questions, so the warm-up shows the vocabulary it asks the learner to use.
  if (data.icons?.length) {
    const strip = document.createElement("div");
    strip.className = "taskcard__icons";
    for (const it of data.icons) {
      const cell = document.createElement("div");
      cell.className = "taskcard__icon";
      const badge = document.createElement("span");
      badge.className = "taskcard__icon-badge";
      if (it.bg) badge.style.background = it.bg;
      badge.textContent = it.icon;
      const label = document.createElement("span");
      label.className = "taskcard__icon-label";
      label.textContent = it.label;
      cell.append(badge, label);
      strip.appendChild(cell);
    }
    body.appendChild(strip);
  }

  // Numbered questions — each is a panel: a number badge + the question, then a
  // single-line writing field whose placeholder is the sentence starter. It is
  // an <input>, not a <textarea>, on purpose: on iPad a focused textarea keeps
  // scrolling the page to track the caret, which makes this full-screen card
  // jump (a plain input doesn't). Persistence reuses the starter key scheme so
  // the PDF collects it the same way.
  if (data.questions?.length && ctx) {
    const list = document.createElement("div");
    list.className = "taskcard__qs";
    data.questions.forEach((q, k) => {
      const panel = document.createElement("div");
      panel.className = "taskcard__q";
      const head = document.createElement("div");
      head.className = "taskcard__q-head";
      const badge = document.createElement("span");
      badge.className = "taskcard__q-badge";
      badge.textContent = k + 1;
      const qt = document.createElement("span");
      qt.className = "taskcard__q-text";
      qt.textContent = q.q;
      head.append(badge, qt);
      panel.appendChild(head);

      // One or more ruled writing lines (answerLines). Each line is its own
      // single-line <input> (never a <textarea> — that caret-jumps the card on
      // iPad). The first line carries the sentence starter as its placeholder.
      const nLines = Math.max(1, data.answerLines || 1);
      for (let li = 0; li < nLines; li += 1) {
        const base = `step${step.step}-task${index + 1}s${k + 1}`;
        const key = li === 0 ? base : `${base}_${li + 1}`;
        const input = document.createElement("input");
        input.type = "text";
        input.className = "taskcard__q-write";
        input.setAttribute("autocomplete", "off");
        if (li === 0 && q.starter) input.placeholder = q.starter;
        input.dataset.answerKey = key;
        const saved = getAnswers(ctx.unitId, ctx.sectionId)[key];
        if (saved) input.value = saved;
        input.addEventListener("input", () => setAnswer(ctx.unitId, ctx.sectionId, key, input.value));
        panel.appendChild(input);
      }
      list.appendChild(panel);
    });
    body.appendChild(list);
    return;
  }

  if (data.lines?.length) {
    const lines = document.createElement("div");
    lines.className = "taskcard__lines";
    for (const text of data.lines) {
      const row = document.createElement("div");
      row.className = "taskcard__line";
      const marker = document.createElement("span");
      marker.className = data.checklist ? "taskcard__checkbox" : "taskcard__bullet";
      const span = document.createElement("span");
      span.textContent = text;
      row.append(marker, span);
      lines.appendChild(row);
    }
    body.appendChild(lines);
  }

  // Sentence starters — each becomes a "starter … [input]" row; the
  // learner completes five sentences. Replaces the single textarea.
  if (data.starters?.length && ctx) {
    const nLines = Math.max(1, data.answerLines || 1);
    const list = document.createElement("div");
    list.className = "taskcard__starters";
    data.starters.forEach((starter, k) => {
      const row = document.createElement("div");
      // With multiple answer lines the prompt sits on its own line above a
      // little stack of ruled writing lines (column layout); the single-line
      // default keeps the inline "prompt … [line]" look.
      row.className = nLines > 1 ? "taskcard__starter taskcard__starter--multi" : "taskcard__starter";
      const label = document.createElement("span");
      label.className = "taskcard__starter-label";
      label.textContent = starter;
      row.appendChild(label);
      const base = `step${step.step}-task${index + 1}s${k + 1}`;
      for (let li = 0; li < nLines; li += 1) {
        const key = li === 0 ? base : `${base}_${li + 1}`;
        const input = document.createElement("input");
        input.type = "text";
        input.className = "taskcard__starter-input";
        input.dataset.answerKey = key;
        const saved = getAnswers(ctx.unitId, ctx.sectionId)[key];
        if (saved) input.value = saved;
        input.addEventListener("input", () => {
          setAnswer(ctx.unitId, ctx.sectionId, key, input.value);
        });
        row.appendChild(input);
      }
      list.appendChild(row);
    });
    body.appendChild(list);
    return;
  }

  if (data.answer && ctx) {
    const key = `step${step.step}-task${index + 1}`;
    const saved = getAnswers(ctx.unitId, ctx.sectionId)[key];

    // Framed writing: the answer sits inside a template image (a phone
    // messenger, a blog page …), positioned over its empty area by CSS.
    // Persistence key is unchanged, so the PDF still collects it.
    if (data.backdrop) {
      const frame = document.createElement("div");
      frame.className = `taskcard__frame taskcard__frame--${data.backdrop.mode}`;
      const img = document.createElement("img");
      img.className = "taskcard__frame-img";
      img.src = data.backdrop.src;
      img.alt = "";
      img.loading = "lazy";
      frame.appendChild(img);
      if (data.backdrop.postTitle) {
        const t = document.createElement("div");
        t.className = "taskcard__frame-title";
        t.textContent = data.backdrop.postTitle;
        frame.appendChild(t);
      }
      // Compose surface (typing) and the "sent" surface (the same text
      // rendered in the handwriting font once Send / Post is pressed).
      const field = document.createElement("textarea");
      field.className = "taskcard__frame-field";
      field.placeholder = data.backdrop.placeholder ?? "";
      field.dataset.answerKey = key;
      if (saved) field.value = saved;
      field.addEventListener("input", () => setAnswer(ctx.unitId, ctx.sectionId, key, field.value));

      const sent = document.createElement("div");
      sent.className = "taskcard__frame-sent";

      const action = document.createElement("button");
      action.type = "button";
      action.className = "taskcard__frame-action";
      const sendLabel = data.backdrop.mode === "messenger" ? "Send ➤" : "Post ➤";
      const paint = () => {
        const isSent = frame.classList.contains("is-sent");
        action.textContent = isSent ? "✎ Edit" : sendLabel;
        action.classList.toggle("taskcard__frame-action--edit", isSent);
      };
      action.addEventListener("click", () => {
        if (frame.classList.contains("is-sent")) {
          frame.classList.remove("is-sent");
          paint();
          field.focus();
        } else {
          if (!field.value.trim()) { field.focus(); return; }
          sent.textContent = field.value;
          frame.classList.add("is-sent");
          paint();
        }
      });

      // Already-written work opens as a finished message / post.
      if (saved && saved.trim()) {
        sent.textContent = saved;
        frame.classList.add("is-sent");
      }
      paint();

      frame.append(field, sent, action);
      body.appendChild(frame);
      return;
    }

    const area = document.createElement("textarea");
    area.className = "taskcard__answer";
    area.rows = data.lines?.length ? 4 : 3;
    area.placeholder = "Write your answer…";
    area.dataset.answerKey = key;
    if (saved) area.value = saved;
    area.addEventListener("input", () => {
      setAnswer(ctx.unitId, ctx.sectionId, key, area.value);
    });
    body.appendChild(area);
  }
}

/** A paragraph may be a plain string or an array of glossary segments. */
function normalizeParagraphs(paragraphs) {
  return (paragraphs ?? []).map((p) => (typeof p === "string" ? [p] : p));
}

/* ================= shared chrome ================================ */

/**
 * Section shell: skewed label swatch + subtitle. When `challenge` is set
 * the section gets the gold star treatment (Step 4 bonus mini-project).
 * @param {string} accent
 * @param {string} label
 * @param {string} subtitle
 * @param {{ challenge?: boolean }} [opts]
 */
function sectionShell(accent, label, subtitle, { challenge = false } = {}) {
  const section = document.createElement("section");
  section.className = "journal__section" + (challenge ? " journal__section--challenge" : "");

  const head = document.createElement("div");
  head.className = "journal__section-head";

  const swatch = document.createElement("span");
  swatch.className = `journal__swatch journal__swatch--${accent}`;
  if (challenge) {
    const star = document.createElement("span");
    star.className = "journal__swatch-star";
    star.textContent = "★";
    star.setAttribute("aria-hidden", "true");
    swatch.append(star, document.createTextNode(label));
  } else {
    swatch.textContent = label;
  }

  const sub = document.createElement("span");
  sub.className = "journal__section-sub";
  sub.textContent = subtitle ?? "";

  head.append(swatch, sub);
  section.appendChild(head);
  return section;
}
