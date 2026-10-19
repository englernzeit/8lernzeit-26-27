/**
 * The best days of your life (Unit 2) — Revision: everything on one page
 *
 * The last page before the class test: if-sentences type 2, the -ing form in
 * all three places, and the high school words of the unit.
 *
 *   Step 1 (LE)        — the homecoming festival: -ing forms, four if-gaps
 *                        with a word box, the eight words
 *   Step 2 (G-Kurs)    — six if-gaps, six -ing gaps, eight words, own sentences
 *   Step 3 (E-Kurs)    — eight if-gaps, plus a sentence that starts with -ing
 *   Step 4 (Challenge) — the revision plan for the last four days
 */

/** The eight words of this lesson. */
const WORDS = [
  {
    label: "The homecoming festival",
    accent: "ochre",
    pairs: [
      ["tradition", "die Tradition — something a school has always done"],
      ["Thanksgiving", "das Erntedankfest — the big American family holiday"],
      ["lion", "der Löwe — the animal on the school flag"],
      ["spirit", "die Stimmung — the feeling in a happy crowd"],
    ],
  },
  {
    label: "Four more",
    accent: "slate",
    pairs: [
      ["movie", "der Film — what you watch (AE)"],
      ["ban", "verbieten — to say that something is not allowed"],
      ["change", "wechseln, sich umziehen — to put other clothes on"],
      ["promise", "versprechen — to say you really will do it"],
    ],
  },
];

/** Everything on one page — the revision theory box. */
const THEORY = [
  "1 · if-sentence type 2 (not real): if + past → would + verb. If I had a locker, I would keep my books in it.",
  "2 · After a feeling word (like · love · enjoy · hate · don't mind · stop): + verb + ing. She enjoys playing in the school band.",
  "3 · After a small word (good at · interested in · afraid of · look forward to): + verb + ing. I'm good at remembering names.",
  "4 · The -ing form as the subject, at the start of a sentence: Changing rooms after every lesson is normal in the USA.",
  "WATCH OUT: “I look forward to see you.” is wrong — “I look forward to seeing you.” is right. After to in look forward to comes the -ing form. It is the most common mistake of this unit.",
];

/* ============ Step 1 (LE) ============ */

const LE_ING_GAPS = [
  { hint: "Picture 3 · like", segments: ["Tom likes ", { answer: "patting", size: 10 }, " the lion. (pat)"] },
  { hint: "Picture 4 · love", segments: ["The students love ", { answer: "waving", size: 9 }, " their flags. (wave)"] },
  { hint: "Picture 5 · enjoy", segments: ["They enjoy ", { answer: "watching", size: 11 }, " the movie. (watch)"] },
  { hint: "Picture 7 · don't mind", segments: ["Tom doesn't mind ", { answer: "changing", size: 11 }, " for sport. (change)"] },
];

const LE_IF_GAPS = [
  {
    hint: "1 · (be)",
    segments: ["If I ", { answer: "were", accept: ["was"], size: 8 }, " at the festival, I would eat a hot dog."],
  },
  {
    hint: "2 · (have)",
    segments: ["If the school ", { answer: "had", size: 7 }, " no lion, the students would be sad."],
  },
  {
    hint: "3 · (start)",
    segments: ["If the film ", { answer: "started", size: 9 }, " at six, we would be late."],
  },
  {
    hint: "4 · (be)",
    segments: ["If Tom ", { answer: "were", accept: ["was"], size: 8 }, " in the team, he would play today."],
  },
];

const LE_DE_EN = [
  { de: "die Tradition", en: "tradition" },
  { de: "das Erntedankfest", en: "Thanksgiving" },
  { de: "der Löwe", en: "lion" },
  { de: "die Stimmung", en: "spirit" },
  { de: "der Film", en: "movie" },
  { de: "verbieten", en: "ban" },
  { de: "sich umziehen", en: "change" },
  { de: "versprechen", en: "promise" },
];

/* ============ Steps 2 and 3 ============ */

/** Exercise 1 — if-sentences type 2. E-Kurs gets the last two as well. */
const IF_GAPS = [
  {
    hint: "1 · (be)",
    segments: ["If I ", { answer: "were", accept: ["was"], size: 8 }, " a freshman again, I would join a club in the first week."],
  },
  {
    hint: "2 · (sell)",
    segments: ["If the cafeteria ", { answer: "sold", size: 7 }, " better food, more students would eat there."],
  },
  {
    hint: "3 · (not be)",
    segments: ["I would take the bus every day if it ", { answer: "weren't", accept: ["wasn't", "were not", "was not"], size: 10 }, " so expensive."],
  },
  {
    hint: "4 · (have)",
    segments: ["If my timetable ", { answer: "had", size: 7 }, " a free period, I would spend it in the library."],
  },
  {
    hint: "5 · (can)",
    segments: ["If I ", { answer: "could", size: 8 }, " choose one new subject, I would take photography."],
  },
  {
    hint: "6 · (train)",
    segments: ["We would win more games if our team ", { answer: "trained", size: 9 }, " twice a week."],
  },
];

