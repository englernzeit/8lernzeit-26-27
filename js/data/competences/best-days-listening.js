/**
 * The best days of your life (Unit 2) — Listening: "Morning announcements"
 *
 * You are an exchange student at an American high school. Every morning Mr
 * Okonkwo reads the announcements over the loudspeaker.
 *
 *   Step 1 (LE)        — the FOUR SHORT announcements: true/false, a
 *                        part-filled table, "which place?"
 *   Step 2 (G-Kurs)    — the four long ones: six multiple-choice, the table,
 *                        four detail questions
 *   Step 3 (E-Kurs)    — the same, plus a fifth detail and an inference
 *   Step 4 (Challenge) — write and read your own morning announcement
 *
 * G-Kurs and E-Kurs hear the SAME four long recordings and differ only in what
 * they have to get out of them; LE hears the short version. Every recording
 * carries its script behind the "Help me" button, so a learner who missed one
 * detail can check it without replaying the whole thing.
 */

const AUDIO = "assets/audio/unit2";

/* The four long announcements (G-Kurs · E-Kurs) — one file each, so a learner
   can replay just the one they missed instead of hunting through a long track. */
const ANN = [
  {
    src: `${AUDIO}/ann1.mp3`,
    label: "🎧 1 — Picture day",
    transcript: [
      "Good morning, everyone. This is Mr Okonkwo in the main office.",
      "First of all: picture day is this Wednesday. All classes come to the gym during second period — please don't come at any other time. The photographer starts at nine. You can wear what you like, but no hats and no sunglasses, please. The order forms are in the hallway outside the office. One set of photos costs twelve dollars, and you pay when you collect them in January.",
    ],
  },
  {
    src: `${AUDIO}/ann2.mp3`,
    label: "🎧 2 — Bus 14",
    transcript: [
      "Next, something important for everybody who takes bus number fourteen. From Monday, bus fourteen leaves at two fifty in the afternoon, and not at three o'clock. That is ten minutes earlier. The driver will not wait. If you have a club until three, please speak to Mrs Delgado in Room 108 — she is organising a second bus at half past three.",
    ],
  },
  {
    src: `${AUDIO}/ann3.mp3`,
    label: "🎧 3 — The science fair",
    transcript: [
      "Now the science fair. It takes place this Friday in the big hall, from four until seven in the evening. Twenty-two projects from the ninth grade are going to be there. Parents, friends and students from other grades are all welcome, and it's free. The winning project gets five hundred dollars for new equipment. Come along — last year people said it was the best evening of the school year.",
    ],
  },
  {
    src: `${AUDIO}/ann4.mp3`,
    label: "🎧 4 — Winter coats",
    transcript: [
      "And finally: our winter clothing collection. If you have a warm coat, a jacket or boots at home that you don't wear any more, bring them to Room 115. Everything goes to the night shelter on Oak Street. Please bring everything by Friday — on Saturday the van picks it up. Clean clothes only, please. Thank you, and have a good day.",
    ],
  },
];

/** The short version (LE) — all four announcements in one short recording. */
const LE_AUDIO = {
  src: `${AUDIO}/le-announcements.mp3`,
  label: "🎧 Mr Okonkwo — this morning (four short announcements)",
  transcript: [
    "1 — The lift: Good morning, everyone. This is Mr Okonkwo. The lift is broken today. Please use the stairs.",
    "2 — The bike shed: The bike shed is closed this morning. Please leave your bike in the car park.",
    "3 — Sports day: Sports day starts in the third period. At eleven o'clock all classes head for the sports field.",
    "4 — Visitors: And for our visitors: please come to the lobby and get a visitor pass. Thank you, and have a good day.",
  ],
};

/** The eight words of this lesson — the same list at every level. */
const WORDS = [
  { label: "How to open", accent: "olive", pairs: [
    ["go off", "klingeln, losgehen — the alarm goes off at six"],
    ["be in a hurry", "es eilig haben — to have very little time"],
    ["grab", "schnappen, greifen — to take something quickly"],
    ["head for", "zusteuern auf — to go straight towards a place"],
  ] },
  { label: "Around the school", accent: "slate", pairs: [
    ["elevator", "der Aufzug — the lift that takes you up a floor (AE)"],
    ["lobby", "die Eingangshalle — the big hall just inside the entrance"],
    ["visitor pass", "der Besucherausweis — a badge that visitors wear"],
    ["period", "die Unterrichtsstunde — one lesson in the timetable (AE)"],
  ] },
];

