/**
 * The best days of your life (Unit 2) — Writing: "An email to Kwan"
 *
 * Kwan is coming from the partner school in the USA for two weeks. The learner
 * plans, writes and checks a reply email covering four content points plus two
 * real questions.
 *
 *   Step 1 (LE)        — 60–80 words, the opening is given
 *   Step 2 (G-Kurs)    — 100 words
 *   Step 3 (E-Kurs)    — 120 words, vary your sentence openings, + an objection
 *   Step 4 (Challenge) — rescue the email where every sentence begins with "I"
 */

/** The task briefing — the same for every level, only the length changes. */
const BRIEF =
  "Your school has a partner school in the USA. In three weeks Kwan, a student from there, is going to live with your family for two weeks and go to school with you. He has written to you once. Now write him an email back.";

/** The four content points Kwan's email has to cover. */
const CONTENT_POINTS = [
  "tell him about your family and where you live",
  "tell him what a normal school day at your school looks like",
  "tell him what he should bring (weather, clothes, school things)",
  "say what you would like to do together at the weekend",
  "and write him two real questions",
];

/** The planning grid — single words, not sentences. */
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
    label: "The four content points",
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

/** The self-check that goes with every email. */
const EMAIL_CHECK = [
  "I wrote a greeting and a closing.",
  "All four content points are in my email.",
  "I asked at least two questions.",
  "After look forward to / worry about I used an -ing form.",
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

/** The recurring problem on this page. */
const PROBLEM =
  "THE PROBLEM: You have finished your email. Then you read it again: every single sentence begins with “I”. Everything is correct, but it sounds like a list, and you never ask Kwan anything. You have ten minutes left.";

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
          type: "written",
          kind: "Planen",
          title: "Step 1 — Make a plan",
          intro:
            BRIEF + " First collect your ideas in note form — single words, not sentences.",
          help: "Sammle deine Ideen in Stichworten — einzelne Wörter, keine Sätze.",
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
          checklist: EMAIL_CHECK,
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM + " Sort the ideas, then press Check.",
          help: "Jeder Satz beginnt mit „I“. Es klingt wie eine Liste, und du fragst Kwan nichts.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We start some sentences with a different word, for example “At the weekend I …”.",
                "We add two questions to Kwan.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We leave the email as it is — it is correct.",
                "We make the email much shorter.",
                "We write the email in German instead.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro: "Write your solution in 3 sentences. Use the sentence frame.",
          help: "Schreibe deine Lösung in 3 Sätzen.",
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
          type: "written",
          kind: "Planen",
          title: "Step 1 — Make a plan",
          intro: BRIEF + " First collect your ideas in note form — single words, not sentences.",
          help: "Sammle deine Ideen in Stichworten.",
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
          intro: "Write your email (about 100 words). Use your notes from Step 1.",
          help: "Schreibe deine E-Mail (ca. 100 Wörter).",
          min: 80,
          max: 120,
          placeholder: "Hi Kwan,\n\nthanks for your email! I'm really happy that you are coming …",
          chips: EMAIL_CHIPS,
          checklist: EMAIL_CHECK,
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
          title: "Write your solution",
          intro:
            "Choose your best idea and write your solution in 3 sentences: What do you change? Why does it help? What is the first step?",
          help: "Useful phrases: My solution is … · This helps because … · Kwan would … · First, I would … · Then …",
          starters: ["My solution is …", "This helps because …", "First, I would …"],
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
          intro:
            "Write your email (about 120 words). Cover all four content points without writing a list, and vary your sentence openings.",
          min: 95,
          max: 145,
          placeholder: "Hi Kwan,\n\nthanks for your email! …",
          chips: EMAIL_CHIPS,
          checklist: EMAIL_CHECK,
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Find a solution",
          intro: PROBLEM + " Write your solution in 3 sentences.",
          starters: ["What I change: …", "Why it helps: …", "The first step: …"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "A classmate says: “Kwan wants facts about your school, not questions — questions only make more work for him.” What do you answer?",
          help: "Useful phrases: That is true, but … · A question shows that … · He can answer in one line … · An email without questions is …",
          answerLines: 2,
          questions: [{ q: "Your answer to the objection:", starter: "That is true, but …" }],
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
