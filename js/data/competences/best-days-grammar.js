/**
 * The best days of your life (Unit 2) — Grammar: "The -ing form"
 * (after verbs · after prepositions · as the subject).
 *
 * Built from the three differentiated worksheets (LE · G-Kurs · E-Kurs)
 * for this unit, rebuilt as one interactive page and mapped onto Steps:
 *
 *   Step 1 (LE)        — word boxes, German instructions, sentence frames
 *   Step 2 (G-Kurs)    — the same exercises without the word boxes
 *   Step 3 (E-Kurs)    — English only, plus "find the mistake" and an objection
 *   Step 4 (Challenge) — invent your own after-school club
 *
 * Every level ends with the unit's recurring PROBLEM SOLVING task: find a
 * solution, give reasons, and (E-Kurs) answer an objection.
 */

/** The eight -ing forms the LE word box offers. */
const LE_ING_BANK = [
  "doing", "getting", "playing", "running",
  "singing", "talking", "watching", "writing",
];

/** The prepositions the LE word box offers (two of them are needed twice). */
const LE_PREP_BANK = ["about", "about", "at", "for", "in", "of", "to", "to"];

/** Ideas for the "write your own sentences" task (shared by all three levels). */
const OWN_IDEAS =
  "get up early · speak in front of the class · help in the school garden · take photos for the paper · work with people I don't know · write emails in English · climb";

/** Exercise 1 — the same eight verb gaps at every level (LE adds a word box). */
const ING_GAPS = [
  { hint: "enjoy + -ing", segments: ["I enjoy ", { answer: "playing", size: 10 }, " basketball after school. (play)"] },
  { hint: "hate + -ing", segments: ["My sister hates ", { answer: "getting", size: 10 }, " up early on Mondays. (get)"] },
  { hint: "like + -ing", segments: ["Do you like ", { answer: "singing", size: 10 }, " in the school choir? (sing)"] },
  { hint: "don't mind + -ing", segments: ["He doesn't mind ", { answer: "doing", size: 9 }, " his homework in the library. (do)"] },
  { hint: "love + -ing", segments: ["We love ", { answer: "watching", size: 11 }, " the football games on Friday. (watch)"] },
  { hint: "keep + -ing", segments: ["Maya keeps ", { answer: "writing", size: 10 }, " articles for the school newspaper. (write)"] },
  { hint: "start + -ing", segments: ["The students started ", { answer: "talking", size: 10 }, " about the prom in October. (talk)"] },
  { hint: "stop + -ing", segments: ["Please stop ", { answer: "running", size: 10 }, " in the hallway! (run)"] },
];

/** Exercise 2 — the same eight preposition gaps at every level. */
const PREP_GAPS = [
  { hint: "interested …", segments: ["I'm interested ", { answer: "in", size: 5 }, " joining the drama club."] },
  { hint: "good …", segments: ["Beth is really good ", { answer: "at", size: 5 }, " playing the flute."] },
  { hint: "look forward …", segments: ["We're looking forward ", { answer: "to", size: 5 }, " meeting our exchange partners."] },
  { hint: "excited …", segments: ["Anuar is excited ", { answer: "about", size: 7 }, " going to the prom."] },
  { hint: "worry …", segments: ["Don't worry ", { answer: "about", size: 7 }, " making mistakes — everybody makes them."] },
  { hint: "get used …", segments: ["It took me a week to get used ", { answer: "to", size: 5 }, " changing rooms after every lesson."] },
  { hint: "afraid …", segments: ["Are you afraid ", { answer: "of", size: 5 }, " speaking in front of the whole class?"] },
  { hint: "thanks …", segments: ["Thanks ", { answer: "for", size: 5 }, " helping me with my locker!"] },
];

/** Exercise 3 — rewrite so the sentence starts with the -ing form. */
const REWRITE_QUESTIONS = [
  { q: "It is hard to find your classroom on the first day.", starter: "Finding …" },
  { q: "It is easy to make friends in a club.", starter: "Making …" },
  { q: "It is embarrassing to be late for class.", starter: "Being …" },
  { q: "It is important to join an after-class activity.", starter: "Joining …" },
];

