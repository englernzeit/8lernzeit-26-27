/**
 * The best days of your life (Unit 2) — Speaking: "Five scenes for the film"
 *
 * The class is making a four-minute film about their school for the partner
 * school in the USA. In pairs the learners negotiate which five scenes go in,
 * then give a short solo talk about a day at their school.
 *
 *   Step 1 (LE)        — 2 favourite scenes, a 2–3 minute talk, 1 minute solo
 *   Step 2 (G-Kurs)    — 3 scenes, 3–4 minutes, 2 minute solo
 *   Step 3 (E-Kurs)    — 4–6 minutes, 2–3 minute solo, + an objection
 *   Step 4 (Challenge) — "What would you say?" negotiation game
 */

/** The eight scenes the pair can choose from. */
const SCENES = [
  "the school bus arriving in the morning",
  "a normal English lesson",
  "the schoolyard in the long break",
  "lunch in the cafeteria",
  "the climbing wall in the gym",
  "the school garden club at work",
  "an interview with our head teacher",
  "the music room during band practice",
];

/** The negotiation phrase bank. */
const PHRASE_SECTIONS = [
  {
    label: "Say what you want",
    accent: "olive",
    pairs: [
      ["Making a suggestion", "I think we should … · Maybe we can … · How about … ?"],
      ["Giving a reason", "… because our partner school would … · … is more interesting than …"],
    ],
  },
  {
    label: "React to your partner",
    accent: "slate",
    pairs: [
      ["Agreeing", "That's a good idea. · I agree with you. · Yes, and we could also …"],
      ["Disagreeing politely", "I'm not sure, because … · I don't agree, because … · I see what you mean, but …"],
      ["Asking your partner", "What do you think about … ? · What's your opinion? · Which one would you take?"],
    ],
  },
  {
    label: "Decide together",
    accent: "coral",
    pairs: [["Deciding", "OK, so let's take … · Shall we agree on … ? · So our five scenes are …"]],
  },
];

/** The five slots the pair has to fill. */
const FIVE_SCENES = ["1 —", "2 —", "3 —", "4 —", "5 —"];

/** The self-check after the paired talk. */
const SELF_CHECK = [
  "I made at least three suggestions.",
  "I gave a reason every time.",
  "I asked my partner for their opinion.",
  "I agreed or disagreed politely.",
  "We really agreed on five scenes.",
  "I spoke English the whole time.",
];

/** The recurring problem on this page. */
const PROBLEM =
  "THE PROBLEM: You and your partner have six minutes to agree on five scenes. But your partner says “yes, good idea” to everything and never gives a reason. After two minutes you have fifteen scenes on the list and no decision at all.";

