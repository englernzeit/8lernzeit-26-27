/**
 * The best days of your life (Unit 2) — Mediation: the club notice board
 *
 * Six students from an American high school are at your school for two weeks.
 * On the notice board they find the German notices for the after-class clubs.
 * They do not understand them — so you tell them what matters.
 *
 *   Step 1 (LE)        — three short notices: the club in English, the day
 *                        and the time, and three answers to the guests
 *   Step 2 (G-Kurs)    — five real notices: which club fits which guest,
 *                        four answers that really answer the question
 *   Step 3 (E-Kurs)    — the same, plus the club that fits nobody
 *   Step 4 (Challenge) — write the English card for the whole board
 *
 * Mediation means passing on what matters — never translating word by word.
 */

/* ============ The four points — the strategy at every level ============ */

const FOUR_POINTS = [
  "1 · Was ist das? → This club is … (Kletter-AG → This is a climbing club.)",
  "2 · Für wen? Wann? Wo? → It is for … It meets … in … (montags um 14.00 Uhr in der Turnhalle → They meet on Mondays at 2 p.m. in the gym.)",
  "3 · Der Gast braucht es nicht — Jahrgänge, Anmeldung, Namen → leave it out. Your guest is here for two weeks; he does not need the name of the teacher.",
  "WATCH OUT: word by word (“The climbing-AG has still four free places …”) is NOT mediation. Four points are: “This is a climbing club. It meets on Mondays at 2 p.m. in the gym.”",
];

const WORDS = [
  {
    label: "What a notice says",
    accent: "olive",
    pairs: [
      ["available", "frei, verfügbar — there is still a place"],
      ["position", "der freie Platz — a place in a group"],
      ["organize", "organisieren — to put something together"],
      ["flute", "die Querflöte — the instrument the band is looking for"],
    ],
  },
  {
    label: "Helping somebody decide",
    accent: "coral",
    pairs: [
      ["artistic", "künstlerisch begabt — good at drawing and painting"],
      ["risk", "das Risiko — something that could go wrong"],
      ["a piece of advice", "ein Rat — what you say when somebody asks you what to do"],
      ["fund-raising", "die Spendenaktion — collecting money for something"],
    ],
  },
];

/* ============ Step 1 (LE) — three notices ============ */

const LE_NOTICES = [
  ["1 Kletter-AG — Montags, 14.00 Uhr, in der Turnhalle. Vier Plätze sind frei. Anfänger sind willkommen."],
  ["2 Schulband — Freitags, 13.30 Uhr, im Musikraum. Wir suchen eine Querflöte."],
  ["3 Kunst-AG — Mittwochs, 15.00 Uhr, im Kunstraum. Wir malen ein großes Wandbild."],
];

/* ============ Steps 2 and 3 — five real notices ============ */

const NOTICES = [
  ["1 Hoch hinaus — Kletter-AG"],
  [
    "Die Kletter-AG hat noch vier freie Plätze für die Jahrgänge 7 und 8. Wir treffen uns montags um 14.00 Uhr an der Kletterwand in der Turnhalle. Anfänger sind willkommen — die Ausrüstung stellt die Schule.",
  ],
  ["2 Grüne Finger gesucht — Schulgarten"],
  [
    "Im Schulgarten pflanzen wir Kräuter und Gemüse. Jeden Dienstag in der Mittagspause (13.15 Uhr) hinter dem Hauptgebäude. Für alle Klassen. Bitte alte Kleidung anziehen.",
  ],
  ["3 Streitschlichter-Ausbildung"],
  [
    "Du möchtest anderen bei Streit helfen? Frau Özdemir bildet Schüler·innen ab Klasse 8 aus. Start: Mittwoch, 14.30 Uhr, Raum 204. Die Ausbildung dauert zehn Wochen.",
  ],
  ["4 Die Schulband sucht eine Stimme"],
  [
    "Wir suchen eine Sängerin oder einen Sänger. Probe ist freitags um 13.30 Uhr im Musikraum. Du musst keine Noten lesen können. Unser nächster Auftritt ist das Sommerfest im Juli.",
  ],
  ["5 Lieber hinter der Bühne? — Technik-AG"],
  [
    "Die Technik-AG kümmert sich um Licht und Ton bei allen Schulveranstaltungen. Treffen: donnerstags, 15.00 Uhr, in der Aula. Ab Klasse 7, keine Vorkenntnisse nötig.",
  ],
];