/** What you write down — the listening strategy, the same at every level. */
const STRATEGY = [
  "You hear a DAY or a TIME — on Monday · at 2 p.m. · today · by Friday → write down the day and the time.",
  "You hear a PLACE — in the gym · in Room 115 · in the library → write down the place.",
  "You hear a PRICE — two dollars · free · nothing is said → write down the price, or a dash (—).",
  "WATCH OUT: “ten minutes earlier” is not “ten past”. Write the number you really hear, not the number you expect.",
];

/** The recurring problem on this page — the same three ideas at every level. */
const PROBLEM = {
  problem:
    "The announcements are read in English now. But the loudspeaker is old and in the morning everybody is still talking.",
  problemDe:
    "Die Durchsagen werden jetzt auf Englisch vorgelesen. Aber der Lautsprecher ist alt, und morgens reden alle noch.",
  ideas: [
    "Mr Okonkwo speaks much louder.",
    "One student writes the three most important points on the board.",
    "We stop making announcements.",
  ],
};

const LE_BANK =
  "everybody can read it · you can read it later · louder is still too noisy · then nobody knows anything";

const LE_NOTE =
  "Richtig ist Idee 2. Lauter sprechen hilft nicht gegen den Lärm, und ohne Durchsagen weiß niemand mehr etwas. Beispiellösung: Idea 2 is best, because everybody can read it.";

const GK_NOTE =
  "Bewertet wird die Begründung, nicht die Wahl. Idee 2 ist am stärksten: Geschriebenes kann man auch später noch lesen. Idee 1 hilft kaum — gegen dreißig redende Schüler·innen kommt auch ein lauter Lautsprecher nicht an. Idee 3 löst das Problem, indem sie die Information abschafft. Beispiellösung: Idea 2 is best, because everybody can read the three points later, even if the room was loud.";

/** The hangman words for this page (Unit 1's game, Unit 2's words). */
const GAME_WORDS = [
  { word: "ELEVATOR", hint: "der Aufzug (AE)" },
  { word: "LOBBY", hint: "die Eingangshalle" },
  { word: "PERIOD", hint: "die Unterrichtsstunde (AE)" },
  { word: "GRAB", hint: "schnappen, greifen" },
  { word: "HURRY", hint: "be in a … — es eilig haben" },
  { word: "ANNOUNCEMENT", hint: "die Durchsage" },
  { word: "GYM", hint: "die Turnhalle" },
  { word: "HALLWAY", hint: "der Flur" },
  { word: "SHELTER", hint: "die Notunterkunft" },
  { word: "SCIENCE", hint: "… fair — die Wissenschaft" },
  { word: "PHOTOGRAPHER", hint: "der·die Fotograf·in" },
  { word: "WEDNESDAY", hint: "Tag des Schulfotos" },
  { word: "FRIDAY", hint: "Abgabetag für die Mäntel" },
  { word: "DOLLARS", hint: "zwölf … kostet ein Fotosatz" },
  { word: "STAIRS", hint: "die Treppe" },
  { word: "VISITOR", hint: "der·die Besucher·in" },
  { word: "OFFICE", hint: "das Sekretariat" },
  { word: "LOUDSPEAKER", hint: "der Lautsprecher" },
];

