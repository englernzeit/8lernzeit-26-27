/**
 * The best days of your life (Unit 2) — Revision: "Stop! Check! Go!"
 *
 * The self-check before the class test: if-sentences type 2, the -ing form,
 * the high school words, then a revision card and a four-day revision plan.
 *
 *   Step 1 (LE)        — 5 if-gaps, 4 -ing gaps, 6 words, 2 own sentences
 *   Step 2 (G-Kurs)    — 8 / 6 / 8 / 3
 *   Step 3 (E-Kurs)    — the full set, 4 own sentences, + an objection
 *   Step 4 (Challenge) — Leo's Quiz Show over the whole unit
 */

/** Check 1 — if-sentences type 2 (the E-Kurs set; LE uses the first five). */
const IF_GAPS = [
  { hint: "If + Simple Past", segments: ["If I ", { answer: "were", accept: ["was"], size: 8 }, " a freshman again, I would join a club in the first week. (be)"] },
  { hint: "If + Simple Past", segments: ["If the cafeteria ", { answer: "sold", size: 8 }, " better food, more students would eat there. (sell)"] },
  { hint: "negative, If + Simple Past", segments: ["I would take the bus every day if it ", { answer: "weren't", accept: ["wasn't", "were not", "was not"], size: 10 }, " so expensive. (not be)"] },
  { hint: "If + Simple Past", segments: ["If my timetable ", { answer: "had", size: 7 }, " a free period, I would spend it in the library. (have)"] },
  { hint: "can → Simple Past", segments: ["If I ", { answer: "could", size: 8 }, " choose one new subject, I would take photography. (can)"] },
  { hint: "If + Simple Past", segments: ["We would win more games if our team ", { answer: "trained", size: 10 }, " twice a week. (train)"] },
  { hint: "negative, If + Simple Past", segments: ["If Beth ", { answer: "didn't play", accept: ["did not play"], size: 13 }, " soccer, she would have more time for the newspaper. (not play)"] },
  { hint: "the other half: would + infinitive", segments: ["I ", { answer: "would ask", size: 12 }, " the principal for a quiet room if I were you. (ask)"] },
];

/** Check 2 — the -ing form (the E-Kurs set; LE uses the first four). */
const ING_GAPS = [
  { hint: "good at + -ing", segments: ["I'm not very good at ", { answer: "remembering", size: 14 }, " names. (remember)"] },
  { hint: "-ing at the start of a sentence", segments: [{ answer: "Changing", size: 11 }, " rooms after every lesson is normal in the USA. (change)"] },
  { hint: "don't mind + -ing", segments: ["Tyler doesn't mind ", { answer: "getting", size: 10 }, " up early. (get)"] },
  { hint: "interested in + -ing", segments: ["Are you interested in ", { answer: "joining", size: 10 }, " the school band? (join)"] },
  { hint: "look forward to + -ing", segments: ["We're looking forward to ", { answer: "meeting", size: 10 }, " our partners. (meet)"] },
  { hint: "stop + -ing", segments: ["Please stop ", { answer: "talking", size: 10 }, " during the announcement! (talk)"] },
];

/** Check 3 — German → English (the E-Kurs set; LE uses the first six). */
const WORD_GAPS = [
  { de: "der Schulball", en: "prom", size: 9 },
  { de: "einschüchternd", en: "intimidating", size: 14 },
  { de: "der Redakteur / die Redakteurin", en: "editor", size: 10 },
  { de: "das Schließfach", en: "locker", size: 10 },
  { de: "die Schulleitung", en: "principal", size: 12 },
  { de: "die Tradition, der Brauch", en: "tradition", size: 12 },
  { de: "die (Schul-)Note", en: "grade", size: 9 },
  { de: "der Flur", en: "hallway", size: 11 },
];

const wordGaps = (n) =>
  WORD_GAPS.slice(0, n).map((row) => ({
    segments: [row.de + "  →  ", { answer: row.en, size: row.size }],
  }));

/** Check 5 — the revision card. */
const REVISION_CARD = [
  "if-sentences type 2 (If I had …, I would …)",
  "the -ing form after like, enjoy, don't mind, stop",
  "the -ing form after at, in, of, to, about",
  "the -ing form at the beginning of a sentence",
  "the high school words of this unit",
  "writing my own sentences with if and with -ing forms",
];

/** The recurring problem on this page. */
const PROBLEM =
  "THE PROBLEM: The class test is in four days. You have finished all the Lernzeit sheets, but when you look at your answers you see the same mistake again and again: after look forward to, good at, interested in, afraid of and get used to you keep writing the infinitive. You have about twenty minutes a day to revise.";

