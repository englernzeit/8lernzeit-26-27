/**
 * The best days of your life (Unit 2) — Vocabulary: high school words
 *
 *   Step 1 (LE)        — Tom goes to the prom: eight words in a short story,
 *                        German ↔ English, and the six places at the prom
 *   Step 2 (G-Kurs)    — definitions with a word box, German ↔ English,
 *                        explaining a word, and the "My first week" gap text
 *   Step 3 (E-Kurs)    — the same without the word boxes, all three
 *                        explanations, plus an objection
 *   Step 4 (Challenge) — write the glossary page for next year's guests
 */

/* ============ Step 1 (LE) — Tom goes to the prom ============ */

const LE_WORDS = [
  {
    label: "The evening itself",
    accent: "coral",
    pairs: [
      ["prom", "der Schulball — a big dance for the older students"],
      ["formal", "festlich, formell — a suit or a dress, not jeans"],
      ["dress", "das Kleid — what Lisa buys for the evening"],
      ["date", "die Verabredung — the person you go with"],
    ],
  },
  {
    label: "Money and marks",
    accent: "olive",
    pairs: [
      ["photographer", "der·die Fotograf·in — the person who takes the pictures"],
      ["fortune", "ein Vermögen — a very large amount of money"],
      ["rent", "leihen, mieten — to pay for something you give back"],
      ["grade", "die Note — what you get for a test (AE)"],
    ],
  },
];

/** Exercise 1 (LE) — the story of the prom evening, with a word box. */
const LE_STORY_GAPS = [
  {
    hint: "1 · the example",
    segments: ["In October our school has a big party. It is the prom."],
  },
  {
    hint: "2 · what everybody wears",
    segments: ["At the prom everybody wears ", { answer: "formal", size: 9 }, " clothes: a suit or a dress."],
  },
  {
    hint: "3 · Lisa",
    segments: ["Lisa buys a long green ", { answer: "dress", size: 8 }, " for the evening."],
  },
  {
    hint: "4 · Mia",
    segments: ["Tom asks Mia to come with him. She is his ", { answer: "date", size: 7 }, "."],
  },
  {
    hint: "5 · every couple",
    segments: ["A ", { answer: "photographer", size: 14 }, " takes a picture of every couple."],
  },
  {
    hint: "6 · a new suit",
    segments: ["A new suit costs a ", { answer: "fortune", size: 9 }, " — and Tom has only ten dollars."],
  },
  {
    hint: "7 · Tom's solution",
    segments: ["So Tom does not buy a suit. He can ", { answer: "rent", size: 7 }, " one for one evening."],
  },
  {
    hint: "8 · the English test",
    segments: ["In the morning Tom gets a very good ", { answer: "grade", size: 8 }, " for his English test."],
  },
];

/** Exercise 2 (LE) — German → English, the same eight words. */
const LE_DE_EN = [
  { de: "der Schulball", en: "prom" },
  { de: "das Kleid", en: "dress" },
  { de: "die Verabredung", en: "date" },
  { de: "ein Vermögen", en: "fortune" },
  { de: "der·die Fotograf·in", en: "photographer" },
  { de: "die Note", en: "grade" },
  { de: "leihen, mieten", en: "rent" },
  { de: "festlich, formell", en: "formal" },
];

/* ============ Steps 2 and 3 — the high school words ============ */

/** Who is who at an American high school — help for every exercise. */
const FOUR_YEARS = [
  {
    label: "The four years",
    accent: "slate",
    pairs: [
      ["freshman", "9th grade — the first year · im 1. Jahr"],
      ["sophomore", "10th grade — the second year · im 2. Jahr"],
      ["junior", "11th grade — the third year · im vorletzten Jahr"],
      ["senior", "12th grade — the last year · im letzten Jahr"],
    ],
  },
  {
    label: "Places and people",
    accent: "olive",
    pairs: [
      ["locker", "das Schließfach"],
      ["hallway", "der Flur"],
      ["cafeteria", "die Mensa"],
      ["library", "die Bücherei"],
      ["gym", "die Turnhalle"],
      ["principal", "die Schulleitung"],
    ],
  },
];

