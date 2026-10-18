/**
 * The best days of your life (Unit 2) — Speaking: agreeing on a school film
 *
 * Your class is making a short film about your school for the partner school
 * in the USA. It can only be four minutes long — so you have to agree.
 *
 *   Step 1 (LE)        — the schoolyard: choose two groups, agree on three,
 *                        then talk about one group for a minute
 *   Step 2 (G-Kurs)    — the ideas list: choose three scenes, agree on five,
 *                        then a two-minute talk about a day at your school
 *   Step 3 (E-Kurs)    — the same, longer, with a comparison to a US high
 *                        school and an objection
 *   Step 4 (Challenge) — the four-minute running order
 *
 * Every idea needs a because — only saying "yes" does not count.
 */

/** The eight words of this lesson. */
const WORDS = [
  {
    label: "Talking it out",
    accent: "olive",
    pairs: [
      ["debate", "debattieren — to argue about something in an orderly way"],
      ["compare", "vergleichen — to say how two things are different"],
      ["impress", "beeindrucken — to make somebody think “wow”"],
      ["cheer", "jubeln — to shout because you are happy"],
    ],
  },
  {
    label: "On the film set",
    accent: "coral",
    pairs: [
      ["thumbs up", "Daumen hoch — the sign that means “yes, good”"],
      ["tap", "antippen — to touch something quickly"],
      ["fix", "in Ordnung bringen — to repair"],
      ["sign", "unterschreiben — to write your name under something"],
    ],
  },
];

/** How to agree on something — the theory box. */
const AGREE_THEORY = [
  "1 · You have an idea → I think we should … because … (I think we should film the football game, because you can see a lot of students there.)",
  "2 · You agree → That's a good idea, and … Never only “yes” — say what you would add.",
  "3 · You disagree → I'm not sure, because … (I'm not sure, because it is very loud there.)",
  "WATCH OUT: “Yes.” — “Yes.” — “Yes.” is no reason and no decision. Every idea comes with a because — and at the end there has to be a decision.",
];

/** The phrase bank for the partner talk. */
const PHRASES_LE = [
  {
    label: "What you want to do",
    accent: "olive",
    pairs: [
      ["You make a suggestion", "I think we should film the … · How about the … ?"],
      ["You give a reason", "… because it is interesting. · … because you can see a lot there."],
    ],
  },
  {
    label: "Agreeing and deciding",
    accent: "coral",
    pairs: [
      ["You agree", "That's a good idea. · Yes, I agree."],
      ["You disagree", "I'm not sure, because … · I don't agree, because …"],
      ["You decide", "OK, let's take the … and the …"],
    ],
  },
];

const PHRASES_GK = [
  {
    label: "Suggesting and giving reasons",
    accent: "olive",
    pairs: [
      ["Making a suggestion", "I think we should … · Maybe we can … · How about … ?"],
      ["Giving a reason", "… because our guests would … · … is more interesting than …"],
    ],
  },
  {
    label: "Reacting to your partner",
    accent: "slate",
    pairs: [
      ["Agreeing", "That's a good idea. · I agree with you. · Yes, and we could also …"],
      ["Disagreeing politely", "I'm not sure, because … · I don't agree, because … · I see what you mean, but …"],
      ["Asking your partner", "What do you think about … ? · What's your opinion? · Which one would you take?"],
    ],
  },
  {
    label: "Deciding",
    accent: "coral",
    pairs: [["Deciding", "OK, so let's take … · Shall we agree on … ? · So our scenes are …"]],
  },
];

/** The list of possible scenes (G-Kurs · E-Kurs). */
const SCENE_LIST =
  "the school bus arriving in the morning · a normal English lesson · the schoolyard in the long break · lunch in the cafeteria · the climbing wall in the gym · the school garden club at work · an interview with our head teacher · the music room during band practice";

/* ============ The problem — the same at every level ============ */

const PROBLEM =
  "THE PROBLEM: Your partner says “yes, good idea” to everything and never gives a reason. After two minutes nothing is decided.";
const IDEAS = [
  "1 — We take the first scenes on the list.",
  "2 — Each of us names three scenes and says why.",
  "3 — We ask the teacher to decide for us.",
];

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "DEBATE", hint: "debattieren" },
  { word: "COMPARE", hint: "vergleichen" },
  { word: "IMPRESS", hint: "beeindrucken" },
  { word: "CHEER", hint: "jubeln" },
  { word: "THUMBS", hint: "… up — Daumen hoch" },
  { word: "SIGN", hint: "unterschreiben" },
  { word: "SUGGESTION", hint: "der Vorschlag" },
  { word: "OPINION", hint: "die Meinung" },
  { word: "REASON", hint: "der Grund" },
  { word: "DECISION", hint: "die Entscheidung" },
  { word: "SCHOOLYARD", hint: "der Schulhof" },
  { word: "CAFETERIA", hint: "die Mensa" },
  { word: "BREAK", hint: "die Pause" },
  { word: "INTERVIEW", hint: "das Interview" },
  { word: "BENCH", hint: "die Bank" },
  { word: "AGREE", hint: "zustimmen" },
];