export default {
  title: "Stop! Check! Go!",

  /* ============ Shared reference — the two rules being tested ============ */
  guide: {
    label: "Before you start",
    subtitle: "The two grammar points of this unit — check them, then test yourself",
    numbered: false,
    types: [
      {
        name: "If-sentences type 2",
        tag: "not real",
        accent: "slate",
        formula: "If + Simple Past, … would + infinitive",
        example: "If I had more time, I would read more.",
        de: "Nach if steht das Simple Past, im anderen Satzteil would + Grundform. Nie „would“ im if-Satz!",
      },
      {
        name: "The -ing form",
        tag: "verbs · prepositions · subject",
        accent: "olive",
        formula: "enjoy / don't mind / stop + -ing · good at / interested in / look forward to + -ing",
        example: "I'm not very good at remembering names.",
        de: "Nach einer Präposition steht IMMER die -ing-Form — nie der Infinitiv mit to.",
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
          type: "gap-fill",
          kind: "Check 1",
          title: "If-sentences (type 2)",
          intro: "Put the verb into the right form. Remember: If + Simple Past, … would + infinitive.",
          help: "Merke: Nach if steht das Simple Past, im anderen Satzteil would + Grundform.",
          items: IF_GAPS.slice(0, 5),
        },
        {
          type: "gap-fill",
          kind: "Check 2",
          title: "The -ing form",
          intro: "Put the verb in brackets into the -ing form.",
          help: "Setze das Verb in Klammern in die -ing-Form.",
          items: ING_GAPS.slice(0, 4),
        },
        {
          type: "gap-fill",
          kind: "Check 3",
          title: "Words",
          intro: "Write the English word.",
          help: "Schreibe das englische Wort.",
          items: wordGaps(6),
        },
        {
          type: "written",
          kind: "Check 4",
          title: "Everything together",
          intro: "Write 2 sentences of your own.",
          help: "Schreibe 2 eigene Sätze.",
          answerLines: 1,
          questions: [
            { q: "One if-sentence type 2 about your school.", starter: "If my school …, I would …" },
            { q: "One sentence with an -ing form after a preposition.", starter: "I'm good at …" },
          ],
        },
        {
          type: "written",
          kind: "Check 5",
          title: "Your revision card",
          intro:
            "Compare with the answer sheet. Tick what is safe — then write down what you still need to practise.",
          help: "Kreuze an: Was sitzt? Schreibe dann auf, was du noch üben musst.",
          checklist: true,
          lines: REVISION_CARD,
          starters: ["I still need to practise …", "My plan for that: …"],
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM + " Sort the ideas, then press Check.",
          help: "In vier Tagen ist die Klassenarbeit. Du hast etwa zwanzig Minuten pro Tag.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We write the five phrases on a small card and look at it every morning.",
                "We write three example sentences with these phrases every day.",
                "We ask a friend to test us on exactly these five phrases.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We read the whole unit again from the beginning.",
                "We do nothing — the mistake is small.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your plan",
          intro: "Write your plan in 3 sentences. Use the sentence frame.",
          help: "Schreibe deinen Plan in 3 Sätzen.",
          starters: ["My idea is …", "This helps because …", "First, I …"],
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
          type: "gap-fill",
          kind: "Check 1",
          title: "If-sentences (type 2)",
          intro: "Put the verb into the right form. Remember: If + Simple Past, … would + infinitive.",
          help: "Nach if steht das Simple Past, im anderen Satzteil would + Grundform.",
          items: IF_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Check 2",
          title: "The -ing form",
          intro: "Put the verb in brackets into the -ing form.",
          help: "Setze das Verb in Klammern in die -ing-Form.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Check 3",
          title: "Words",
          intro: "Write the English word.",
          help: "Schreibe das englische Wort.",
          items: wordGaps(8),
        },
        {
          type: "written",
          kind: "Check 4",
          title: "Everything together",
          intro: "Write 3 sentences of your own.",
          help: "Schreibe 3 eigene Sätze.",
          answerLines: 1,
          questions: [
            { q: "One if-sentence type 2 about your school.", starter: "If my school …, I would …" },
            { q: "One sentence with an -ing form after a preposition.", starter: "I'm interested in …" },
            { q: "One sentence with a high school word from the unit.", starter: "At an American high school …" },
          ],
        },
        {
          type: "written",
          kind: "Check 5",
          title: "Your revision card",
          intro:
            "Compare with the answer sheet. Tick what is safe — then write down what you still need to practise.",
          help: "Kreuze an, was sitzt. Schreibe auf, was du noch üben musst.",
          checklist: true,
          lines: REVISION_CARD,
          starters: ["I still need to practise …", "My plan for that: …"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro: PROBLEM + " Collect two ideas.",
          help: "Sammle zwei Ideen.",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your plan",
          intro:
            "Choose your best idea and write your plan in 3 sentences: What do you do? Why does it help? What is the first step?",
          help: "Useful phrases: My plan is … · This helps because … · Every day I would … · First, I would … · Then …",
          starters: ["My plan is …", "This helps because …", "First, I would …"],
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
          type: "gap-fill",
          kind: "Check 1",
          title: "If-sentences (type 2)",
          intro: "Put the verb into the right form.",
          items: IF_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Check 2",
          title: "The -ing form",
          intro: "Put the verb in brackets into the -ing form.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Check 3",
          title: "Words",
          intro: "Write the English word.",
          items: wordGaps(8),
        },
        {
          type: "written",
          kind: "Check 4",
          title: "Everything together",
          intro: "Write 4 sentences of your own.",
          answerLines: 1,
          questions: [
            { q: "One if-sentence type 2 about your school.", starter: "If my school …, I would …" },
            { q: "One sentence with an -ing form after a preposition.", starter: "I'm looking forward to …" },
            { q: "One sentence with a high school word from the unit.", starter: "At an American high school …" },
            { q: "One sentence that begins with an -ing form.", starter: "Changing …" },
          ],
        },
        {
          type: "written",
          kind: "Check 5",
          title: "Your revision card",
          intro:
            "Compare with the answer sheet. Tick what is safe — then write down what you still need to practise and how.",
          checklist: true,
          lines: REVISION_CARD,
          starters: ["I still need to practise …", "My plan for that: …"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Plan your last four days",
          intro: PROBLEM + " Write your plan in 3 sentences.",
          starters: ["What I do: …", "Why it helps: …", "The first step: …"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "Somebody says: “Twenty minutes a day is far too little — you should read the whole unit again.” What do you answer?",
          help: "Useful phrases: That is true, but … · Reading again does not fix … · Twenty minutes on ONE mistake … · I already know the rest.",
          answerLines: 2,
          questions: [{ q: "Your answer to the objection:", starter: "That is true, but …" }],
        },
      ],
    },

    /* ================= STEP 4 — ★ Quiz show ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "quizshow-game",
          title: "Leo's Quiz Show",
          intro:
            "Lights, camera — test time! Leo fires twelve quick questions from the whole unit: if-sentences, the -ing form, high school words and the story of The Lion. Every right answer scores points and builds a 🔥 streak; a wrong tap breaks it. At the end you get a report card — see how test-ready you are, then beat your score!",
          marquee: "THE LION QUIZ SHOW",
          host: { name: "Leo the Lion", avatar: "🦁", sub: "mascot of The Lion" },
          rounds: [
            {
              name: "If-sentences type 2",
              icon: "💭",
              questions: [
                { q: "If I ___ a freshman again, I would join a club.", options: ["were", "would be", "am"], correct: 0, note: "If + Simple Past. For I / he / she, type 2 prefers “were”." },
                { q: "If the cafeteria ___ better food, more students would eat there.", options: ["sold", "would sell", "sells"], correct: 0, note: "Never “would” in the if-clause — use the Simple Past." },
                { q: "Which sentence is correct?", options: ["If I had a free period, I would go to the library.", "If I would have a free period, I would go to the library.", "If I have a free period, I would go to the library."], correct: 0, note: "if-clause = Simple Past, main clause = would + infinitive." },
              ],
            },
            {
              name: "The -ing form",
              icon: "🔁",
              questions: [
                { q: "I'm not very good at ___ names.", options: ["remembering", "to remember", "remember"], correct: 0, note: "After a preposition (at) English always uses the -ing form." },
                { q: "___ rooms after every lesson is normal in the USA.", options: ["Changing", "To change", "Change"], correct: 0, note: "At the start of a sentence the -ing form works like a noun." },
                { q: "We're looking forward to ___ our partners.", options: ["meeting", "meet", "to meet"], correct: 0, note: "“to” in look forward to is a preposition → -ing." },
                { q: "Which one is WRONG?", options: ["He is interested in to learn Spanish.", "He doesn't mind getting up early.", "Please stop talking!"], correct: 0, note: "interested in + -ing → “in learning Spanish”." },
              ],
            },
            {
              name: "High school words",
              icon: "🎒",
              questions: [
                { q: "A student in the LAST year of high school is a …", options: ["senior", "freshman", "junior"], correct: 0, note: "freshman → sophomore → junior → senior." },
                { q: "“das Schließfach” in English is …", options: ["locker", "hallway", "cafeteria"], correct: 0, note: "The locker is in the hallway." },
                { q: "A big dance for the older students is the …", options: ["prom", "homecoming", "assembly"], correct: 0, note: "Homecoming is a football game AND a dance; the prom is the big formal dance." },
              ],
            },
            {
              name: "The Lion",
              icon: "🦁",
              questions: [
                { q: "What did Maya's article show?", options: ["The school threw away about 200 kilos of food a week.", "The cafeteria food was too expensive.", "Students wanted a new gym."], correct: 0, note: "She gathered data for three weeks." },
                { q: "Why did Principal Snow want one sentence deleted?", options: ["The quote could have cost a kitchen worker her job.", "It was not true.", "The article was too long."], correct: 0, note: "The team printed it without the quote, but noted the source stayed anonymous." },
              ],
            },
          ],
          help: "★ Bonus: whatever you got wrong goes straight onto your revision card.",
        },
      ],
    },
  ],
};
