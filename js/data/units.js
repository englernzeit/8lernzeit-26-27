/**
 * Unit / section configuration — single source of truth for navigation.
 *
 * The four units are the four lit regions of the night island on the
 * homepage map plate (assets/map/map-plate.png):
 *
 *   1  In New York City            — neon skyline, north-west headland
 *   2  The best days of your life  — school village, north-east ridge
 *   3  On the road to California   — coastal highway, west shore
 *   4  Stories from the Deep South — bayou, south-east swamp
 *
 * `pin` is where the glowing map pin's stem tip sits (% of the stage);
 * `card` is the top-left of its glass info card. Both are authored
 * against the plate art — move them together or the pin/card pair
 * drifts off its region.
 *
 * All four units are working shells (spec: build-in-stages rule).
 * `sections` are the 7 competence pages of a unit; they render the
 * shared "coming soon" template until content is supplied.
 */

/** The 7 competence pages every unit gets. */
const competenceSections = () => [
  { id: "reading", label: "Reading" },
  { id: "listening", label: "Listening" },
  { id: "grammar", label: "Grammar" },
  { id: "writing", label: "Writing" },
  { id: "vocabulary", label: "Vocabulary" },
  { id: "speaking", label: "Speaking" },
  { id: "revision", label: "Revision" },
];

export const UNITS = [
  {
    id: "new-york-city",
    number: 1,
    label: "In New York City",
    tagline: "Skyscrapers, subways and neon avenues",
    desc: "Cross skyscrapers, subway sounds, and neon-lit avenues.",
    icon: "assets/svg/ico-002-skyline.svg",
    pin: "assets/svg/pin-01.svg",
    pinPos: { x: 29.5, y: 33 },
    cardPos: { x: 31.7, y: 11.7 },
    sections: competenceSections(),
  },
  {
    id: "best-days",
    number: 2,
    label: "The best days of your life",
    tagline: "School halls, friendships, first plans",
    desc: "School halls, friendships, and unforgettable moments.",
    icon: "assets/svg/ico-003-school.svg",
    pin: "assets/svg/pin-02.svg",
    pinPos: { x: 70, y: 23 },
    cardPos: { x: 61.9, y: 24.9 },
    sections: competenceSections(),
  },
  {
    id: "california",
    number: 3,
    label: "On the road to California",
    tagline: "Open highways and golden sunsets",
    desc: "Pacific ocean views, open highways, and golden sunsets.",
    icon: "assets/svg/ico-004-palm-waves.svg",
    pin: "assets/svg/pin-03.svg",
    pinPos: { x: 38, y: 70 },
    cardPos: { x: 42.0, y: 35.4 },
    sections: competenceSections(),
  },
  {
    id: "deep-south",
    number: 4,
    label: "Stories from the Deep South",
    tagline: "Bayou nights and river tales",
    desc: "Mossy oak trees, jazz rhythms, and rich river tales.",
    icon: "assets/svg/ico-005-oak.svg",
    pin: "assets/svg/pin-04.svg",
    pinPos: { x: 63, y: 76 },
    cardPos: { x: 68.7, y: 49.0 },
    sections: competenceSections(),
  },
];

/** @param {string} id */
export function getUnit(id) {
  return UNITS.find((unit) => unit.id === id) ?? null;
}

/**
 * @param {string} unitId
 * @param {string} sectionId
 */
export function getSection(unitId, sectionId) {
  const unit = getUnit(unitId);
  return unit?.sections.find((section) => section.id === sectionId) ?? null;
}