export default {
  title: "A film about our school",

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
          intro: "Eight words. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "How to agree on something",
          intro: "Keep this next to you while you talk.",
          paragraphs: [AGREE_THEORY[0], AGREE_THEORY[2], AGREE_THEORY[3]].map((l) => [l]),
        },
        {
          type: "written",
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a short film about the long break. The film is only four minutes long. The six groups in the schoolyard: 1 the bench · 2 the football pitch · 3 the poster corner · 4 the photo corner · 5 the tree · 6 the snack table. Choose TWO groups and write one reason in English for each. Example: group 2 — the football game → because everybody can see what we do in the break.",
          help: "Wähle zwei Gruppen und schreibe zu jeder einen Grund auf Englisch.",
          answerLines: 1,
          questions: [
            { q: "My first group — and why?", starter: "Group ___, because …" },
            { q: "My second group — and why?", starter: "Group ___, because …" },
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "Use these while you talk with your partner.",
          sections: PHRASES_LE,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 2–3 minutes and agree on THREE groups for the film. Write them down afterwards.",
          help: "Sprecht miteinander und einigt euch auf drei Gruppen. Jede Idee braucht ein because.",
          starters: ["1 —", "2 —", "3 —"],
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk",
          intro:
            "Choose ONE group in the schoolyard and talk about it for one minute. Make notes here — do not write full sentences.",
          help: "Mach dir Stichworte, schreibe keine ganzen Sätze. Nach like und enjoy kommt die -ing-Form.",
          answerLines: 1,
          questions: [
            { q: "Who is in your group — how many students?", starter: "There are …" },
            { q: "What are they doing?", starter: "They are …" },
            { q: "Do they like doing it? How do you know?", starter: "I think they like …, because …" },
            { q: "Would you like to be in this group? Why?", starter: "I would / would not …, because …" },
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "After the talk, tick what went well. An empty box is what you practise next time.",
          help: "Kreuze nach dem Gespräch an, was gut geklappt hat.",
          checklist: true,
          lines: [
            "I made at least three suggestions.",
            "I gave a reason every time.",
            "I agreed or disagreed politely.",
            "I spoke English the whole time.",
          ],
        },
        {
          type: "multiple-choice",
          kind: "Problem lösen",
          title: "Which idea is best?",
          intro: PROBLEM + " Which idea helps most?",
          help: "Welche Idee ist am besten? Wähle eine aus.",
          shuffle: false,
          questions: [{ q: "Which idea is best?", options: IDEAS, correct: 1 }],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Say why",
          intro: "Now finish the sentence. Say why your idea is the best one.",
          help: "You can use: then both of us talk · everybody must give a reason · the first is not the best · it is our film",
          starters: ["Idea 2 is best, because …"],
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
          intro: "Eight words. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "How to agree on something",
          intro: "Keep this next to you while you talk.",
          paragraphs: AGREE_THEORY.map((l) => [l]),
        },
        {
          type: "written",
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a four-minute film about your school for the partner school in the USA. The ideas list: " +
            SCENE_LIST +
            ". Choose THREE scenes and finish the sentence after because. Example: lunch in the cafeteria → because our guests want to know what we eat.",
          help: "Wähle drei Szenen und begründe jede auf Englisch — mit Bezug auf die Gäste.",
          answerLines: 1,
          questions: [
            { q: "My first scene — and why?", starter: "… because our guests would …" },
            { q: "My second scene — and why?", starter: "… because …" },
            { q: "My third scene — and why?", starter: "… because …" },
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "Use these while you talk with your partner.",
          sections: PHRASES_GK,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 3–4 minutes. Give a reason for every scene you suggest and ask your partner for their opinion at least once. Together you have to agree on FIVE scenes — write them down afterwards.",
          help: "Jede Idee mit Begründung, mindestens eine Rückfrage, und am Ende eine echte Entscheidung.",
          starters: ["1 —", "2 —", "3 —", "4 —", "5 —"],
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk: A day at my school",
          intro:
            "Prepare a talk of about two minutes about a day at your school. Write key words — no full sentences, because you speak freely afterwards.",
          help: "Stichworte, keine ganzen Sätze — wer Sätze notiert, liest sie später ab.",
          answerLines: 1,
          questions: [
            { q: "When school starts and finishes", starter: "key words …" },
            { q: "How you get to school", starter: "key words …" },
            { q: "Lessons and favourite subjects", starter: "key words …" },
            { q: "Breaks and lunch", starter: "key words …" },
            { q: "After-class activities", starter: "key words …" },
            { q: "What is different at an American high school", starter: "key words …" },
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "Tick a box only if you really did it in your talk. An empty box is what you practise next time.",
          help: "Kreuze nur an, was du wirklich gemacht hast.",
          checklist: true,
          lines: [
            "I made at least three suggestions.",
            "I gave a reason every time.",
            "I asked my partner for their opinion.",
            "I agreed or disagreed politely.",
            "We really agreed in the end.",
            "I spoke English the whole time.",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Which idea is best?",
          intro:
            PROBLEM +
            " Which idea is best — 1, 2 or 3? " +
            IDEAS.join("  ") +
            " Write two sentences. There is no single right answer — what counts is your reason.",
          help: "Tipp: Genau das Aushandeln wird geprüft — abgeben gilt nicht.",
          answerLines: 2,
          questions: [{ q: "Which idea is best, and why?", starter: "Idea ___ is best, because …" }],
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
          intro: "Eight words. Tap a word to see what it means.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "How to agree on something",
          intro: "Keep this next to you while you talk.",
          paragraphs: AGREE_THEORY.map((l) => [l]),
        },
        {
          type: "written",
          kind: "Vorbereiten",
          title: "Step 1 — Prepare on your own",
          intro:
            "Your class is making a four-minute film about your school for the partner school in the USA. The ideas list: " +
            SCENE_LIST +
            ". Choose THREE scenes and finish the sentence after because — the reason has to be about the guests, not just “because it is good”.",
          answerLines: 1,
          questions: [
            { q: "My first scene — and why?", starter: "… because our guests would …" },
            { q: "My second scene — and why?", starter: "… because …" },
            { q: "My third scene — and why?", starter: "… because …" },
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Step 2 — Useful phrases",
          intro: "Use these while you talk with your partner.",
          sections: PHRASES_GK,
        },
        {
          type: "written",
          kind: "Sprechen",
          title: "Step 3 — Talk with your partner",
          intro:
            "Talk with your partner for about 4–6 minutes. Give a reason for every scene, ask your partner for their opinion, and disagree politely at least once. Together you have to agree on FIVE scenes.",
          help: "Bewertet werden drei Dinge: jede Idee mit Begründung, mindestens eine Rückfrage, und am Ende eine echte Entscheidung.",
          starters: ["1 —", "2 —", "3 —", "4 —", "5 —"],
        },
        {
          type: "written",
          kind: "Vortrag",
          title: "Step 4 — Your own talk: A day at my school",
          intro:
            "Prepare a talk of about two to three minutes about a day at your school. Write key words — no full sentences. One point has to be a real comparison with an American high school.",
          help: "Beispiel für den Vergleich: At an American high school the day is longer, because the clubs are part of school.",
          answerLines: 1,
          questions: [
            { q: "When school starts and finishes", starter: "key words …" },
            { q: "How you get to school", starter: "key words …" },
            { q: "Lessons and favourite subjects", starter: "key words …" },
            { q: "Breaks and lunch", starter: "key words …" },
            { q: "After-class activities", starter: "key words …" },
            { q: "What is different at an American high school", starter: "At an American high school … , because …" },
          ],
        },
        {
          type: "written",
          kind: "Selbstcheck",
          title: "Step 5 — Check yourself",
          intro: "Tick a box only if you really did it in your talk. An empty box is what you practise next time.",
          checklist: true,
          lines: [
            "I made at least three suggestions.",
            "I gave a reason every time.",
            "I asked my partner for their opinion.",
            "I disagreed politely at least once.",
            "We really agreed in the end.",
            "I compared our school with an American high school.",
            "I spoke English the whole time.",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Which idea is best?",
          intro:
            PROBLEM +
            " Which idea is best — 1, 2 or 3? " +
            IDEAS.join("  ") +
            " Write two sentences: one for your choice, one against another idea.",
          help: "Tipp: Idee 1 entscheidet nach Zufall. Idee 3 gibt die Aufgabe ab — und genau das Aushandeln wird geprüft.",
          answerLines: 2,
          questions: [
            { q: "Which idea is best, and why?", starter: "Idea ___ is best, because …" },
            { q: "Why is another idea not as good?", starter: "Idea ___ is worse, because …" },
          ],
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
          title: "The four-minute running order",
          intro:
            "You have agreed on your scenes — now write the running order for the film. For every scene: how many seconds, what you see, and one sentence the narrator says. The whole film must not be longer than four minutes.",
          min: 60,
          max: 130,
          placeholder: "0:00–0:30 — The school bus arrives. “Every morning two hundred students get off here.” …",
          chips: [
            "0:00–0:30 — …",
            "What you see: …",
            "The narrator says: …",
            "This is where our guests will notice that …",
            "And finally, …",
          ],
          checklist: [
            "Every scene has a time in seconds.",
            "The times add up to four minutes or less.",
            "Every scene has one narrator sentence.",
            "A guest from Boston would understand every sentence.",
            "The order makes sense — the film has a beginning and an end.",
          ],
          help: "★ Bonus: read your running order out loud with a stopwatch. Does it really fit into four minutes?",
        },
      ],
    },
  ],
};
