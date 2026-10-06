/**
 * Answers store — the explorer's name and task answers, in
 * localStorage (no backend). The name is one per device; answers
 * are keyed per unit/section so every competence page keeps its own.
 *
 * Task content mounts later; inputs it renders should either call
 * `setAnswer` or carry a `data-answer-key` attribute (the PDF
 * builder picks live DOM values up by that attribute too).
 */

const NAME_KEY = "explorer:name";

/** @returns {string} */
export function getName() {
  try {
    return localStorage.getItem(NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

/** @param {string} name */
export function setName(name) {
  try {
    localStorage.setItem(NAME_KEY, name.trim());
  } catch {
    /* storage unavailable — name just won't persist */
  }
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 */
function answersKey(unitId, sectionId) {
  return `explorer:answers:${unitId}:${sectionId}`;
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @returns {Record<string, string>} e.g. { "step1-task2": "..." }
 */
export function getAnswers(unitId, sectionId) {
  try {
    return JSON.parse(localStorage.getItem(answersKey(unitId, sectionId)) ?? "{}");
  } catch {
    return {};
  }
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @param {string} key    e.g. "step1-task2"
 * @param {string} value
 */
export function setAnswer(unitId, sectionId, key, value) {
  const all = getAnswers(unitId, sectionId);
  all[key] = value;
  try {
    localStorage.setItem(answersKey(unitId, sectionId), JSON.stringify(all));
  } catch {
    /* storage unavailable */
  }
}

/* --- Word Master score (X correct of N sentences) -------------- */
/* Scores are kept per course (e.g. "gkurs", "ekurs"); an empty course
   keeps the old single-drill key for backward compatibility. */

function wordMasterKey(unitId, sectionId, course = "") {
  return `explorer:wordmaster:${unitId}:${sectionId}${course ? `:${course}` : ""}`;
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @param {string} [course]
 * @returns {{correct: number, total: number} | null}
 */
export function getWordMasterScore(unitId, sectionId, course = "") {
  try {
    const raw = localStorage.getItem(wordMasterKey(unitId, sectionId, course));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @param {string} course
 * @param {{correct: number, total: number}} score
 */
export function setWordMasterScore(unitId, sectionId, course, score) {
  try {
    localStorage.setItem(wordMasterKey(unitId, sectionId, course), JSON.stringify(score));
  } catch {
    /* storage unavailable */
  }
}

/* --- Word Master answers (what the learner actually typed) ------ */
/* The score alone is not enough to resume a drill: reopening it used to
   rebuild an empty sheet. These keep the typed text per item, so a drill
   can be restored exactly as it was left. Items are keyed by a hash of the
   sentence (see itemKey in wordMaster.js), never by position — the drill
   reshuffles on every open. */

function wordMasterAnswersKey(unitId, sectionId, course = "") {
  return `explorer:wordmaster-answers:${unitId}:${sectionId}${course ? `:${course}` : ""}`;
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @param {string} [course]
 * @returns {Record<string, string>} itemKey → the text the learner typed
 */
export function getWordMasterAnswers(unitId, sectionId, course = "") {
  try {
    return JSON.parse(localStorage.getItem(wordMasterAnswersKey(unitId, sectionId, course)) ?? "{}");
  } catch {
    return {};
  }
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @param {string} course
 * @param {string} itemKey
 * @param {string} value
 */
export function setWordMasterAnswer(unitId, sectionId, course, itemKey, value) {
  const all = getWordMasterAnswers(unitId, sectionId, course);
  if (value) all[itemKey] = value;
  else delete all[itemKey];
  try {
    localStorage.setItem(wordMasterAnswersKey(unitId, sectionId, course), JSON.stringify(all));
  } catch {
    /* storage unavailable */
  }
}

/** Wipe one course's typed answers (the drill's "Reset all answers"). */
export function clearWordMasterAnswers(unitId, sectionId, course = "") {
  try {
    localStorage.removeItem(wordMasterAnswersKey(unitId, sectionId, course));
  } catch {
    /* storage unavailable */
  }
}