/** Exercise 1 — a definition, and the word that fits it. */
const DEFINITIONS = {
  options: [
    "community service",
    "contract",
    "elevator",
    "fortune",
    "hallway",
    "intimidate",
    "photographer",
    "prom",
    "promise",
    "tradition",
  ],
  items: [
    { left: "A very large amount of money.", answer: "fortune" },
    { left: "A big dance for the older students, with formal clothes and a band.", answer: "prom" },
    { left: "To make somebody feel small and nervous without really wanting to.", answer: "intimidate" },
    { left: "The person who takes the pictures for a newspaper or a magazine.", answer: "photographer" },
    { left: "Work that you do for other people in your town without getting money for it.", answer: "community service" },
    { left: "The long room with the lockers that connects the classrooms.", answer: "hallway" },
    { left: "A paper that two people sign when they agree about something.", answer: "contract" },
    { left: "Something that a school has done in the same way for many years.", answer: "tradition" },
  ],
};

/** Exercise 2 — German → English (G-Kurs and E-Kurs). */
const DE_EN = [
  { de: "der Aufzug", en: "elevator", accept: ["lift"] },
  { de: "die (Schul-)Note", en: "grade", accept: ["mark"] },
  { de: "versprechen", en: "promise" },
  { de: "die Pause", en: "break" },
  { de: "sich benehmen", en: "behave" },
  { de: "die Durchsage", en: "announcement" },
  { de: "beeindrucken", en: "impress" },
  { de: "der Redakteur / die Redakteurin", en: "editor" },
];

/** Exercise 4 — "My first week", eight gaps in one connected text. */
const FIRST_WEEK = [
  {
    hint: "1 · how everything felt",
    segments: ["I'm new at this school, so at the beginning everything was a bit ", { answer: "intimidating", size: 14 }, "."],
  },
  {
    hint: "2 · over the loudspeaker",
    segments: ["On Monday morning a long ", { answer: "announcement", size: 14 }, " over the loudspeaker told us about all the clubs."],
  },
  {
    hint: "3 · who decides what goes in the paper",
    segments: ["I'd like to work for the school paper, so I talked to the ", { answer: "editor", size: 9 }, "."],
  },
  {
    hint: "4 · who takes the pictures",
    segments: ["She said I could take the pictures, because the team needs a ", { answer: "photographer", size: 14 }, "."],
  },
  {
    hint: "5 · a game and a dance on the same day",
    segments: ["In October there is a big ", { answer: "tradition", size: 11 }, " at this school: a football game and a dance on the same day."],
  },
  {
    hint: "6 · her last year here",
    segments: ["My host sister is a ", { answer: "senior", size: 9 }, ", so this is her last year here."],
  },
  {
    hint: "7 · unpaid work for other people",
    segments: ["On Fridays I do some ", { answer: "community service", size: 18 }, " at the animal shelter."],
  },
  {
    hint: "8 · the paper you sign",
    segments: ["And yesterday I signed the ", { answer: "contract", size: 10 }, " for the dance: no alcohol and good behaviour."],
  },
];

const FIRST_WEEK_BANK = [
  "announcement",
  "community service",
  "contract",
  "editor",
  "intimidating",
  "photographer",
  "senior",
  "tradition",
];

/* ============ The problems ============ */

const LE_PROBLEM = {
  problem:
    "Tom wants to go to the prom. A new suit costs a fortune, and he has only ten dollars.",
  problemDe:
    "Tom will zum Schulball. Ein neuer Anzug kostet ein Vermögen, und er hat nur zehn Dollar.",
  ideas: [
    "He buys a new suit.",
    "He rents a suit for one evening.",
    "He stays at home.",
  ],
};

const LE_BANK =
  "it is much cheaper · he needs it only once · he has no money · then he misses the party";

const LE_NOTE =
  "Richtig ist Idee 2. Kaufen kann er nicht bezahlen, und zu Hause bleiben löst nichts. Beispiellösung: Idea 2 is best, because it is much cheaper.";

const GK_PROBLEM = {
  problem:
    "Tyler is an exchange student from Boston. He has been in your class for a week, and in every break he stands alone.",
  problemDe:
    "Tyler ist Austauschschüler aus Boston. Er ist seit einer Woche in deiner Klasse und steht in jeder Pause allein.",
  ideas: [
    "A poster with five easy phrases for the breaks.",
    "Two students sit with him at lunch every day.",
    "We wait until he talks to us first.",
  ],
};

