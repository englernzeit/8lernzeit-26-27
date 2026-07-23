/**
 * Competence content registry.
 *
 * Every competence page shares the same layout; this registry supplies
 * its content. Nothing is registered yet (build-in-stages rule), so all
 * 28 pages render the shared chrome with "coming soon" cards.
 *
 * To add a page: write a module in this folder that default-exports the
 * content object, import it, and register it under `unitId/sectionId`
 * (ids come from js/data/units.js), e.g.
 *
 *   import nycReading from "./new-york-city-reading.js";
 *   const CONTENT = { "new-york-city/reading": nycReading };
 */

import nycGrammar from "./new-york-city-grammar.js";
import nycWriting from "./new-york-city-writing.js";

const CONTENT = {
  "new-york-city/grammar": nycGrammar,
  "new-york-city/writing": nycWriting,
};

/**
 * @param {string} unitId
 * @param {string} sectionId
 * @returns {object | null}
 */
export function getCompetenceContent(unitId, sectionId) {
  return CONTENT[`${unitId}/${sectionId}`] ?? null;
}

/**
 * True if any page in the unit ships a Picture Vocabulary deck. Word
 * Master is only offered in units that have picture vocabulary.
 * @param {string} unitId
 */
export function unitHasPictureVocab(unitId) {
  const prefix = `${unitId}/`;
  return Object.entries(CONTENT).some(
    ([key, content]) =>
      key.startsWith(prefix) && content?.pictureVocab?.courses?.some((c) => c.count > 0),
  );
}
