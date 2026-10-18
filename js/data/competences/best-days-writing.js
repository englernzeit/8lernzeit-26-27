/**
 * The best days of your life (Unit 2) — Writing: "An email to Kwan"
 *
 * Kwan is coming from the partner school in the USA for two weeks. The learner
 * plans, writes and checks a reply email.
 *
 *   Step 1 (LE)        — 60–80 words, three content points, the opening given
 *   Step 2 (G-Kurs)    — 100 words, four content points
 *   Step 3 (E-Kurs)    — 120 words, four content points without writing a list
 *   Step 4 (Challenge) — rescue the email where every sentence begins with "I"
 */

/** The task briefing — the same for every level, only the length changes. */
const BRIEF =
  "Your school has a partner school in the USA. In three weeks Kwan, a student from there, is going to live with your family for two weeks and go to school with you. He has written to you once. Now write him an email back.";

/** The content points — LE has three, G-Kurs and E-Kurs have four. */
const LE_POINTS = [
  "tell him about your family",
  "tell him about your school day",
  "tell him what he should bring",
  "and write him two real questions",
];

const CONTENT_POINTS = [
  "tell him about your family and where you live",
  "tell him what a normal school day at your school looks like",
  "tell him what he should bring (weather, clothes, school things)",
  "say what you would like to do together at the weekend",
  "and write him two real questions",
];

/** The eight words of this lesson. */
const WORDS = [
  {
    label: "Getting the flat ready",
    accent: "olive",
    pairs: [
      ["excitement", "die Aufregung — the feeling before something big"],
      ["clean", "sauber machen — what Tom does to the guest room"],
      ["groceries", "die Lebensmittel — what you buy at the supermarket"],
      ["plate", "der Teller — you eat from it"],
    ],
  },
  {
    label: "Getting yourself ready",
    accent: "coral",
    pairs: [
      ["belongings", "die Sachen — the things that belong to you"],
      ["size", "die Größe — how big something is"],
      ["smart", "schick — well dressed"],
      ["dress", "sich anziehen — to put your clothes on"],
    ],
  },
];

/** The plan of an email — the theory box at every level. */
const EMAIL_PLAN = [
  "1 · The beginning — you say hello: Hi Kwan, thanks for your email!",
  "2 · The middle — one paragraph for every content point: I live … / School starts … / Don't forget … One point, then an empty line.",
  "3 · Before the end — two real questions: Could you tell me … ? A question is what makes an email an email. At the very end: See you! Best wishes, …",
  "WATCH OUT: “I live … I have … I go … I like …” is a list. Better: “At the weekend we could …” / “On Tuesdays we have …” Not every sentence may begin with “I” — and two real questions belong in it.",
];

/** The planning grid — single words, not sentences. */
const LE_PLAN_STARTERS = [
  "my family —",
  "my school day —",
  "what Kwan should bring —",
  "my two questions —",
];

const PLAN_STARTERS = [
  "my family and my town —",
  "a normal school day —",
  "what Kwan should bring —",
  "our weekend plan —",
  "my two questions —",
];

/** The phrase bank, grouped the way the email is built. */
const PHRASE_SECTIONS = [
  {
    label: "How to open",
    accent: "olive",
    pairs: [
      ["Greeting", "Hi Kwan, · Hello Kwan, · Dear Kwan,"],
      ["Why you write", "Thanks for your email! · I'm the student you are going to stay with. · Here is some information before you come."],
    ],
  },
  {
    label: "The content points",
    accent: "slate",
    pairs: [
      ["Family and town", "I live in … with … · We've got … · Our flat is about … minutes from school."],
      ["A school day", "School starts at … and finishes at … · On Wednesdays we have … · After the fourth lesson there is a long break."],
      ["What to bring", "Don't forget … · You'll need … because … · It can get quite cold here, so …"],
      ["Plans together", "I'm really looking forward to … · We could go … · If you like …, we can …"],
    ],
  },
  {
    label: "Questions and closing",
    accent: "coral",
    pairs: [
      ["Your questions", "Could you tell me … ? · Is it true that … ? · What do you usually … ?"],
      ["Closing", "That's all for now. · See you in three weeks! · Best wishes, …"],
    ],
  },
];

/** The self-check that goes with the email. */
const LE_CHECK = [
  "I wrote a greeting and a closing.",
  "All content points are in my email.",
  "I asked at least two questions.",
  "I read my text again and checked the spelling.",
];

const EMAIL_CHECK = [
  "I wrote a greeting and a closing.",
  "All content points are in my email.",
  "I asked at least two questions.",
  "After look forward to / good at I used an -ing form.",
  "Not every sentence begins with “I”.",
  "I read my text again and checked the spelling.",
];