const GK_NOTE =
  "Bewertet wird die Begründung, nicht die Wahl. Idee 2 ist am stärksten: Sie wirkt sofort und Tyler muss nichts selbst anfangen. Idee 1 hilft allen, braucht aber Zeit. Idee 3 ist die schwächste — genau das Warten ist ja das Problem. Beispiellösung: Idea 2 is best, because then Tyler does not have to start a conversation alone.";

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "PROM", hint: "der Schulball" },
  { word: "FORMAL", hint: "festlich, formell" },
  { word: "FORTUNE", hint: "ein Vermögen" },
  { word: "PHOTOGRAPHER", hint: "der·die Fotograf·in" },
  { word: "GRADE", hint: "die Note (AE)" },
  { word: "ELEVATOR", hint: "der Aufzug (AE)" },
  { word: "EDITOR", hint: "der·die Redakteur·in" },
  { word: "CONTRACT", hint: "der Vertrag" },
  { word: "TRADITION", hint: "die Tradition" },
  { word: "PRINCIPAL", hint: "die Schulleitung" },
  { word: "SOPHOMORE", hint: "im 2. Jahr" },
  { word: "JUNIOR", hint: "im vorletzten Jahr" },
  { word: "PROMISE", hint: "versprechen" },
  { word: "BEHAVE", hint: "sich benehmen" },
  { word: "IMPRESS", hint: "beeindrucken" },
  { word: "INTIMIDATE", hint: "einschüchtern" },
];

