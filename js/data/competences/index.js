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
import nycReading from "./new-york-city-reading.js";
import nycListening from "./new-york-city-listening.js";
import nycVocabulary from "./new-york-city-vocabulary.js";
import nycSpeaking from "./new-york-city-speaking.js";
import nycRevision from "./new-york-city-revision.js";

import bdGrammar from "./best-days-grammar.js";
import bdReading from "./best-days-reading.js";
import bdVocabulary from "./best-days-vocabulary.js";
import bdMediation from "./best-days-mediation.js";
import bdWriting from "./best-days-writing.js";
import bdSpeaking from "./best-days-speaking.js";
import bdRevision from "./best-days-revision.js";
import bdListening from "./best-days-listening.js";

const CONTENT = {
  "new-york-city/grammar": nycGrammar,
  "new-york-city/writing": nycWriting,
  "new-york-city/reading": nycReading,
  "new-york-city/listening": nycListening,
  "new-york-city/vocabulary": nycVocabulary,
  "new-york-city/speaking": nycSpeaking,
  "new-york-city/revision": nycRevision,

  "best-days/grammar": bdGrammar,
  "best-days/reading": bdReading,
  "best-days/vocabulary": bdVocabulary,
  "best-days/mediation": bdMediation,
  "best-days/writing": bdWriting,
  "best-days/speaking": bdSpeaking,
  "best-days/revision": bdRevision,
  "best-days/listening": bdListening,
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
      key.startsWith(prefix) &&
      content?.pictureVocab?.courses?.some((c) => (c.count ?? c.cards?.length ?? 0) > 0),
  );
}