const IF_GAPS_EK = IF_GAPS.concat([
  {
    hint: "7 · (not play)",
    segments: ["If Beth ", { answer: "didn't play", accept: ["did not play"], size: 12 }, " soccer, she would have more time for the newspaper."],
  },
  {
    hint: "8 · (ask)",
    segments: ["I ", { answer: "would ask", size: 11 }, " the principal for a quiet room if I were you."],
  },
]);

/** Exercise 2 — the -ing form in all three places. */
const ING_GAPS = [
  { hint: "1 · good at", segments: ["I'm not very good at ", { answer: "remembering", size: 13 }, " names. (remember)"] },
  { hint: "2 · the subject", segments: [{ answer: "Changing", size: 11 }, " rooms after every lesson is normal in the USA. (change)"] },
  { hint: "3 · don't mind", segments: ["Tyler doesn't mind ", { answer: "getting", size: 10 }, " up early. (get)"] },
  { hint: "4 · interested in", segments: ["Are you interested in ", { answer: "joining", size: 10 }, " the school band? (join)"] },
  { hint: "5 · look forward to", segments: ["We're looking forward to ", { answer: "meeting", size: 10 }, " our partners. (meet)"] },
  { hint: "6 · stop", segments: ["Please stop ", { answer: "talking", size: 10 }, " during the announcement! (talk)"] },
];

/** Exercise 3 — the eight words of the whole unit. */
const DE_EN = [
  { de: "der Schulball", en: "prom" },
  { de: "einschüchternd", en: "intimidating" },
  { de: "der Redakteur / die Redakteurin", en: "editor" },
  { de: "das Schließfach", en: "locker" },
  { de: "die Schulleitung", en: "principal" },
  { de: "die Tradition, der Brauch", en: "tradition" },
  { de: "die (Schul-)Note", en: "grade", accept: ["mark"] },
  { de: "der Flur", en: "hallway" },
];

/* ============ The problem ============ */

const PROBLEM = {
  problem:
    "The class test is in four days. You keep making the same mistake: after good at and look forward to you write the infinitive. You have twenty minutes a day.",
  problemDe:
    "In vier Tagen ist die Klassenarbeit. Du machst immer denselben Fehler: nach good at und look forward to schreibst du den Infinitiv. Du hast zwanzig Minuten am Tag.",
  ideas: [
    "We read the whole unit again from the beginning.",
    "We write three example sentences with these phrases every day.",
    "We do nothing — the mistake is small.",
  ],
};

const LE_BANK =
  "twenty minutes is short · you practise the mistake · the whole unit is too much · the mistake comes back";

const LE_NOTE =
  "Richtig ist Idee 2. Die ganze Unit ist in zwanzig Minuten nicht zu schaffen, und nichts zu tun lässt den Fehler stehen. Beispiellösung: Idea 2 is best, because you practise the mistake.";

const GK_NOTE =
  "Bewertet wird die Begründung, nicht die Wahl. Idee 2 ist am stärksten: Sie übt genau den Fehler und passt in zwanzig Minuten. Idee 1 ist in vier Tagen nicht zu schaffen und übt zu 90 % Dinge, die schon sitzen. Idee 3 lässt den Fehler genau so stehen, wie er ist. Beispiellösung: Idea 2 is best, because I practise exactly the mistake I make, and three sentences take five minutes.";

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "TRADITION", hint: "die Tradition" },
  { word: "THANKSGIVING", hint: "das Erntedankfest" },
  { word: "SPIRIT", hint: "die Stimmung" },
  { word: "MOVIE", hint: "der Film (AE)" },
  { word: "PROMISE", hint: "versprechen" },
  { word: "LOCKER", hint: "das Schließfach" },
  { word: "HALLWAY", hint: "der Flur" },
  { word: "PRINCIPAL", hint: "die Schulleitung" },
  { word: "EDITOR", hint: "der·die Redakteur·in" },
  { word: "PROM", hint: "der Schulball" },
  { word: "FRESHMAN", hint: "im 1. Schuljahr" },
  { word: "CAFETERIA", hint: "die Mensa" },
  { word: "TIMETABLE", hint: "der Stundenplan" },
  { word: "PHOTOGRAPHY", hint: "das Schulfach Fotografie" },
  { word: "INTIMIDATING", hint: "einschüchternd" },
  { word: "HOMECOMING", hint: "das Schulfest" },
];