/** Chips offered inside the writing editor. */
const EMAIL_CHIPS = [
  "Thanks for your email!",
  "I live in … with …",
  "School starts at …",
  "Don't forget …",
  "I'm really looking forward to …",
  "Could you tell me … ?",
  "Best wishes, …",
];

/* ============ The problem — the same three ideas at every level ============ */

const PROBLEM = {
  problem:
    "Your email is finished. Then you read it again: every single sentence begins with “I”, and you never ask Kwan anything.",
  problemDe:
    "Deine E-Mail ist fertig. Dann liest du sie noch einmal: Jeder Satz beginnt mit „I“, und du fragst Kwan nichts.",
  ideas: [
    "We leave the email as it is — it is correct.",
    "We start some sentences differently and add two questions.",
    "We make the email much shorter.",
  ],
};

const LE_BANK =
  "then Kwan can answer · it is more friendly · a list is boring · shorter does not help";

const LE_NOTE =
  "Richtig ist Idee 2. Kürzen hilft nicht, und so stehen lassen ändert nichts. Beispiellösung: Idea 2 is best, because then Kwan can answer.";

const GK_NOTE =
  "Bewertet wird die Begründung, nicht die Wahl. Idee 2 ist am stärksten: Sie behebt beide Mängel auf einmal. Idee 1 übersieht, dass „richtig“ und „gut“ nicht dasselbe sind. Idee 3 macht den Text kürzer, aber nicht freundlicher. Beispiellösung: Idea 2 is best, because two questions make the email a real letter and Kwan can answer them.";

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "EXCITEMENT", hint: "die Aufregung" },
  { word: "GROCERIES", hint: "die Lebensmittel" },
  { word: "BELONGINGS", hint: "die Sachen" },
  { word: "PLATE", hint: "der Teller" },
  { word: "SMART", hint: "schick" },
  { word: "SIZE", hint: "die Größe" },
  { word: "SUITCASE", hint: "der Koffer" },
  { word: "GUEST", hint: "der Gast" },
  { word: "KITCHEN", hint: "die Küche" },
  { word: "BALCONY", hint: "der Balkon" },
  { word: "BATHROOM", hint: "das Badezimmer" },
  { word: "GREETING", hint: "die Anrede" },
  { word: "QUESTION", hint: "die Frage" },
  { word: "WEEKEND", hint: "das Wochenende" },
  { word: "TIMETABLE", hint: "der Stundenplan" },
  { word: "WEATHER", hint: "das Wetter" },
];