/** The problem all three levels solve, in one sentence per level of detail. */
const PROBLEM_SHORT =
  "THE PROBLEM: Half of your class wants to play football every afternoon with the six American guests. The others think that is boring. The guests arrive on Monday and nobody can agree.";

export default {
  title: "The -ing form",

  /* ============ Shared reference — the three rules ============ */
  guide: {
    label: "The Rule",
    subtitle: "The -ing form — the three places you need it",
    numbered: false,
    types: [
      {
        name: "1 · After these verbs",
        tag: "like · enjoy · stop",
        accent: "olive",
        formula: "like · love · enjoy · hate · don't mind · start · stop · keep",
        example: "I enjoy playing lacrosse.",
        de: "Nach diesen Verben steht im Englischen die -ing-Form.",
      },
      {
        name: "2 · After a preposition",
        tag: "at · in · of · to · about · for",
        accent: "slate",
        formula:
          "good at · interested in · afraid of · look forward to · excited about · worry about · get used to · take part in · dream of",
        example: "She is good at singing.",
        de: "Nach einer Präposition steht IMMER die -ing-Form — nie der Infinitiv mit to.",
      },
      {
        name: "3 · At the start of a sentence",
        tag: "as the subject",
        accent: "coral",
        formula: "The -ing form works like a noun.",
        example: "Playing in the school band is fun.",
        de: "Im Deutschen steht hier oft ein Infinitiv mit „zu“: I look forward to seeing you = Ich freue mich darauf, dich zu sehen.",
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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Which activity do you like doing after school? Write one sentence.",
          help: "Welche Tätigkeit machst du nach der Schule gern? Schreibe einen Satz.",
          starters: ["I like …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "After these verbs",
          intro: "Put the verb in brackets into the -ing form. The word box helps you.",
          help: "Setze das Verb in Klammern in die -ing-Form. Der Kasten hilft dir.",
          bank: LE_ING_BANK,
          bankCap: "Word box",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Words that go together",
          intro: "Fill in the missing small word. Two of them are needed twice.",
          help: "Setze das fehlende kleine Wort aus dem Kasten ein. Zwei Wörter brauchst du zweimal.",
          bank: LE_PREP_BANK,
          bankCap: "Word box",
          items: PREP_GAPS,
        },
        {
          type: "written",
          kind: "Umformen",
          title: "Start the sentence with -ing",
          intro:
            "Write each sentence again, but start with the -ing form. Example: It is fun to play in the school band. → Playing in the school band is fun.",
          help: "Schreibe den Satz neu. Beginne mit der -ing-Form.",
          answerLines: 1,
          questions: REWRITE_QUESTIONS,
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 4 sentences about yourself. Finish each sentence with one of the ideas below — use each idea only once.",
          help: "Ideas: " + OWN_IDEAS,
          starters: ["I enjoy …", "I'm good at …", "I don't mind …", "I'm afraid of …"],
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM_SHORT + " Sort the ideas, then press Check.",
          help: "Das Problem: Die Hälfte der Klasse will jeden Nachmittag Fußball spielen, die andere Hälfte findet das langweilig.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We ask the guests what they like doing.",
                "We make a plan: one sport day, one city day, one cooking day.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We play football every afternoon.",
                "We do nothing and wait until Monday.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro: "Now write your solution in 3 sentences. The sentence frame helps you.",
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
          intro: "Which activity do you like doing after school? Write one sentence.",
          help: "Welche Tätigkeit machst du nach der Schule gern?",
          starters: ["I like …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "After these verbs",
          intro: "Put the verb in brackets into the -ing form.",
          help: "Setze das Verb in Klammern in die -ing-Form.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Words that go together",
          intro: "Fill in the missing preposition: at, in, of, to, about or for.",
          help: "Setze die fehlende Präposition ein.",
          items: PREP_GAPS,
        },
        {
          type: "written",
          kind: "Umformen",
          title: "Start the sentence with -ing",
          intro:
            "Write each sentence again, but start with the -ing form. Example: It is fun to play in the school band. → Playing in the school band is fun.",
          help: "Schreibe den Satz neu. Beginne mit der -ing-Form.",
          answerLines: 1,
          questions: REWRITE_QUESTIONS,
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 5 sentences about yourself. Finish each sentence with one of the ideas below — use each idea only once.",
          help: "Ideas: " + OWN_IDEAS,
          starters: [
            "I enjoy …",
            "I'm good at …",
            "I don't mind …",
            "I'm interested in …",
            "I hate …",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro: PROBLEM_SHORT + " Collect two ideas that could solve it.",
          help: "Das Problem: Die Hälfte der Klasse will jeden Nachmittag Fußball spielen, die andere findet das langweilig. Sammle zwei Ideen.",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro:
            "Choose your best idea and write your solution in 3 sentences. Use at least two -ing forms.",
          help: "Useful phrases: Our solution is … · This helps because … · Everybody could … · First, we would … · Then …",
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
          intro: "Which activity do you like doing after school? Write one sentence.",
          starters: ["I like …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "After these verbs",
          intro: "Put the verb in brackets into the -ing form.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Words that go together",
          intro: "Fill in the missing preposition: at, in, of, to, about or for.",
          items: PREP_GAPS,
        },
        {
          type: "written",
          kind: "Umformen",
          title: "Start the sentence with -ing",
          intro:
            "Write each sentence again, but start with the -ing form. Example: It is fun to play in the school band. → Playing in the school band is fun.",
          answerLines: 1,
          questions: REWRITE_QUESTIONS,
        },
        {
          type: "written",
          kind: "Fehlersuche",
          title: "Find the mistake",
          intro:
            "Each sentence has one mistake with the -ing form. Write the whole sentence correctly.",
          help: "Remember: after a preposition (to, at, in, of) and at the start of a sentence, English uses the -ing form — never the infinitive with to.",
          answerLines: 1,
          questions: [
            { q: "I look forward to see you in September.", starter: "I look forward to …" },
            { q: "She is good at play the piano.", starter: "She is good at …" },
            { q: "To join a club are a good idea.", starter: "Joining …" },
            { q: "I don't mind to walk to school.", starter: "I don't mind …" },
            { q: "He is interested in to learn Spanish.", starter: "He is interested in …" },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 6 sentences about yourself. Finish each sentence with one of the ideas below — use each idea only once.",
          help: "Ideas: " + OWN_IDEAS,
          starters: [
            "I enjoy …",
            "I'm good at …",
            "I don't mind …",
            "I'm interested in …",
            "I'm afraid of …",
            "I keep …",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro:
            "THE PROBLEM: Your class is planning the afternoon programme for six American exchange students. Half of the class wants to play football every day. The others say that playing football every afternoon is boring. The guests arrive on Monday and nobody can agree. Collect two ideas.",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "A classmate says: “Asking everybody takes far too long — we only have the weekend!” Write your solution first, then your answer to the objection.",
          help: "Useful phrases: That is true, but … · It only takes … · We could simply … · Otherwise we risk …",
          starters: [
            "My solution is …",
            "This helps because …",
            "My answer to the objection: …",
          ],
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
          title: "Invent your own after-school club",
          intro:
            "The American guests arrive on Monday and your school wants one new club just for them. Invent it and write a short advert for the notice board. Use at least four -ing forms.",
          min: 50,
          max: 90,
          placeholder: "Do you enjoy …? Are you good at …? Then join …",
          chips: [
            "Do you enjoy …?",
            "Are you interested in …?",
            "Are you good at …?",
            "Don't worry about …",
            "We look forward to …",
            "… is fun.",
          ],
          checklist: [
            "My club has a name.",
            "I wrote when and where it meets.",
            "I used at least four -ing forms.",
            "One sentence starts with an -ing form.",
            "I said why somebody should join.",
          ],
          help: "★ Bonus: read your advert to a partner — can they hear every -ing form?",
        },
      ],
    },
  ],
};