export default {
  title: "Everything on one page",

  /* ============ Shared reference — the revision box ============ */
  guide: {
    label: "Revision",
    subtitle: "The four things the class test asks for",
    numbered: false,
    types: [
      {
        name: "1 · if-sentence type 2",
        tag: "not real",
        accent: "ochre",
        formula: "if + past → would + verb",
        example: "If I had a locker, I would keep my books in it.",
        de: "Nach if steht die Vergangenheitsform, im Hauptsatz would + Grundform. if und would stehen nie im selben Satzteil.",
      },
      {
        name: "2 · After a feeling word",
        tag: "like · enjoy · stop",
        accent: "olive",
        formula: "like · love · enjoy · hate · don't mind · start · stop · keep",
        example: "She enjoys playing in the school band.",
        de: "Nach diesen Verben steht die -ing-Form.",
      },
      {
        name: "3 · After a preposition",
        tag: "at · in · of · to",
        accent: "slate",
        formula: "good at · interested in · afraid of · look forward to",
        example: "I'm good at remembering names.",
        de: "Nach to in look forward to steht die -ing-Form — der häufigste Fehler der Unit.",
      },
      {
        name: "4 · As the subject",
        tag: "at the start",
        accent: "coral",
        formula: "verb + ing at the start of the sentence",
        example: "Changing rooms after every lesson is normal in the USA.",
        de: "Die -ing-Form steht am Satzanfang und wirkt wie ein Nomen — danach folgt is.",
      },
    ],
  },

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
          title: "The homecoming festival — the words",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "Everything on one page",
          intro: "This is your revision page. Keep it next to you.",
          paragraphs: [THEORY[0], THEORY[1], THEORY[4]].map((l) => [l]),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "The -ing form",
          intro:
            "Write the -ing form of the verb in brackets. Example: The family likes eating (eat) together.",
          help: "Nach like, love, enjoy und don't mind steht die -ing-Form.",
          items: LE_ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "if-sentences",
          intro:
            "Put in the right word from the box. Example: If I had (have) more time, I would watch the film again.",
          help: "Nach if steht die Vergangenheitsform. were und was sind beide richtig.",
          bank: ["had", "started", "were", "were"],
          bankCap: "Word box",
          items: LE_IF_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "The words",
          intro: "Write the English word.",
          help: "Schreibe das englische Wort.",
          columns: 2,
          items: LE_DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, size: Math.max(9, w.en.length + 2) }],
          })),
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "The festival",
          intro:
            "Six places at the festival: 1 the stage · 2 the food stand · 3 the lion statue · 4 the sports field · 5 the photo wall · 6 the entrance. Write two sentences: what do the students like doing? Example: In place 1 the students like listening to the band.",
          help: "Nach dem Signalwort steht die -ing-Form.",
          starters: ["In place ___ the students like …", "In place ___ they enjoy …"],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Check yourself before the class test",
          intro: "Tick what you can do. Everything without a tick is what you revise.",
          help: "Kreuze an, was du kannst.",
          checklist: true,
          lines: [
            "if-sentences type 2 (If I had …, I would …)",
            "the -ing form after like, enjoy, don't mind, stop",
            "the high school words of this unit",
          ],
        },
        {
          type: "problem-solve",
          kind: "Problem lösen",
          title: "Which idea is best?",
          ...PROBLEM,
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
            "Guess the Unit 2 word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          type: "word-cards",
          kind: "Wortschatz",
          title: "The homecoming festival — the words",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "Everything on one page",
          intro: "This is your revision page. Keep it next to you.",
          paragraphs: THEORY.map((l) => [l]),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "if-sentences type 2",
          intro:
            "Write the verb from the brackets into the gap. After if you need the past form; in the other part of the sentence it is would + the basic form. Example: If I had (have) more time, I would join the band.",
          help: "were und was sind beide richtig. if und would stehen nie im selben Satzteil.",
          items: IF_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "The -ing form",
          intro:
            "Write the verb from the brackets into the gap in the -ing form. One word in each gap. Example: She is afraid of flying (fly).",
          help: "Nr. 2 beginnt den Satz — auch dort steht die -ing-Form, und danach folgt is.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "The words",
          intro: "Write the English word — one word for each line. All eight words are from this unit.",
          help: "Schreibe das englische Wort.",
          columns: 2,
          items: DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, accept: w.accept, size: Math.max(9, w.en.length + 2) }],
          })),
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 3 sentences of your own. Every sentence must really contain the structure that is named in front of the line.",
          help: "Beispiele: If our school had a swimming pool, I would swim every morning. · I'm interested in joining the school garden club.",
          answerLines: 2,
          questions: [
            { q: "one if-sentence type 2 about your school", starter: "If our school …, I would …" },
            { q: "one sentence with an -ing form after a preposition", starter: "I'm interested in …" },
            { q: "one sentence with a high school word from the unit", starter: "At an American high school …" },
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Check yourself before the class test",
          intro:
            "Tick a box only if you can really do it. Everything without a tick is what you practise in the last days before the class test.",
          help: "Dieser Teil wird nicht bewertet — er zeigt dir, was noch fehlt.",
          checklist: true,
          lines: [
            "if-sentences type 2 (If I had …, I would …)",
            "the -ing form after like, enjoy, don't mind, stop",
            "the -ing form after at, in, of, to, about",
            "the -ing form at the beginning of a sentence",
            "the high school words of this unit",
            "writing my own sentences with if and with -ing forms",
          ],
        },
        {
          type: "problem-solve",
          kind: "Problem lösen",
          title: "Which idea is best?",
          ...PROBLEM,
          note: GK_NOTE,
          help: "Es gibt keine einzig richtige Idee — bewertet wird deine Begründung.",
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the Unit 2 word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          type: "word-cards",
          kind: "Wortschatz",
          title: "The homecoming festival — the words",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "Everything on one page",
          intro: "This is your revision page. Keep it next to you.",
          paragraphs: THEORY.map((l) => [l]),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "if-sentences type 2",
          intro:
            "Write the verb from the brackets into the gap. After if you need the past form; in the other part of the sentence it is would + the basic form.",
          help: "Achtung bei Nr. 8: Dort steht der Hauptsatz vorne — also would + Grundform.",
          items: IF_GAPS_EK,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "The -ing form",
          intro:
            "Write the verb from the brackets into the gap in the -ing form. One word in each gap.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Übersetzen",
          title: "The words",
          intro: "Write the English word — one word for each line. All eight words are from this unit.",
          columns: 2,
          items: DE_EN.map((w, i) => ({
            hint: `${i + 1} · ${w.de}`,
            segments: [{ answer: w.en, accept: w.accept, size: Math.max(9, w.en.length + 2) }],
          })),
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 4 sentences of your own. Every sentence must really contain the structure that is named in front of the line.",
          help: "Beispiel für Nr. 4: Changing rooms after every lesson would be strange for me.",
          answerLines: 2,
          questions: [
            { q: "one if-sentence type 2 about your school", starter: "If our school …, I would …" },
            { q: "one sentence with an -ing form after a preposition", starter: "I'm interested in …" },
            { q: "one sentence with a high school word from the unit", starter: "At an American high school …" },
            { q: "one sentence that begins with an -ing form", starter: "…ing … is …" },
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Check yourself before the class test",
          intro:
            "Tick a box only if you can really do it. Everything without a tick is what you practise in the last days before the class test.",
          checklist: true,
          lines: [
            "if-sentences type 2 (If I had …, I would …)",
            "if-sentences where the main clause comes first",
            "the -ing form after like, enjoy, don't mind, stop",
            "the -ing form after at, in, of, to, about",
            "the -ing form at the beginning of a sentence",
            "the high school words of this unit",
            "writing my own sentences with if and with -ing forms",
          ],
        },
        {
          type: "problem-solve",
          kind: "Problem lösen · Challenge",
          title: "Which idea is best?",
          ...PROBLEM,
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
            "Guess the Unit 2 word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Your plan for the last four days",
          intro:
            "You have twenty minutes a day and four days left. Write your own revision plan: what you practise on each of the four days, and why exactly that. Use at least two if-sentences and two -ing forms in it.",
          min: 55,
          max: 110,
          placeholder: "Day 1 — three sentences with look forward to and good at, because …",
          chips: [
            "Day 1 — …",
            "If I practised … , I would …",
            "I'm not very good at …",
            "… takes only five minutes.",
            "On the last day I would …",
            "because I keep making this mistake",
          ],
          checklist: [
            "I have a plan for all four days.",
            "Each day fits into twenty minutes.",
            "I said WHY for at least two of the days.",
            "I used two if-sentences type 2.",
            "I used two -ing forms after a preposition.",
          ],
          help: "★ Bonus: swap plans with a partner. Would their plan fix YOUR mistake?",
        },
      ],
    },
  ],
};