export default {
  title: "High school words",

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "LE",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "word-cards",
          kind: "Wortschatz",
          title: "Tom goes to the prom — the words",
          intro:
            "Eight words. Say the meaning out loud first, then check — and later do it the other way round.",
          sections: LE_WORDS,
        },
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Which of the eight words is the hardest for you? Write it down.",
          help: "Welches Wort ist für dich am schwersten?",
          starters: ["The hardest word for me is …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "The evening of the prom",
          intro: "Put the right word from the box into each gap. The first sentence is the example.",
          help: "Setze in jede Lücke das richtige Wort aus dem Kasten.",
          bank: ["date", "dress", "formal", "fortune", "grade", "photographer", "rent"],
          bankCap: "Word box",
          items: LE_STORY_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "German and English",
          intro: "Write the English word. Try it from memory first.",
          help: "Schreibe das englische Wort. Versuche es erst aus dem Kopf.",
          columns: 2,
          items: LE_DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, size: Math.max(8, w.en.length + 2) }],
          })),
        },
        {
          type: "multiple-choice",
          kind: "Welcher Ort?",
          title: "Where is it?",
          intro:
            "Six places at the prom: 1 the cloakroom · 2 the photo corner · 3 the dance floor · 4 the drinks table · 5 the stage · 6 the car park. Example: “The band is playing on the stage.” → 5",
          help: "Um welchen Ort geht es? Wähle die Nummer.",
          shuffle: false,
          questions: [
            { q: "The photographer takes a picture of two students.", options: ["1 the cloakroom", "2 the photo corner", "4 the drinks table", "6 the car park"], correct: 1 },
            { q: "The students arrive in formal clothes and leave their coats.", options: ["3 the dance floor", "5 the stage", "1 the cloakroom", "2 the photo corner"], correct: 2 },
            { q: "A girl in a long dress is dancing.", options: ["3 the dance floor", "4 the drinks table", "6 the car park", "1 the cloakroom"], correct: 0 },
            { q: "A car that you can rent brings the students to the prom.", options: ["5 the stage", "6 the car park", "2 the photo corner", "3 the dance floor"], correct: 1 },
          ],
        },
        {
          type: "problem-solve",
          kind: "Problem lösen",
          title: "Which idea is best?",
          ...LE_PROBLEM,
          best: 1,
          bank: LE_BANK,
          note: LE_NOTE,
          help: "Tippe eine Idee an und ergänze dann den Satz.",
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
          words: GAME_WORDS,
        },
      ],
    },

    /* ================= STEP 2 — G-Kurs ================= */
    {
      step: 2,
      subtitle: "G-Kurs",
      accent: "olive",
      layout: "spread",
      cards: [
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Who is who at an American high school",
          intro: "Keep this next to you — you need it for every exercise on this page.",
          sections: FOUR_YEARS,
        },
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Write two English words that you already know about an American high school.",
          help: "Schreibe zwei englische Wörter, die du schon kennst.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "match-up",
          kind: "Definitionen",
          title: "Find the word",
          intro:
            "Read the definition and choose the word from the list. Two words from the list are left over. Example: the room where you do sport → gym.",
          help: "Zwei Wörter aus der Liste bleiben übrig.",
          options: DEFINITIONS.options,
          items: DEFINITIONS.items,
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "German and English",
          intro: "Write the English word — one word for each line.",
          help: "Schreibe das englische Wort in die Lücke.",
          columns: 2,
          items: DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, accept: w.accept, size: Math.max(8, w.en.length + 2) }],
          })),
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain the word",
          intro:
            "Choose TWO of the three words and explain each one in one full sentence. The word itself must not appear in your explanation. Patterns: A … is a … where/that … · A … is somebody who … · … is a day when …",
          help: "Falsch: „A locker is a locker for your books.“ Richtig: „A locker is a small cupboard for your books.“",
          answerLines: 2,
          questions: [
            { q: "locker", starter: "A locker is a small cupboard where …" },
            { q: "homecoming", starter: "Homecoming is a day when …" },
            { q: "freshman", starter: "A freshman is a student who …" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lückentext",
          title: "My first week",
          intro: "Write one word from the box into each gap. Every word is used once.",
          help: "Jedes Wort aus dem Kasten wird genau einmal gebraucht.",
          bank: FIRST_WEEK_BANK,
          bankCap: "Word box",
          items: FIRST_WEEK,
        },
        {
          type: "problem-solve",
          kind: "Problem lösen",
          title: "Which idea is best?",
          ...GK_PROBLEM,
          note: GK_NOTE,
          help: "Es gibt keine einzig richtige Idee — bewertet wird deine Begründung.",
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
          words: GAME_WORDS,
        },
      ],
    },

    /* ================= STEP 3 — E-Kurs ================= */
    {
      step: 3,
      subtitle: "E-Kurs",
      accent: "slate",
      layout: "spread",
      cards: [
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Who is who at an American high school",
          intro: "Keep this next to you — you need it for every exercise on this page.",
          sections: FOUR_YEARS,
        },
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Write two English words that you already know about an American high school.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "gap-fill",
          kind: "Definitionen",
          title: "Find the word",
          intro:
            "Read the definition and write the word that fits. There is no word box — write it from memory. Example: the room where you do sport → gym.",
          help: "Kein Wortkasten — schreibe aus dem Kopf.",
          items: DEFINITIONS.items.map((it, i) => ({
            hint: `${i + 1} · ${it.left}`,
            segments: [{ answer: it.answer, size: Math.max(10, it.answer.length + 2) }],
          })),
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "German and English",
          intro: "Write the English word — one word for each line.",
          columns: 2,
          items: DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, accept: w.accept, size: Math.max(8, w.en.length + 2) }],
          })),
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain the word",
          intro:
            "Explain ALL THREE words, each in one full sentence of your own. The word itself must not appear in your explanation.",
          help: "Muster: A … is a … where/that … · A … is somebody who … · … is a day when …",
          answerLines: 2,
          questions: [
            { q: "locker", starter: "A locker is …" },
            { q: "homecoming", starter: "Homecoming is …" },
            { q: "freshman", starter: "A freshman is …" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lückentext",
          title: "My first week",
          intro: "Write one high school word into each gap. There is no word box.",
          help: "Kein Wortkasten — die Wörter stehen alle in dieser Unit.",
          items: FIRST_WEEK,
        },
        {
          type: "problem-solve",
          kind: "Problem lösen · Challenge",
          title: "Which idea is best?",
          ...GK_PROBLEM,
          objection: true,
          note: GK_NOTE,
          help: "Zwei Sätze: einer für deine Wahl, einer gegen eine andere Idee.",
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
          words: GAME_WORDS,
        },
      ],
    },

    /* ================= STEP 4 — ★ Creative challenge ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "essay-editor",
          kind: "Kreativ · Challenge",
          title: "A glossary for next year's guests",
          intro:
            "Next year new guests arrive from Boston. Write them a short glossary of SIX German school words they will hear every day — each one explained in English, in one sentence, without using the German word itself in the explanation.",
          min: 60,
          max: 120,
          placeholder: "Pause — This is the time between two lessons, when …",
          chips: [
            "This is the time when …",
            "This is a room where …",
            "This is somebody who …",
            "You need this if you want to …",
            "It is a bit like … in the USA.",
            "Don't worry — it only means …",
          ],
          checklist: [
            "I explained six words.",
            "Every explanation is one full sentence.",
            "I never used the German word inside the explanation.",
            "I used a pattern: a thing · a person · a day.",
            "A guest who knows no German could understand it.",
          ],
          help: "★ Bonus: read one explanation to a partner without the word. Can they guess which word you mean?",
        },
      ],
    },
  ],
};