export default {
  title: "Morning announcements",

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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you listen",
          intro:
            "You are an exchange student at an American high school. Every morning Mr Okonkwo reads the announcements. Read the tasks below first: what do you have to listen for — a day, a place or a price? Write down two things.",
          help: "Lies zuerst die Aufgaben. Worauf musst du hören? Schreibe zwei Dinge auf.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "right-wrong",
          kind: "Hören · 1. Mal",
          title: "Listen the first time — true or false?",
          intro:
            "Listen to the four short announcements. Is each sentence true or false? Example: “Sports day is on Monday.” → false, because nobody says a day, only the third period.",
          help: "Höre zu und entscheide: true oder false?",
          audio: LE_AUDIO,
          statements: [
            { text: "The lift is broken today.", answer: true, ph: "🛗" },
            { text: "You can use the lift today.", answer: false, ph: "🚫" },
            { text: "The bike shed is open this morning.", answer: false, ph: "🚲" },
            { text: "Sports day starts in the third period.", answer: true, ph: "🏃" },
            { text: "All classes meet at twelve o'clock.", answer: false, ph: "🕐" },
            { text: "Visitors get a visitor pass in the lobby.", answer: true, ph: "🪪" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Hören · 2. Mal",
          title: "Listen again and fill in the table",
          intro:
            "Listen again and fill in the empty boxes. Some boxes are already done for you. If an announcement does not say it, there is a dash (—).",
          help: "Höre noch einmal und fülle die leeren Felder aus.",
          audio: LE_AUDIO,
          items: [
            { hint: "The lift", segments: ["1 The lift — When? today · Where? — (no place is given)"] },
            {
              hint: "The bikes",
              segments: ["2 The bikes — When? ", { answer: "this morning", accept: ["today", "morning"], size: 14 }, " · Where? the car park"],
            },
            {
              hint: "Sports day",
              segments: [
                "3 Sports day — When? ",
                { answer: "third period", accept: ["the third period", "11 o'clock", "eleven o'clock", "at 11", "11"], size: 14 },
                " · Where? ",
                { answer: "the sports field", accept: ["sports field"], size: 14 },
              ],
            },
            {
              hint: "The visitors",
              segments: ["4 The visitors — When? — · Where? ", { answer: "the lobby", accept: ["lobby"], size: 12 }],
            },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Welcher Ort?",
          title: "Which place is it?",
          intro:
            "The places around the school: 1 the bus stop · 2 the bike shed · 3 the main entrance · 4 the sports field · 5 the car park · 6 the schoolyard. Example: “Students stand here in the break.” → 6",
          help: "Um welchen Ort geht es? Wähle die Nummer.",
          shuffle: false,
          questions: [
            { q: "Put your bike here today.", options: ["1 the bus stop", "4 the sports field", "5 the car park", "6 the schoolyard"], correct: 2 },
            { q: "At eleven o'clock all classes go here.", options: ["2 the bike shed", "4 the sports field", "5 the car park", "3 the main entrance"], correct: 1 },
            { q: "Visitors come in here and get their pass.", options: ["3 the main entrance", "6 the schoolyard", "1 the bus stop", "2 the bike shed"], correct: 0 },
            { q: "The school bus stops here.", options: ["5 the car park", "4 the sports field", "1 the bus stop", "3 the main entrance"], correct: 2 },
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
            "Guess the school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "What you write down",
          intro: "Keep this next to you while you listen.",
          paragraphs: STRATEGY.map((line) => [line]),
        },
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you listen",
          intro:
            "Read the tasks on the next cards before you listen. Then write down two things you will have to listen for — a day, a time, a place or a price.",
          help: "Lies zuerst die Aufgaben. Schreibe zwei Dinge auf, auf die du achten musst.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "multiple-choice",
          kind: "Hören · 1. Mal",
          title: "Listen the first time",
          intro:
            "Listen to the four announcements and choose a), b) or c). Example: “The photographer starts at …” → nine.",
          help: "Höre die Durchsagen. Wähle bei jedem Satz eine Antwort.",
          audio: ANN,
          shuffle: false,
          questions: [
            { q: "The classes come to the gym …", options: ["a) during first period", "b) during second period", "c) after school"], correct: 1 },
            { q: "One set of school photos costs …", options: ["a) nine dollars", "b) twelve dollars", "c) fifteen dollars"], correct: 1 },
            { q: "From Monday, bus 14 leaves at …", options: ["a) 2.50 p.m.", "b) 3.00 p.m.", "c) 3.30 p.m."], correct: 0 },
            { q: "At the science fair you can see projects from …", options: ["a) the eighth grade", "b) the ninth grade", "c) all grades"], correct: 1 },
            { q: "The winning project gets …", options: ["a) a trip to Boston", "b) five hundred dollars", "c) new computers"], correct: 1 },
            { q: "The clothes have to be in Room 115 by …", options: ["a) Wednesday", "b) Friday", "c) Saturday"], correct: 1 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Hören · 2. Mal",
          title: "Listen again and fill in the table",
          intro:
            "Listen a second time and fill in the empty boxes. Picture day is already done for you. If an announcement does not say it, write a dash (—).",
          help: "Höre ein zweites Mal und fülle die leeren Felder aus. Wenn etwas nicht gesagt wird: —",
          audio: ANN,
          items: [
            {
              hint: "1 Picture day · the school photos",
              segments: ["When? Wednesday, 2nd period · Where? the gym · How much? ", { answer: "twelve dollars", accept: ["12 dollars", "$12", "twelve", "12"], size: 14 }],
            },
            {
              hint: "2 Bus 14 · the bus leaves earlier",
              segments: [
                "When? from Monday, ",
                { answer: "2.50", accept: ["2.50 p.m.", "2:50", "2:50 p.m.", "ten to three", "two fifty"], size: 10 },
                " · Where? — · How much? ",
                { answer: "—", accept: ["-", "–", "not said", "nothing", "no price"], size: 8 },
              ],
            },
            {
              hint: "3 Science fair · 22 projects from the ninth grade",
              segments: [
                "When? Friday, ",
                { answer: "4 to 7", accept: ["4-7", "four to seven", "4 until 7", "from 4 to 7", "4 p.m. to 7 p.m."], size: 10 },
                " · Where? ",
                { answer: "the big hall", accept: ["big hall", "hall"], size: 12 },
                " · How much? ",
                { answer: "free", accept: ["it's free", "nothing"], size: 8 },
              ],
            },
            {
              hint: "4 Winter coats · a clothing collection for the night shelter",
              segments: [
                "When? by ",
                { answer: "Friday", size: 9 },
                " · Where? ",
                { answer: "Room 115", accept: ["room 115", "115"], size: 10 },
                " · How much? ",
                { answer: "—", accept: ["-", "–", "not said", "nothing", "no price"], size: 8 },
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Details",
          title: "The details",
          intro: "Write a full sentence under each question. You may listen a third time.",
          help: "Schreibe unter jede Frage einen ganzen Satz. Du darfst ein drittes Mal hören.",
          audio: ANN,
          answerLines: 2,
          questions: [
            { q: "1. What are students not allowed to wear for the school photo?", starter: "Students are not allowed to wear …" },
            { q: "2. When do you pay for your photos?", starter: "You pay …" },
            { q: "3. Who do you talk to if your club finishes at three o'clock?", starter: "You talk to …" },
            { q: "4. What does the winning project at the science fair get the money for?", starter: "The money is for …" },
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
            "Guess the school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "What you write down",
          intro: "Keep this next to you while you listen.",
          paragraphs: STRATEGY.map((line) => [line]),
        },
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you listen",
          intro:
            "Read the tasks on the next cards before you listen. Then write down two things you will have to listen for — a day, a time, a place or a price.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "multiple-choice",
          kind: "Hören · 1. Mal",
          title: "Listen the first time",
          intro:
            "Listen to the four announcements and choose a), b) or c). Make notes while you listen. Example: “The photographer starts at …” → nine.",
          audio: ANN,
          shuffle: false,
          questions: [
            { q: "The classes come to the gym …", options: ["a) during first period", "b) during second period", "c) after school"], correct: 1 },
            { q: "One set of school photos costs …", options: ["a) nine dollars", "b) twelve dollars", "c) fifteen dollars"], correct: 1 },
            { q: "From Monday, bus 14 leaves at …", options: ["a) 2.50 p.m.", "b) 3.00 p.m.", "c) 3.30 p.m."], correct: 0 },
            { q: "At the science fair you can see projects from …", options: ["a) the eighth grade", "b) the ninth grade", "c) all grades"], correct: 1 },
            { q: "The winning project gets …", options: ["a) a trip to Boston", "b) five hundred dollars", "c) new computers"], correct: 1 },
            { q: "The clothes have to be in Room 115 by …", options: ["a) Wednesday", "b) Friday", "c) Saturday"], correct: 1 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Hören · 2. Mal",
          title: "Listen again and fill in the table",
          intro:
            "Listen a second time and fill in the empty boxes. Picture day is already done for you. If an announcement does not say it, write a dash (—).",
          audio: ANN,
          items: [
            {
              hint: "1 Picture day · the school photos",
              segments: ["When? Wednesday, 2nd period · Where? the gym · How much? ", { answer: "twelve dollars", accept: ["12 dollars", "$12", "twelve", "12"], size: 14 }],
            },
            {
              hint: "2 Bus 14 · the bus leaves earlier",
              segments: [
                "When? from Monday, ",
                { answer: "2.50", accept: ["2.50 p.m.", "2:50", "2:50 p.m.", "ten to three", "two fifty"], size: 10 },
                " · Where? — · How much? ",
                { answer: "—", accept: ["-", "–", "not said", "nothing", "no price"], size: 8 },
              ],
            },
            {
              hint: "3 Science fair · 22 projects from the ninth grade",
              segments: [
                "When? Friday, ",
                { answer: "4 to 7", accept: ["4-7", "four to seven", "4 until 7", "from 4 to 7", "4 p.m. to 7 p.m."], size: 10 },
                " · Where? ",
                { answer: "the big hall", accept: ["big hall", "hall"], size: 12 },
                " · How much? ",
                { answer: "free", accept: ["it's free", "nothing"], size: 8 },
              ],
            },
            {
              hint: "4 Winter coats · a clothing collection for the night shelter",
              segments: [
                "When? by ",
                { answer: "Friday", size: 9 },
                " · Where? ",
                { answer: "Room 115", accept: ["room 115", "115"], size: 10 },
                " · How much? ",
                { answer: "—", accept: ["-", "–", "not said", "nothing", "no price"], size: 8 },
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Details",
          title: "The details",
          intro: "Write a full sentence under each question. You may listen a third time.",
          audio: ANN,
          answerLines: 2,
          questions: [
            { q: "1. What are students not allowed to wear for the school photo?", starter: "Students are not allowed to wear …" },
            { q: "2. When do you pay for your photos?", starter: "You pay …" },
            { q: "3. Who do you talk to if your club finishes at three o'clock?", starter: "You talk to …" },
            { q: "4. What does the winning project at the science fair get the money for?", starter: "The money is for …" },
            { q: "5. Where do the winter coats go, and when does the van come?", starter: "The coats go to … and the van comes …" },
          ],
        },
        {
          type: "written",
          kind: "Schlussfolgern",
          title: "Think about it",
          intro:
            "Mr Okonkwo says that bus 14 leaves ten minutes earlier and that the driver will not wait. Why does he mention Mrs Delgado in the same announcement? Answer in one or two sentences.",
          help: "Tipp: Die Antwort steht nicht wörtlich in der Durchsage — du musst sie erschließen.",
          answerLines: 2,
          questions: [{ q: "Why does he mention Mrs Delgado?", starter: "He mentions her because …" }],
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
            "Guess the school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Your own morning announcement",
          intro:
            "Tomorrow it is your turn on the loudspeaker. Write the morning announcement for YOUR school — three short items that a guest from Boston could follow at seven in the morning. Then read it out loud.",
          min: 45,
          max: 90,
          placeholder: "Good morning, everyone. Here are today's announcements. First, …",
          chips: [
            "Good morning, everyone.",
            "First, … · Second, … · And finally, …",
            "That's at … in …",
            "Please bring …",
            "If you have any questions, talk to …",
            "Have a good day!",
          ],
          checklist: [
            "I have three separate items.",
            "Every item says WHEN and WHERE.",
            "I used short sentences a guest can follow.",
            "I opened and closed like a real announcement.",
            "I read it out loud and it takes under a minute.",
          ],
          help: "★ Bonus: read it to a partner at normal speed. Can they note down all three items the first time?",
        },
      ],
    },
  ],
};