export default {
  title: "An email to Kwan",

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "LE",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "The words of this lesson",
          intro: "Eight words for getting ready. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "gap-fill",
          kind: "Aufwärmen",
          title: "Write about Tom",
          intro:
            "Tom's guest is coming. Finish each sentence with the right word. Example: The letter comes. → Tom is happy. His guest is coming.",
          help: "Ergänze jeden Satz mit dem passenden Wort.",
          bank: ["groceries", "belongings", "guest room", "smart"],
          bankCap: "Word box",
          items: [
            { hint: "1 · the guest room", segments: ["Tom cleans the ", { answer: "guest room", size: 12 }, "."] },
            { hint: "2 · the kitchen", segments: ["They buy ", { answer: "groceries", size: 12 }, " for the week."] },
            { hint: "3 · the suitcase", segments: ["Kwan packs his ", { answer: "belongings", size: 12 }, "."] },
            { hint: "4 · one day before", segments: ["Tom is ", { answer: "smart", size: 9 }, " in a clean shirt."] },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Welcher Raum?",
          title: "Which room?",
          intro:
            "Six rooms in the flat: 1 the kitchen · 2 the living room · 3 the guest room · 4 the bathroom · 5 the hall · 6 the balcony.",
          help: "Welcher Raum ist es? Wähle die Nummer.",
          shuffle: false,
          questions: [
            { q: "Here Tom cleans and makes the bed for the guest.", options: ["1 the kitchen", "3 the guest room", "5 the hall", "6 the balcony"], correct: 1 },
            { q: "Here the groceries come out of the bag.", options: ["1 the kitchen", "2 the living room", "4 the bathroom", "3 the guest room"], correct: 0 },
            { q: "Here are the coats and the suitcase with his belongings.", options: ["6 the balcony", "2 the living room", "5 the hall", "4 the bathroom"], correct: 2 },
            { q: "Here you can sit outside between the plants.", options: ["6 the balcony", "1 the kitchen", "3 the guest room", "5 the hall"], correct: 0 },
          ],
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The plan of an email",
          intro: "Keep this next to you while you write.",
          paragraphs: [EMAIL_PLAN[0], EMAIL_PLAN[1], EMAIL_PLAN[3]].map((l) => [l]),
        },
        {
          type: "written",
          kind: "Planen",
          title: "Step 1 — Make a plan",
          intro: BRIEF + " First collect your ideas in note form — single words, not sentences.",
          help: "Sammle deine Ideen in Stichworten — einzelne Wörter, keine Sätze. Beispiel: my family → mum, brother Jonas (9), cat",
          lines: LE_POINTS,
          starters: LE_PLAN_STARTERS,
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "These phrases help you build your email part by part.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "email-compose",
          kind: "Schreiben",
          title: "Step 3 — Write your email",
          img: "assets/images/unit2/email.jpg",
          to: "Kwan",
          subject: "Re: See you in three weeks!",
          intro:
            "The beginning is already there — read it, then go on from where it stops. Write 60–80 words altogether.",
          incoming: {
            from: "You → Kwan",
            subject: "Re: See you in three weeks!",
            body: [
              "Hi Kwan,",
              "thanks for your email! I'm really happy that you are coming. I live in Münster with my mum and my little brother. Our flat is ten minutes from school, so we can walk there every morning.",
              "… go on from here →",
            ],
          },
          help: "Schreibe deine E-Mail weiter. Nutze deine Notizen aus Schritt 1.",
          min: 50,
          max: 90,
          placeholder: "At our school, lessons start at …",
          chips: EMAIL_CHIPS,
          checklist: LE_CHECK,
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
            "Guess the word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "The words of this lesson",
          intro: "Eight words for getting ready. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The plan of an email",
          intro: "Keep this next to you while you write.",
          paragraphs: EMAIL_PLAN.map((l) => [l]),
        },
        {
          type: "written",
          kind: "Planen",
          title: "Step 1 — Make a plan",
          intro: BRIEF + " First collect your ideas in note form — single words, not sentences.",
          help: "Sammle deine Ideen in Stichworten. Drei oder vier Wörter pro Zeile reichen.",
          lines: CONTENT_POINTS,
          starters: PLAN_STARTERS,
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "These phrases help you build your email part by part.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "email-compose",
          kind: "Schreiben",
          title: "Step 3 — Write your email",
          img: "assets/images/unit2/email.jpg",
          to: "Kwan",
          subject: "Re: See you in three weeks!",
          intro:
            "Write your email (about 100 words). Use your notes from Step 1 and put all four content points into it.",
          help: "Schreibe deine E-Mail (ca. 100 Wörter).",
          min: 80,
          max: 120,
          placeholder: "Hi Kwan,\n\nthanks for your email! I'm really happy that you are coming …",
          chips: EMAIL_CHIPS,
          checklist: EMAIL_CHECK,
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
            "Guess the word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "The words of this lesson",
          intro: "Eight words for getting ready. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The plan of an email",
          intro: "Keep this next to you while you write.",
          paragraphs: EMAIL_PLAN.map((l) => [l]),
        },
        {
          type: "written",
          kind: "Planen",
          title: "Step 1 — Make a plan",
          intro: BRIEF + " First collect your ideas in note form — single words, not sentences.",
          lines: CONTENT_POINTS,
          starters: PLAN_STARTERS,
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "These phrases help you build your email part by part.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "email-compose",
          kind: "Schreiben",
          title: "Step 3 — Write your email",
          img: "assets/images/unit2/email.jpg",
          to: "Kwan",
          subject: "Re: See you in three weeks!",
          intro:
            "Write your email (about 120 words). Cover all four content points without writing a list, and vary your sentence openings.",
          min: 95,
          max: 145,
          placeholder: "Hi Kwan,\n\nthanks for your email! …",
          chips: EMAIL_CHIPS,
          checklist: EMAIL_CHECK,
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
            "Guess the word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Rescue the boring email",
          intro:
            "Here is a real email to Kwan. Everything in it is correct — but every sentence begins with “I” and there is not a single question. Rewrite it so that a person would enjoy reading it.",
          incoming: {
            from: "Lena",
            subject: "Re: your visit",
            body: [
              "Hi Kwan,",
              "I am happy you are coming. I live in Bremen. I have one sister. I go to school at eight. I have six lessons. I eat lunch at school. I play football on Saturday. I hope you like football. I am looking forward to it.",
              "Bye, Lena",
            ],
          },
          min: 55,
          max: 110,
          placeholder: "Hi Kwan,\n\nGreat news that you are coming! …",
          chips: [
            "At the weekend we …",
            "On Wednesdays …",
            "Here in …, the weather …",
            "Do you play … ?",
            "What do you usually … ?",
            "Don't forget …",
          ],
          checklist: [
            "Fewer than half my sentences begin with “I”.",
            "I asked Kwan at least two questions.",
            "I used at least one -ing form after look forward to.",
            "All the facts from the old email are still there.",
            "It sounds like a person, not a list.",
          ],
          help: "★ Bonus: count the sentence openings. How many different words did you start with?",
        },
      ],
    },
  ],
};
