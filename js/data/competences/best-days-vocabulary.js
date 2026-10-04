/**
 * The best days of your life (Unit 2) — Vocabulary: "High school words"
 * (the four American school years · places and people · school life).
 *
 *   Step 1 (LE)        — word boxes everywhere, 6 definitions, one explanation
 *   Step 2 (G-Kurs)    — 8 definitions, two explanations
 *   Step 3 (E-Kurs)    — no word boxes at all, all three explanations
 *   Step 4 (Challenge) — Monster's Lunch with this unit's school words
 */

/** The "My first week" cloze — identical at every level (LE/GK get a word box). */
const FIRST_WEEK = [
  { hint: "a bit frightening", segments: ["I'm new at this school, so at the beginning everything was a bit ", { answer: "intimidating", size: 14 }, "."] },
  { hint: "over the loudspeaker", segments: ["On Monday morning a long ", { answer: "announcement", size: 14 }, " over the loudspeaker told us about all the clubs."] },
  { hint: "the person in charge of the paper", segments: ["I'd like to work for the school paper, so I talked to the ", { answer: "editor", size: 10 }, "."] },
  { hint: "the person who takes the pictures", segments: ["She said I could take the pictures, because the team needs a ", { answer: "photographer", size: 14 }, "."] },
  { hint: "something a school has always done", segments: ["In October there is a big ", { answer: "tradition", size: 12 }, " at this school: a football game and a dance on the same day."] },
  { hint: "a student in the last year", segments: ["My host sister is a ", { answer: "senior", size: 10 }, ", so this is her last year here."] },
  { hint: "unpaid work for other people", segments: ["On Fridays I do some ", { answer: "community service", size: 18 }, " at the animal shelter."] },
  { hint: "a paper you sign", segments: ["And yesterday I signed the ", { answer: "contract", size: 11 }, " for the dance: no alcohol and good behaviour."] },
];

/** The word box for the "My first week" cloze (LE and G-Kurs only). */
const FIRST_WEEK_BANK = [
  "announcement", "community service", "contract", "editor",
  "intimidating", "photographer", "senior", "tradition",
];

/** German → English, the full list (LE uses the first six). */
const DE_EN = [
  { de: "der Aufzug", en: "elevator", size: 12 },
  { de: "die (Schul-)Note", en: "grade", size: 10 },
  { de: "versprechen", en: "promise", size: 11 },
  { de: "die Pause", en: "break", size: 10 },
  { de: "sich benehmen", en: "behave", size: 10 },
  { de: "die Durchsage", en: "announcement", size: 14 },
  { de: "beeindrucken", en: "impress", size: 11 },
  { de: "der Redakteur / die Redakteurin", en: "editor", size: 10 },
];

/** Build the German → English gap rows for the first `n` entries. */
const deEnGaps = (n) =>
  DE_EN.slice(0, n).map((row) => ({
    segments: [row.de + "  →  ", { answer: row.en, size: row.size }],
  }));

/** The eight definitions (E-Kurs types them with no word box). */
const DEFINITIONS = [
  { def: "A very large amount of money.", word: "fortune", size: 11 },
  { def: "A big dance for the older students, with formal clothes and a band.", word: "prom", size: 9 },
  { def: "To make somebody feel small and nervous without really wanting to.", word: "intimidate", size: 13 },
  { def: "The person who takes the pictures for a newspaper or a magazine.", word: "photographer", size: 14 },
  { def: "Work that you do for other people in your town without getting money for it.", word: "community service", size: 18 },
  { def: "The long room with the lockers that connects the classrooms.", word: "hallway", size: 11 },
  { def: "A paper that two people sign when they agree about something.", word: "contract", size: 11 },
  { def: "Something that a school has done in the same way for many years.", word: "tradition", size: 12 },
];

