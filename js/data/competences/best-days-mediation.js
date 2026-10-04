/**
 * The best days of your life (Unit 2) — Mediation: "The notice board"
 *
 * Six students from Boston West High School are at your school for two weeks.
 * The after-class club notices on the board are all in German. The learner
 * mediates: picks the right club for each guest, answers their questions, and
 * finally writes an English version of a notice.
 *
 *   Step 1 (LE)        — 3 guests, 2 questions, sentence starters everywhere
 *   Step 2 (G-Kurs)    — 4 guests, 4 questions, a recommendation
 *   Step 3 (E-Kurs)    — + which club fits nobody, and an objection to answer
 *   Step 4 (Challenge) — write the English notice for the board
 */

/** The five clubs, as the guests may choose them. */
const CLUBS = [
  "Climbing club",
  "School garden",
  "Peer mediator training",
  "School band",
  "Technical club",
];

/** Who fits where (club 3 — peer mediator training — fits nobody). */
const GUESTS = [
  {
    name: "Maya",
    quote: "I'd like to do something sporty, but I'm really not good at team sports.",
    club: "Climbing club",
  },
  {
    name: "Alisha",
    quote: "I sing in a choir at home. Is there anything with music here?",
    club: "School band",
  },
  {
    name: "Diego",
    quote: "I don't want to stand on a stage, but I'm good with technology.",
    club: "Technical club",
  },
  {
    name: "Josh",
    quote: "I like being outside and working with my hands.",
    club: "School garden",
  },
];

/** Build the match-up items for the first `n` guests. */
const guestItems = (n) =>
  GUESTS.slice(0, n).map((g) => ({ left: g.name + ": “" + g.quote + "”", answer: g.club }));

/** "Why does it fit?" write-lines for the first `n` guests. */
const whyQuestions = (n) =>
  GUESTS.slice(0, n).map((g) => ({
    q: g.name + " — why does this club fit?",
    starter: "This club is for … It fits you because …",
  }));

/** The guests' follow-up questions (LE uses the first two). */
const GUEST_QUESTIONS = [
  {
    q: "Maya: “Great, climbing! Do I have to bring my own shoes and a rope — and does it matter that I have never climbed?”",
    starter: "No, you don't need … because the school …",
  },
  {
    q: "Alisha: “I'd love to sing with the band. When could I actually perform with them?”",
    starter: "The band rehearses … and the next concert is …",
  },
  {
    q: "Diego: “When and where does the technical club meet — and do I need to know anything before I come?”",
    starter: "It meets every … in the … You don't need …",
  },
  {
    q: "Josh: “What should I wear for the garden club, and when exactly is it?”",
    starter: "Wear … It takes place every … at …",
  },
];

/** The recurring problem on this page. */
const PROBLEM =
  "THE PROBLEM: Every year your school puts the German notices on the board and the guests from Boston only understand the headlines. By the time somebody has translated everything, the clubs have already started. Your teacher asks your class for a better idea.";