export default {
  title: "Five scenes for the film",

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
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a four-minute film about your school for your partner school in the USA. You cannot show everything. Choose your 2 favourite scenes from the list and write one reason for each.",
          help: "Wähle deine 2 Lieblingsszenen und begründe sie auf Englisch.",
          lines: SCENES,
          starters: ["My scene 1 — … because …", "My scene 2 — … because …"],
        },
        {
          type: "phrase-reference",
          kind: "Redemittel",
          title: "Step 2 — Useful phrases",
          intro: "Use these phrases instead of stopping when you are stuck.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 2–3 minutes and agree on five scenes. Write them down afterwards.",
          help: "Sprecht miteinander und einigt euch auf fünf Szenen.",
          starters: FIVE_SCENES,
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk",
          intro:
            "Prepare a talk of about one minute about a day at your school. Make notes — do not write full sentences.",
          help: "Mach dir Notizen, schreibe keine ganzen Sätze.",
          starters: [
            "when school starts and finishes —",
            "how you get to school —",
            "lessons and favourite subjects —",
            "breaks and lunch —",
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "After the talk, tick what went well.",
          help: "Kreuze nach dem Gespräch an, was gut geklappt hat.",
          checklist: true,
          lines: SELF_CHECK,
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM + " Sort the ideas, then press Check.",
          help: "Dein*e Partner*in sagt zu allem Ja und begründet nie.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "Each of us names three scenes and says why.",
                "We give every scene a mark from 1 to 5 and take the best five.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We take the first five scenes on the list.",
                "We stop talking and wait.",
                "We ask the teacher to decide for us.",
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
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a four-minute film about your school for your partner school in the USA. Choose your 3 favourite scenes from the list and write one reason for each.",
          help: "Wähle deine 3 Lieblingsszenen und begründe sie auf Englisch.",
          lines: SCENES,
          starters: [
            "My scene 1 — … because …",
            "My scene 2 — … because …",
            "My scene 3 — … because …",
          ],
        },
        {
          type: "phrase-reference",
          kind: "Redemittel",
          title: "Step 2 — Useful phrases",
          intro: "Use these phrases instead of stopping when you are stuck.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 3–4 minutes and agree on five scenes. Write them down afterwards.",
          help: "Sprecht miteinander und einigt euch auf fünf Szenen.",
          starters: FIVE_SCENES,
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk",
          intro:
            "Prepare a talk of about two minutes about a day at your school. Make notes — do not write full sentences.",
          help: "Mach dir Notizen, schreibe keine ganzen Sätze.",
          starters: [
            "when school starts and finishes —",
            "how you get to school —",
            "lessons and favourite subjects —",
            "breaks and lunch —",
            "after-class activities —",
            "what is different at an American high school —",
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "After the talk, tick what went well.",
          help: "Kreuze an, was gut geklappt hat.",
          checklist: true,
          lines: SELF_CHECK,
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
            "Choose your best idea and write your solution in 3 sentences: What do you do? Why does it help? What is the first step?",
          help: "Useful phrases: Our solution is … · This helps because … · Both of us have to … · First, we would … · Then …",
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
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a four-minute film about your school for your partner school in the USA. The film cannot show everything. Choose your 3 favourite scenes and write one reason for each.",
          lines: SCENES,
          starters: [
            "My scene 1 — … because …",
            "My scene 2 — … because …",
            "My scene 3 — … because …",
          ],
        },
        {
          type: "phrase-reference",
          kind: "Redemittel",
          title: "Step 2 — Useful phrases",
          intro:
            "React to your partner instead of only presenting your own ideas — these phrases keep the conversation going.",
          sections: PHRASE_SECTIONS,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 4–6 minutes and agree on five scenes. Write them down afterwards.",
          starters: FIVE_SCENES,
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk",
          intro:
            "Prepare a talk of about two to three minutes about a day at your school. Make notes — do not write full sentences.",
          starters: [
            "when school starts and finishes —",
            "how you get to school —",
            "lessons and favourite subjects —",
            "breaks and lunch —",
            "after-class activities —",
            "what is different at an American high school —",
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "After the talk, tick what went well.",
          checklist: true,
          lines: SELF_CHECK,
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Find a solution",
          intro: PROBLEM + " Write your solution in 3 sentences.",
          starters: ["What we do: …", "Why it helps: …", "The first step: …"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "Your partner says: “Giving marks takes too long — and it isn't a real discussion any more.” What do you answer?",
          help: "Useful phrases: That is true, but … · It only takes a minute … · We can still talk about … · Otherwise we decide nothing at all.",
          answerLines: 2,
          questions: [{ q: "Your answer to the objection:", starter: "That is true, but …" }],
        },
      ],
    },

    /* ================= STEP 4 — ★ Challenge ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "multiple-choice",
          kind: "Spiel · Challenge",
          title: "What would you say?",
          intro:
            "You are filming the school and your partner keeps saying “yes” to everything. For each moment, choose the answer that really moves the discussion forward. Only one option does all three: it reacts, it gives a reason, and it keeps you polite.",
          questions: [
            {
              q: "Your partner says: “I think we should film the cafeteria.” You don't agree.",
              options: [
                "No. That's boring.",
                "I see what you mean, but the schoolyard shows more students. What do you think?",
                "OK, let's take it.",
              ],
              correct: 1,
            },
            {
              q: "You want the climbing wall in the film. How do you suggest it?",
              options: [
                "How about the climbing wall? Our partner school doesn't have one, so it's really special.",
                "The climbing wall.",
                "We have to film the climbing wall.",
              ],
              correct: 0,
            },
            {
              q: "Your partner has said “good idea” five times and given no reason at all.",
              options: [
                "You never say anything useful.",
                "Fine, I'll decide everything then.",
                "Which one would you take — and why is it better than the bus?",
              ],
              correct: 2,
            },
            {
              q: "You have four scenes and two minutes left.",
              options: [
                "Let's just take the first one on the list.",
                "Shall we agree on the band practice as number five? It shows what we do after lessons.",
                "We'll never finish this.",
              ],
              correct: 1,
            },
            {
              q: "Your partner suggests an interview with the head teacher and gives a good reason.",
              options: [
                "That's a good idea. Yes, and we could also ask her about the exchange.",
                "Hmm.",
                "I already said we should film the gym.",
              ],
              correct: 0,
            },
          ],
          help: "★ Bonus: look at the answers you chose. How many of them end with a question back to your partner?",
        },
      ],
    },
  ],
};