export default {
  title: "High school words",

  /* ============ Shared reference — who is who at a high school ============ */
  guide: {
    label: "High School",
    subtitle: "Who is who — and where everything is",
    numbered: false,
    types: [
      {
        name: "freshman",
        tag: "9th grade",
        accent: "olive",
        formula: "the first year",
        example: "My brother is a freshman — he started in September.",
        de: "Schüler/in im 1. Jahr",
      },
      {
        name: "sophomore",
        tag: "10th grade",
        accent: "teal",
        formula: "the second year",
        example: "As a sophomore you already know the building.",
        de: "Schüler/in im 2. Jahr",
      },
      {
        name: "junior",
        tag: "11th grade",
        accent: "slate",
        formula: "the third year",
        example: "Juniors organise the prom.",
        de: "Schüler/in im vorletzten Jahr",
      },
      {
        name: "senior",
        tag: "12th grade",
        accent: "coral",
        formula: "the last year",
        example: "My host sister is a senior, so this is her last year.",
        de: "Schüler/in im letzten Schuljahr",
      },
    ],
    tensesLabel: "Places and people at school",
    tenses: [
      { tense: "locker", use: "the small cupboard where you keep your things", example: "My locker is in the hallway.", accent: "olive", signals: "das Schließfach" },
      { tense: "hallway", use: "the long room that connects the classrooms", accent: "slate", signals: "der Flur" },
      { tense: "cafeteria", use: "where you have lunch", accent: "ochre", signals: "die Mensa" },
      { tense: "library", use: "where you borrow books and work quietly", accent: "teal", signals: "die Bücherei" },
      { tense: "gym", use: "where you do sport", accent: "coral", signals: "die Turnhalle" },
      { tense: "principal", use: "the head of the school", accent: "olive", signals: "die Schulleitung" },
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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Write down two words you already know about an American high school.",
          help: "Schreibe zwei Wörter auf, die du über eine amerikanische High School schon kennst.",
          starters: ["Word 1 —", "Word 2 —"],
        },
        {
          type: "match-up",
          kind: "Verbinden",
          title: "Find the word",
          intro: "Which word fits which definition? Two words are left over.",
          help: "Ordne die Wörter den Umschreibungen zu. Zwei Wörter bleiben übrig.",
          options: [
            "community service", "contract", "fortune", "hallway",
            "intimidate", "photographer", "prom", "tradition",
          ],
          items: DEFINITIONS.slice(0, 6).map((d) => ({ left: d.def, answer: d.word })),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "German and English",
          intro: "Write the English word next to the German one.",
          help: "Schreibe das englische Wort neben das deutsche.",
          items: deEnGaps(6),
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain the word",
          intro:
            "Choose ONE of the three words and finish that sentence. Leave the other two empty.",
          help: "Erkläre EINES der Wörter in einem ganzen Satz.",
          starters: [
            "A locker is a …",
            "Homecoming is a day when …",
            "A freshman is a student who …",
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "My first week",
          intro: "Complete the text with the words from the box.",
          help: "Setze die fehlenden Wörter aus dem Kasten ein.",
          bank: FIRST_WEEK_BANK,
          bankCap: "Word box",
          items: FIRST_WEEK,
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro:
            "THE PROBLEM: Tyler, an exchange student from Boston, has been in your class for a week. In lessons he understands a lot, but in the breaks he always stands alone. He says: “Nobody talks to me — I think everybody is afraid of making mistakes.” He goes home in two weeks. Sort the ideas, then press Check.",
          help: "Tyler steht in jeder Pause allein. Die anderen trauen sich nicht, Englisch zu sprechen.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We put up a poster with five easy phrases for the breaks.",
                "Two students sit with him at lunch every day.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We write him an email in German.",
                "We tell him to speak German with us.",
                "We wait until he talks to us first.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro: "Write your solution in 3 sentences. Use the sentence frame.",
          help: "Schreibe deine Lösung in 3 Sätzen. Nutze das Satzgerüst.",
          starters: ["Our idea is …", "This helps because …", "First, we …"],
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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Write down two words you already know about an American high school.",
          help: "Schreibe zwei Wörter auf, die du schon kennst.",
          starters: ["Word 1 —", "Word 2 —"],
        },
        {
          type: "match-up",
          kind: "Verbinden",
          title: "Find the word",
          intro: "Match the words with the definitions. Two words are left over.",
          help: "Ordne die Wörter den Umschreibungen zu. Es gibt zwei Wörter zu viel.",
          options: [
            "community service", "contract", "elevator", "fortune", "hallway",
            "intimidate", "photographer", "prom", "promise", "tradition",
          ],
          items: DEFINITIONS.map((d) => ({ left: d.def, answer: d.word })),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "German and English",
          intro: "Write the English word next to the German one.",
          help: "Schreibe das englische Wort neben das deutsche.",
          items: deEnGaps(8),
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain the word",
          intro: "Choose TWO of the three words and explain them in a complete sentence.",
          help: "Wähle ZWEI Wörter und erkläre sie in einem ganzen Satz.",
          starters: [
            "A locker is a …",
            "Homecoming is a day when …",
            "A freshman is a student who …",
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "My first week",
          intro: "Complete the text with the words from the box.",
          help: "Setze die fehlenden Wörter aus dem Kasten ein.",
          bank: FIRST_WEEK_BANK,
          bankCap: "Word box",
          items: FIRST_WEEK,
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro:
            "THE PROBLEM: Tyler, an exchange student from Boston, has been in your class for a week. In lessons he understands a lot, but in the breaks he always stands alone. He says: “Nobody talks to me — I think everybody is afraid of making mistakes.” He goes home in two weeks. Collect two ideas.",
          help: "Sammle zwei Ideen, wie ihr Tyler helfen könnt.",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro:
            "Choose your best idea and write your solution in 3 sentences: What do you do? Why does it help? What is the first step?",
          help: "Useful phrases: Our solution is … · This helps because … · Nobody has to … · First, we would … · Then …",
          starters: ["Our solution is …", "This helps because …", "First, we would …"],
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
          type: "written",
          kind: "Warm-up",
          title: "Before you start",
          intro: "Write down two words you already know about an American high school.",
          starters: ["Word 1 —", "Word 2 —"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Find the word",
          intro: "Write the word for each definition. There is no word box this time.",
          items: DEFINITIONS.map((d) => ({
            segments: [d.def + "  →  ", { answer: d.word, size: d.size }],
          })),
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "German and English",
          intro: "Write the English word next to the German one.",
          items: deEnGaps(8),
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain the word",
          intro:
            "Explain all three words in your own complete sentences. Do not use the word itself in your explanation.",
          starters: ["locker —", "homecoming —", "freshman —"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "My first week",
          intro: "Fill in the missing high school words. There is no word box.",
          items: FIRST_WEEK,
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Find a solution",
          intro:
            "THE PROBLEM: Tyler, an exchange student from Boston, has been in your class for a week. In lessons he understands a lot, but in the breaks he always stands alone. He says: “Nobody talks to me — I think everybody is afraid of making mistakes.” He is going home in two weeks. Write your solution in 3 sentences.",
          starters: ["What we do: …", "Why it helps: …", "The first step: …"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "Somebody says: “He only has two weeks left — a poster is much too slow.” What do you answer?",
          help: "Useful phrases: That is true, but … · A poster takes five minutes … · We can start today by … · Otherwise nothing happens at all.",
          answerLines: 2,
          questions: [{ q: "Your answer to the objection:", starter: "That is true, but …" }],
        },
      ],
    },

    /* ================= STEP 4 — ★ Game ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
          words: [
            { word: "FRESHMAN", hint: "Schüler/in im 1. Jahr" },
            { word: "SOPHOMORE", hint: "Schüler/in im 2. Jahr" },
            { word: "JUNIOR", hint: "Schüler/in im vorletzten Jahr" },
            { word: "SENIOR", hint: "Schüler/in im letzten Schuljahr" },
            { word: "LOCKER", hint: "das Schließfach" },
            { word: "HALLWAY", hint: "der Flur" },
            { word: "CAFETERIA", hint: "die Mensa" },
            { word: "LIBRARY", hint: "die Bücherei" },
            { word: "PRINCIPAL", hint: "die Schulleitung" },
            { word: "PROM", hint: "der Schulball" },
            { word: "HOMECOMING", hint: "Footballspiel und Tanz am selben Tag" },
            { word: "EDITOR", hint: "der/die Redakteur/in" },
            { word: "PHOTOGRAPHER", hint: "macht die Fotos" },
            { word: "ANNOUNCEMENT", hint: "die Durchsage" },
            { word: "TRADITION", hint: "der Brauch" },
            { word: "CONTRACT", hint: "der Vertrag" },
            { word: "ELEVATOR", hint: "der Aufzug (AE)" },
            { word: "GRADE", hint: "die (Schul-)Note" },
            { word: "FORTUNE", hint: "ein Vermögen" },
            { word: "YEARBOOK", hint: "das Jahrbuch" },
          ],
          help: "★ Bonus: how many of these words can you use in one sentence about your own school?",
        },
      ],
    },
  ],
};