export default {
  title: "The notice board",

  /* ============ The realia: the German notice board ============ */
  guide: {
    label: "Das Schwarze Brett",
    subtitle:
      "Six guests from Boston are at your school for two weeks. These are the club notices on the board — all in German. Help them.",
    numbered: false,
    types: [
      {
        name: "1 · Hoch hinaus — Kletter-AG",
        tag: "montags 14.00",
        accent: "coral",
        formula:
          "Die Kletter-AG hat noch vier freie Plätze für die Jahrgänge 7 und 8. Wir treffen uns montags um 14.00 Uhr an der Kletterwand in der Turnhalle. Anfänger sind willkommen — die Ausrüstung stellt die Schule.",
        example: "Turnhalle · Kletterwand",
      },
      {
        name: "2 · Grüne Finger gesucht — Schulgarten",
        tag: "dienstags 13.15",
        accent: "olive",
        formula:
          "Im Schulgarten pflanzen wir Kräuter und Gemüse. Jeden Dienstag in der Mittagspause (13.15 Uhr) hinter dem Hauptgebäude. Für alle Klassen. Bitte alte Kleidung anziehen.",
        example: "hinter dem Hauptgebäude",
      },
      {
        name: "3 · Streitschlichter-Ausbildung",
        tag: "mittwochs 14.30",
        accent: "slate",
        formula:
          "Du möchtest anderen bei Streit helfen? Frau Özdemir bildet Schüler*innen ab Klasse 8 aus. Start: Mittwoch, 14.30 Uhr, Raum 204. Die Ausbildung dauert zehn Wochen.",
        example: "Raum 204 · zehn Wochen",
      },
      {
        name: "4 · Die Schulband sucht eine Stimme",
        tag: "freitags 13.30",
        accent: "teal",
        formula:
          "Wir suchen eine Sängerin oder einen Sänger. Probe ist freitags um 13.30 Uhr im Musikraum. Du musst keine Noten lesen können. Unser nächster Auftritt ist das Sommerfest im Juli.",
        example: "Musikraum · Auftritt im Juli",
      },
      {
        name: "5 · Lieber hinter der Bühne? — Technik-AG",
        tag: "donnerstags 15.00",
        accent: "ochre",
        formula:
          "Die Technik-AG kümmert sich um Licht und Ton bei allen Schulveranstaltungen. Treffen: donnerstags, 15.00 Uhr, in der Aula. Ab Klasse 7, keine Vorkenntnisse nötig.",
        example: "Aula · Licht und Ton",
      },
    ],
    tensesLabel: "Useful words for your English version",
    tenses: [
      { tense: "club / activity", use: "die AG", accent: "olive", signals: "It is a club for …" },
      { tense: "it meets / takes place", use: "es findet statt", accent: "slate", signals: "It meets every Monday at 2 p.m." },
      { tense: "equipment", use: "die Ausrüstung", accent: "coral", signals: "The school gives you the equipment." },
      { tense: "beginner", use: "Anfänger*in", accent: "teal", signals: "Beginners are welcome." },
      { tense: "rehearsal", use: "die Probe", accent: "ochre", signals: "The rehearsal is on Friday." },
      { tense: "stage", use: "die Bühne", accent: "olive", signals: "You don't have to be on stage." },
      { tense: "to look after", use: "sich kümmern um", accent: "slate", signals: "They look after light and sound." },
      { tense: "herbs", use: "Kräuter", accent: "coral", signals: "We plant herbs and vegetables." },
      { tense: "peer mediator", use: "Streitschlichter*in", accent: "teal", signals: "Peer mediators help in arguments." },
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
          type: "match-up",
          kind: "Zuordnen",
          title: "Which club fits which guest?",
          intro:
            "Before they came, the guests wrote what they are looking for. Choose the right club for each guest.",
          help: "Finde für jede*n Gast die passende AG.",
          options: CLUBS,
          items: guestItems(3),
        },
        {
          type: "written",
          kind: "Begründen",
          title: "Why does it fit?",
          intro:
            "Now say in English why the club fits. Example for Maya: “You climb on your own, not in a team. Beginners are welcome and the school gives you the equipment.”",
          help: "Sentence starters: This club is for … | It fits you because … | You don't need … | They meet every … at … in …",
          answerLines: 2,
          questions: whyQuestions(3).slice(1),
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro:
            "Answer in English. Name the club and say when and where it meets.",
          help: "Antworte auf Englisch. Nenne die AG und sage, wann und wo sie stattfindet.",
          answerLines: 2,
          questions: GUEST_QUESTIONS.slice(0, 2),
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM + " Sort the ideas, then press Check.",
          help: "Die Aushänge hängen nur auf Deutsch. Bis jemand alles übersetzt hat, haben die AGs schon begonnen.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We write a short English version with four points: what, who for, when, where.",
                "Two students answer questions about the clubs in every break.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "We translate every notice word by word.",
                "We tell the guests to use a translation app.",
                "We only tell them about the clubs we like ourselves.",
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
          type: "match-up",
          kind: "Zuordnen",
          title: "Which club fits which guest?",
          intro:
            "Before they came, the guests wrote what they are looking for. Choose the right club for each guest.",
          help: "Finde für jede*n Gast die passende AG.",
          options: CLUBS,
          items: guestItems(4),
        },
        {
          type: "written",
          kind: "Begründen",
          title: "Why does it fit?",
          intro: "Now say in English why each club fits.",
          help: "Sentence starters: This club is for … | It fits you because … | You don't need … | They meet every … at … in …",
          answerLines: 2,
          questions: whyQuestions(4),
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro: "Answer in English. Name the club and say when and where it meets.",
          help: "Nenne die AG und sage, wann und wo sie stattfindet.",
          answerLines: 2,
          questions: GUEST_QUESTIONS,
        },
        {
          type: "written",
          kind: "Empfehlen",
          title: "Your recommendation",
          intro:
            "Which club would you recommend to the guests? Write two sentences: which one and why.",
          help: "Welche AG würdest du empfehlen? Schreibe zwei Sätze.",
          starters: ["I would recommend …", "I recommend it because …"],
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
          help: "Useful phrases: Our solution is … · This helps because … · The guests only need … · First, we would … · Then …",
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
          type: "match-up",
          kind: "Zuordnen",
          title: "Which club fits which guest?",
          intro:
            "Before they came, the guests wrote what they are looking for. Choose the right club for each guest.",
          options: CLUBS,
          items: guestItems(4),
        },
        {
          type: "written",
          kind: "Begründen",
          title: "Why does it fit?",
          intro:
            "Say in English why each club fits. Select only the information the guest really needs.",
          answerLines: 2,
          questions: whyQuestions(4),
        },
        {
          type: "written",
          kind: "Analysieren",
          title: "And one more",
          intro:
            "One of the five clubs does not fit any of the guests. Which one is it — and why not?",
          answerLines: 2,
          questions: [
            { q: "Which club fits nobody, and why not?", starter: "The … does not fit anybody because …" },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro: "Answer in English. Name the club and say when and where it meets.",
          answerLines: 2,
          questions: GUEST_QUESTIONS,
        },
        {
          type: "written",
          kind: "Empfehlen",
          title: "Your recommendation",
          intro:
            "Which club would you recommend to the guests? Write two sentences: which one and why.",
          starters: ["I would recommend …", "I recommend it because …"],
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
            "Somebody says: “A short version leaves out important information — that is unfair to the guests.” What do you answer?",
          help: "Useful phrases: That is true, but … · The guests only need … · They can still ask … · A notice nobody understands helps nobody.",
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
          title: "Write the English notice",
          intro:
            "Choose ONE club from the board and write the English version for the guests — short enough to read while standing in the hallway. Four points are enough: what it is, who it is for, when, where.",
          min: 35,
          max: 80,
          placeholder: "CLIMBING CLUB\nWhat: …\nWho for: …\nWhen: …\nWhere: …",
          chips: [
            "It is a club for …",
            "It meets every … at …",
            "You don't need …",
            "Beginners are welcome.",
            "The school gives you …",
          ],
          checklist: [
            "A guest knows WHAT the club does.",
            "A guest knows WHO it is for.",
            "A guest knows WHEN it meets.",
            "A guest knows WHERE it meets.",
            "I left out everything they don't need.",
          ],
          help: "★ Bonus: give your notice to a partner. Can they find all four points in ten seconds?",
        },
      ],
    },
  ],
};