const USEFUL_WORDS =
  "club / activity — die AG · it is for — es ist für · it meets / takes place — es findet statt · equipment — die Ausrüstung · beginner — Anfänger·in · rehearsal — die Probe · stage — die Bühne · to look after — sich kümmern um · herbs — Kräuter · peer mediator — Streitschlichter·in";

/** Exercise 1 (G-Kurs · E-Kurs) — which club fits which guest? */
const GUEST_MATCH = {
  options: ["climbing club", "school garden", "school band", "technical club", "peer mediator training"],
  items: [
    { left: "Maya: “I'd like to do something sporty, but I'm really not good at team sports.”", answer: "climbing club" },
    { left: "Alisha: “I sing in a choir at home. Is there anything with music here?”", answer: "school band" },
    { left: "Diego: “I don't want to stand on a stage, but I'm good with technology.”", answer: "technical club" },
    { left: "Josh: “I like being outside and working with my hands.”", answer: "school garden" },
  ],
};

/* ============ The problems ============ */

const LE_PROBLEM = {
  problem:
    "Your guest wants to join a club. He is here for two weeks and he does not speak German.",
  problemDe:
    "Dein Gast möchte in eine AG. Er ist zwei Wochen hier und spricht kein Deutsch.",
  ideas: [
    "We translate every notice word by word.",
    "We tell him the three points of one club that fits him.",
    "He waits until he can read German.",
  ],
};

const LE_BANK =
  "two weeks is short · he can start at once · word by word takes too long · German takes a long time";

const LE_NOTE =
  "Richtig ist Idee 2. Wort für Wort dauert zu lange, und Deutsch lernt er in zwei Wochen nicht. Beispiellösung: Idea 2 is best, because he can start at once.";

const GK_PROBLEM = {
  problem:
    "The notices on your school board are only in German. The guests understand the headlines and nothing else.",
  problemDe:
    "Die Aushänge am Schwarzen Brett hängen nur auf Deutsch. Die Gäste verstehen die Überschriften und sonst nichts.",
  ideas: [
    "We translate every notice word by word.",
    "A short English card with what, who for, when, where.",
    "We tell the guests to use a translation app.",
  ],
};

const GK_NOTE =
  "Bewertet wird die Begründung, nicht die Wahl. Idee 2 ist am stärksten: vier Punkte, sofort lesbar, von Schüler·innen gemacht. Idee 1 dauert zu lange und hilft nicht beim Auswählen. Idee 3 schiebt die Arbeit auf die Gäste ab und übersetzt Schulwörter oft falsch. Beispiellösung: Idea 2 is best, because the guests only need four points and they can read the card in a minute.";

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "AVAILABLE", hint: "frei, verfügbar" },
  { word: "POSITION", hint: "der freie Platz" },
  { word: "ORGANIZE", hint: "organisieren" },
  { word: "FLUTE", hint: "die Querflöte" },
  { word: "ARTISTIC", hint: "künstlerisch begabt" },
  { word: "RISK", hint: "das Risiko" },
  { word: "ADVICE", hint: "ein Rat" },
  { word: "EQUIPMENT", hint: "die Ausrüstung" },
  { word: "BEGINNER", hint: "der·die Anfänger·in" },
  { word: "REHEARSAL", hint: "die Probe" },
  { word: "STAGE", hint: "die Bühne" },
  { word: "HERBS", hint: "die Kräuter" },
  { word: "GARDEN", hint: "der Garten" },
  { word: "CLIMBING", hint: "das Klettern" },
  { word: "NOTICE", hint: "der Aushang" },
  { word: "SINGER", hint: "der·die Sänger·in" },
];

export default {
  title: "The club notice board",

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
          title: "The words of this lesson",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The four points",
          intro:
            "Mediation means passing on what matters — not translating word by word. Keep this next to you.",
          paragraphs: FOUR_POINTS.slice(0, 2).concat([FOUR_POINTS[3]]).map((l) => [l]),
        },
        {
          type: "text",
          kind: "Das Schwarze Brett",
          title: "The notice board",
          intro:
            "Six students from an American high school are at your school for two weeks. These are the German notices they found. They do not understand them — help them.",
          paragraphs: LE_NOTICES,
        },
        {
          type: "gap-fill",
          kind: "Zuordnen",
          title: "What is the club in English?",
          intro:
            "Write the English name of the club. Example: Technik-AG → technical club. Word box: art club · climbing club · school band",
          help: "Schreibe den englischen Namen der AG.",
          bank: ["art club", "climbing club", "school band"],
          bankCap: "Word box",
          items: [
            { hint: "1 · Kletter-AG", segments: [{ answer: "climbing club", size: 15 }] },
            { hint: "2 · Schulband", segments: [{ answer: "school band", size: 14 }] },
            { hint: "3 · Kunst-AG", segments: [{ answer: "art club", size: 12 }] },
          ],
        },
        {
          type: "gap-fill",
          kind: "Tabelle",
          title: "When and where?",
          intro:
            "Fill in the table in English. The notices help you. Example: Technik-AG, donnerstags 15.00 Uhr → day: Thursday · time: 3 p.m.",
          help: "Fülle die Tabelle auf Englisch aus.",
          items: [
            {
              hint: "1 · Kletter-AG",
              segments: [
                "day: ",
                { answer: "Monday", size: 10 },
                " · time: ",
                { answer: "2 p.m.", accept: ["2pm", "2 pm", "14.00", "2 o'clock", "2"], size: 9 },
              ],
            },
            {
              hint: "2 · Schulband",
              segments: [
                "day: ",
                { answer: "Friday", size: 10 },
                " · time: ",
                { answer: "1.30 p.m.", accept: ["1.30", "1:30", "1:30 p.m.", "13.30", "half past one"], size: 11 },
              ],
            },
            {
              hint: "3 · Kunst-AG",
              segments: [
                "day: ",
                { answer: "Wednesday", size: 12 },
                " · time: ",
                { answer: "3 p.m.", accept: ["3pm", "3 pm", "15.00", "3 o'clock", "3"], size: 9 },
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro: "Answer in English. Use the sentence starters.",
          help: "Sentence starters: The … club is on … at … | Yes, the … meets on … at … | You can … and there is a …",
          answerLines: 2,
          questions: [
            { q: "1. Maya: “I like climbing. When is the club — and is there a free place for me?”", starter: "The climbing club is on …" },
            { q: "2. Alisha: “I play the flute. Is there a club for me?”", starter: "Yes, the school band meets on …" },
            { q: "3. Diego: “What else can I do at this school?” Name two more clubs.", starter: "You can … and there is a …" },
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
            "Guess the club word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "The words of this lesson",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The four points",
          intro:
            "Mediation means passing on what matters — not translating word by word. Keep this next to you.",
          paragraphs: FOUR_POINTS.map((l) => [l]),
        },
        {
          type: "text",
          kind: "Das Schwarze Brett",
          title: "The notice board",
          intro:
            "Six students from an American high school are at your school for two weeks. These are the five German notices they found. Useful words: " +
            USEFUL_WORDS,
          paragraphs: NOTICES,
        },
        {
          type: "match-up",
          kind: "Zuordnen",
          title: "Which club fits which guest?",
          intro:
            "Each guest wrote what he or she is looking for. Which club fits? Example: Sam: “I like reading.” → Reading club.",
          help: "Welche AG passt zu welchem Gast?",
          options: GUEST_MATCH.options,
          items: GUEST_MATCH.items,
        },
        {
          type: "written",
          kind: "Begründen",
          title: "Why does it fit?",
          intro:
            "Now write one sentence in English for each guest that says WHY this club fits them.",
          help: "Sentence starters: This club is for … | It fits you because … | You don't need … | They meet every … at … in …",
          answerLines: 2,
          questions: [
            { q: "Maya — not good at team sports", starter: "It fits you because …" },
            { q: "Alisha — sings in a choir at home", starter: "It fits you because …" },
            { q: "Diego — good with technology, not on a stage", starter: "It fits you because …" },
            { q: "Josh — likes being outside", starter: "It fits you because …" },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro:
            "Answer each guest in English. Every answer must name the club, the day, the time and the place — and it must answer the question the guest really asked.",
          help: "Lies den Aushang zu Ende! Bei Alisha gehört dazu, dass der nächste Auftritt erst im Juli ist.",
          answerLines: 3,
          questions: [
            { q: "1. Maya: “Great, climbing! Do I have to bring my own shoes and a rope — and does it matter that I have never climbed?”", starter: "No, you don't have to …" },
            { q: "2. Alisha: “I'd love to sing with the band. When could I actually perform with them?”", starter: "Not while you are here, I'm afraid: …" },
            { q: "3. Diego: “When and where does the technical club meet — and do I need to know anything before I come?”", starter: "They meet on …" },
            { q: "4. Josh: “What should I wear for the garden club, and when exactly is it?”", starter: "Wear …" },
          ],
        },
        {
          type: "written",
          kind: "Empfehlen",
          title: "Your recommendation",
          intro:
            "Which club would you recommend to all the guests? Write two sentences: the first says which club, the second says why it is good for guests who are only here for two weeks.",
          help: "Beispiel: I would recommend the school garden, because it is in the lunch break. The guests don't have to stay longer at school.",
          answerLines: 2,
          questions: [
            { q: "Which club do you recommend?", starter: "I would recommend …" },
            { q: "Why is it good for a two-week guest?", starter: "It is good for them, because …" },
          ],
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
            "Guess the club word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "The words of this lesson",
          intro:
            "Eight words. Say what each one means before you look.",
          sections: WORDS,
        },
        {
          type: "text",
          kind: "Theorie",
          title: "The four points",
          intro:
            "Mediation means passing on what matters — not translating word by word. Keep this next to you.",
          paragraphs: FOUR_POINTS.map((l) => [l]),
        },
        {
          type: "text",
          kind: "Das Schwarze Brett",
          title: "The notice board",
          intro:
            "Six students from an American high school are at your school for two weeks. These are the five German notices they found. Useful words: " +
            USEFUL_WORDS,
          paragraphs: NOTICES,
        },
        {
          type: "match-up",
          kind: "Zuordnen",
          title: "Which club fits which guest?",
          intro:
            "Each guest wrote what he or she is looking for. Which club fits? One of the five clubs will be left over — you need it in the next task.",
          options: GUEST_MATCH.options,
          items: GUEST_MATCH.items,
        },
        {
          type: "written",
          kind: "Begründen",
          title: "Why does it fit?",
          intro: "Write one sentence in English for each guest that says WHY this club fits them.",
          help: "Die Zuordnung zählt nur mit einer Begründung, die sich wirklich auf den Wunsch bezieht.",
          answerLines: 2,
          questions: [
            { q: "Maya — not good at team sports", starter: "It fits you because …" },
            { q: "Alisha — sings in a choir at home", starter: "It fits you because …" },
            { q: "Diego — good with technology, not on a stage", starter: "It fits you because …" },
            { q: "Josh — likes being outside", starter: "It fits you because …" },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer the guests",
          intro:
            "Answer each guest in English. Every answer must name the club, the day, the time and the place — and it must answer the question the guest really asked.",
          answerLines: 3,
          questions: [
            { q: "1. Maya: “Great, climbing! Do I have to bring my own shoes and a rope — and does it matter that I have never climbed?”", starter: "No, you don't have to …" },
            { q: "2. Alisha: “I'd love to sing with the band. When could I actually perform with them?”", starter: "Not while you are here, I'm afraid: …" },
            { q: "3. Diego: “When and where does the technical club meet — and do I need to know anything before I come?”", starter: "They meet on …" },
            { q: "4. Josh: “What should I wear for the garden club, and when exactly is it?”", starter: "Wear …" },
          ],
        },
        {
          type: "written",
          kind: "Empfehlen",
          title: "Your recommendation",
          intro:
            "Which club would you recommend to all the guests? Write two sentences: which club, and why it is good for guests who are only here for two weeks.",
          answerLines: 2,
          questions: [
            { q: "Which club do you recommend?", starter: "I would recommend …" },
            { q: "Why is it good for a two-week guest?", starter: "It is good for them, because …" },
          ],
        },
        {
          type: "written",
          kind: "Schlussfolgern · Challenge",
          title: "Which club fits nobody?",
          intro:
            "One of the five clubs does not fit any of the guests. Which one is it — and why not? Answer in one or two sentences. Name the real reason, not just “it doesn't fit”.",
          help: "Tipp: Lies noch einmal, wie lange die Ausbildung dauert und ab welcher Klasse sie ist.",
          answerLines: 2,
          questions: [{ q: "Which club fits nobody, and why not?", starter: "The … does not fit anybody, because …" }],
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
            "Guess the club word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "The English card for the board",
          intro:
            "Make the card that solves the problem: ONE English card for the whole notice board. Four points for each club — what it is, who it is for, when and where it meets. Short enough to read in a minute.",
          min: 60,
          max: 130,
          placeholder: "AFTER-CLASS CLUBS — in English\n\nClimbing club · for beginners too · Mondays, 2 p.m., in the gym …",
          chips: [
            "… club · for … · … at … · in …",
            "Beginners welcome.",
            "The school gives you the equipment.",
            "You don't need any experience.",
            "Open to all classes.",
            "Wear old clothes.",
          ],
          checklist: [
            "Every club has what · who for · when · where.",
            "I left out what a two-week guest does not need.",
            "I did not translate word by word.",
            "A guest could read it in about a minute.",
            "The club that fits nobody is not on my card — or I said why.",
          ],
          help: "★ Bonus: give your card to a partner. Can they pick a club for Maya in ten seconds?",
        },
      ],
    },
  ],
};
