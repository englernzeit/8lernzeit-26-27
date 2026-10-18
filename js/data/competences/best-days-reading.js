/**
 * The best days of your life (Unit 2) — Reading
 *
 *   Step 1 (LE)        — "Tom and the library": a short nine-line story,
 *                        order the events, right/wrong, one-word answers
 *   Step 2 (G-Kurs)    — "Nobody eats alone": Buddy Week at Riverbend High,
 *                        true / false / not in the text, the line that proves
 *                        it, full-sentence answers, order, find the words
 *   Step 3 (E-Kurs)    — the same, plus reading between the lines
 *   Step 4 (Challenge) — write the Buddy Week notice for your own school
 *
 * The line numbers on the long text follow the worksheet's own numbering, so
 * "line 7" means the same thing on paper and on screen.
 */

/* ============ Step 1 (LE) — Tom and the library ============ */

const LE_WORDS = [
  {
    label: "Tom helps out",
    accent: "coral",
    pairs: [
      ["volunteer", "freiwillig mitmachen — somebody who helps without being paid"],
      ["trust", "vertrauen — to believe that somebody will do it right"],
      ["responsible", "verantwortlich — it is your job now"],
      ["library", "die Bücherei — the room with all the books"],
    ],
  },
  {
    label: "The reading hour",
    accent: "olive",
    pairs: [
      ["try hard", "sich bemühen — to really make an effort"],
      ["community", "die Gemeinschaft — a group that belongs together"],
      ["incredible", "unglaublich — so good you can hardly believe it"],
      ["image", "das Bild — a picture, for example a photo"],
    ],
  },
];

/* ============ Steps 2 and 3 — Nobody eats alone ============ */

/**
 * The article, one entry per numbered line. The line breaks are fixed by the
 * author (not by the screen), so a "line 7" reference is the same for everyone.
 */
const ARTICLE = [
  ["At Riverbend High School in Portland, the first week of the school year is called Buddy Week. Every"],
  [
    "freshman gets a ",
    { w: "buddy", de: "ein·e Partner·in, der·die hilft" },
    ": an older student who already knows the school.",
  ],
  ["Jess Carter is seventeen and a senior. This September she had three buddies. “I still remember my own"],
  [
    "first day,” she says. “I stood in the hallway with my ",
    { w: "timetable", de: "der Stundenplan" },
    " and I did not ",
    { w: "dare", de: "sich trauen" },
    " to ask anybody.",
  ],
  ["Everything looked so intimidating.”"],
  ["Her job is simple. She shows her buddies where the rooms are, she waits with them at the lockers, and"],
  ["she eats with them in the cafeteria. “Lunch is the hard part,” Jess explains. “In class you have a seat. In"],
  ["the cafeteria you have nothing, and everybody can see that you are alone.”"],
  [
    "Buddy Week started four years ago. A teacher, Mr Alvarez, had ",
    { w: "counted", de: "gezählt" },
    " how many students left the",
  ],
  ["school again in the first two months. It was eleven. Now it is two."],
  ["Not everybody liked the idea. Some seniors said that they had enough problems of their own, and a few"],
  ["parents asked why older students should do a teacher's work. Then the school made Buddy Week part"],
  [
    "of the after-class activities: a buddy gets a ",
    { w: "certificate", de: "eine Urkunde" },
    " for the ",
    { w: "yearbook", de: "das Jahrbuch" },
    ", and the work counts for the",
  ],
  [
    { w: "student council", de: "die Schülervertretung" },
    ".",
  ],
  ["In November the school asked the freshmen one question: Did you talk to anybody new in your first"],
  ["week? Ninety-one out of a hundred said yes."],
  ["Jess is leaving school in June. She says she will miss the first week most. “You see somebody walking"],
  ["down the hallway on their own, you say hello, and three months later they are in your football team. That"],
  [
    "is the whole ",
    { w: "trick", de: "der Trick, das Geheimnis" },
    ".”",
  ],
];

/** Where a new paragraph really starts (the rest are wrapped lines). */
const ARTICLE_PARAS = [1, 3, 6, 9, 11, 15, 17];

/** Exercise 1 — true, false or not in the text (the same at both levels). */
const TFN_QUESTIONS = [
  { q: "Buddy Week is in the first week of the school year.", options: ["True", "False", "Not in the text"], correct: 0 },
  { q: "Jess had one buddy this September.", options: ["True", "False", "Not in the text"], correct: 1 },
  { q: "Jess gets money for her work as a buddy.", options: ["True", "False", "Not in the text"], correct: 2 },
  { q: "Jess thinks that lunch is the easy part of the week.", options: ["True", "False", "Not in the text"], correct: 1 },
  { q: "Fewer students leave the school now than four years ago.", options: ["True", "False", "Not in the text"], correct: 0 },
  { q: "All the seniors liked the idea from the start.", options: ["True", "False", "Not in the text"], correct: 1 },
];

/** The line that proves it — number 3 has no line, because it is not in the text. */
const LINE_GAPS = [
  {
    hint: "1 · Buddy Week is in the first week of the school year.",
    segments: ["line ", { answer: "1", accept: ["2", "1-2", "1/2"], size: 5 }],
  },
  {
    hint: "2 · Jess had one buddy this September.",
    segments: ["line ", { answer: "3", size: 5 }],
  },
  {
    hint: "3 · Jess gets money for her work as a buddy.",
    segments: ["not in the text — no line: ", { answer: "—", accept: ["-", "–", "none", "no line"], size: 6 }],
  },
  {
    hint: "4 · Jess thinks that lunch is the easy part of the week.",
    segments: ["line ", { answer: "7", size: 5 }],
  },
  {
    hint: "5 · Fewer students leave the school now than four years ago.",
    segments: ["line ", { answer: "10", accept: ["9", "16", "9-10"], size: 5 }],
  },
  {
    hint: "6 · All the seniors liked the idea from the start.",
    segments: ["line ", { answer: "11", size: 5 }],
  },
];

/** Exercise 3 — the order of the story. */
const ARTICLE_EVENTS = [
  { text: "Mr Alvarez counted how many students left the school." },
  { text: "Buddy Week became part of the after-class activities." },
  { text: "Jess got three buddies in September." },
  { text: "The school asked the freshmen a question in November." },
  { text: "Jess will leave school." },
];

/** Exercise 4 — find the word in the text. */
const WORD_HUNT = {
  options: ["a certificate", "the yearbook", "the student council", "the hallway"],
  items: [
    { left: "a paper that says you did something well", answer: "a certificate" },
    { left: "the book with the photos of all the students", answer: "the yearbook" },
    { left: "the group of students who speak for all students", answer: "the student council" },
    { left: "the long way between the classrooms", answer: "the hallway" },
  ],
};

/* ============ The problems ============ */

const LE_PROBLEM =
  "THE PROBLEM: Twenty little children want to come to the reading hour. The library has only ten chairs.";
const LE_IDEAS = [
  "1 — Only ten children can come.",
  "2 — The children sit on the carpet.",
  "3 — We stop the reading hour.",
];

const GK_PROBLEM =
  "THE PROBLEM: Riverbend High wants Buddy Week again. But this year only nine seniors want to be buddies — and there are forty freshmen.";
const GK_IDEAS = [
  "1 — Every senior takes four or five freshmen.",
  "2 — Students from year 10 become buddies too.",
  "3 — Only freshmen who ask for a buddy get one.",
];

/* ============ The word game ============ */

const GAME_WORDS = [
  { word: "VOLUNTEER", hint: "freiwillig mitmachen" },
  { word: "LIBRARY", hint: "die Bücherei" },
  { word: "COMMUNITY", hint: "die Gemeinschaft" },
  { word: "RESPONSIBLE", hint: "verantwortlich" },
  { word: "INCREDIBLE", hint: "unglaublich" },
  { word: "TRUST", hint: "vertrauen" },
  { word: "IMAGE", hint: "das Bild" },
  { word: "BUDDY", hint: "ein·e Partner·in, der·die hilft" },
  { word: "TIMETABLE", hint: "der Stundenplan" },
  { word: "YEARBOOK", hint: "das Jahrbuch" },
  { word: "CERTIFICATE", hint: "die Urkunde" },
  { word: "FRESHMAN", hint: "im 1. Schuljahr" },
  { word: "SENIOR", hint: "im letzten Schuljahr" },
  { word: "CAFETERIA", hint: "die Mensa" },
  { word: "SHELF", hint: "das Regal" },
  { word: "CRATE", hint: "die Kiste" },
];

export default {
  title: "Nobody eats alone",

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
          intro: "Eight words from Tom's story. Tap a word to see what it means.",
          sections: LE_WORDS,
        },
        {
          type: "multiple-choice",
          kind: "Aufwärmen",
          title: "Before you read",
          intro:
            "The teacher asks who wants to help in the school library. Tom is the only one who puts his hand up. How does Tom feel?",
          help: "Wie fühlt sich Tom? Kreuze ein Wort an.",
          shuffle: false,
          questions: [{ q: "How does Tom feel?", options: ["happy", "afraid", "angry", "tired"], correct: 0 }],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Tom and the library",
          intro:
            "Read Tom's story. The small numbers on the left are line numbers — you need them to prove your answers. Tap the underlined words for German help.",
          lineNumbers: true,
          paraStarts: [1, 3, 5, 7],
          paragraphs: [
            [
              "Hello, I am Tom. Today my teacher asks: “Who wants to help in the school library?” I put my hand up. I",
            ],
            [
              "am the only one. Now I am a ",
              { w: "volunteer", de: "freiwillig mitmachen" },
              ".",
            ],
            [
              "Mrs Blake gives me the key for the library. She says: “I ",
              { w: "trust", de: "vertrauen" },
              " you.”",
            ],
            [
              "Then she goes home and I am alone. Now I am ",
              { w: "responsible", de: "verantwortlich" },
              " for the library.",
            ],
            ["I put the books back on the shelves. I like working in the library."],
            [
              "The crate with the new books is very heavy. I ",
              { w: "try hard", de: "sich bemühen" },
              ".",
            ],
            [
              "At two o'clock the little children come. I read a book to them. We are one ",
              { w: "community", de: "die Gemeinschaft" },
              ".",
            ],
            [
              "After the story we build a tower of books. It is ",
              { w: "incredible", de: "unglaublich" },
              "!",
            ],
            [
              "At the end a girl takes a photo of us. Now the ",
              { w: "image", de: "das Bild" },
              " is on the wall.",
            ],
          ],
        },
        {
          type: "event-order",
          kind: "Reihenfolge",
          title: "The order of the story",
          intro: "Number the events from 1 to 5, then press Check.",
          help: "Was passiert zuerst? Nummeriere von 1 bis 5.",
          events: [
            { text: "Tom puts his hand up in the classroom." },
            { text: "Mrs Blake gives him the key." },
            { text: "Tom carries the heavy crate." },
            { text: "Tom reads a book to the little children." },
            { text: "A girl takes a photo of the group." },
          ],
        },
        {
          type: "right-wrong",
          kind: "Quiz",
          title: "Right or wrong?",
          intro:
            "True or false? Take one word from the sentence and look for it in the text — the answer is always in that line.",
          help: "Richtig oder falsch? Suche ein Wort aus dem Satz im Text.",
          statements: [
            { text: "Tom wants to help in the school library.", answer: true, ph: "✋" },
            { text: "Three students put their hands up.", answer: false, ph: "🙋" },
            { text: "Mrs Blake gives Tom a book.", answer: false, ph: "🔑" },
            { text: "The crate with the new books is very heavy.", answer: true, ph: "📦" },
            { text: "Tom reads a book to the little children.", answer: true, ph: "📖" },
            { text: "At the end a girl takes a photo.", answer: true, ph: "📷" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Antworten",
          title: "Answer the questions",
          intro:
            "Answer with one word from the box. Example: What does Tom get from Mrs Blake? → He gets the key.",
          help: "Antworte mit einem Wort aus dem Kasten.",
          bank: ["Mrs Blake", "shelves", "children", "tower"],
          bankCap: "Word box",
          items: [
            {
              hint: "1 · Who gives Tom the key?",
              segments: [{ answer: "Mrs Blake", size: 11 }, " gives him the key."],
            },
            {
              hint: "2 · Where does Tom put the books?",
              segments: ["He puts them on the ", { answer: "shelves", size: 10 }, "."],
            },
            {
              hint: "3 · Who comes at two o'clock?",
              segments: ["The little ", { answer: "children", size: 10 }, " come."],
            },
            {
              hint: "4 · What do they build after the story?",
              segments: ["They build a ", { answer: "tower", size: 8 }, " of books."],
            },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Welcher Ort?",
          title: "Where is it?",
          intro:
            "Six places in the library: 1 the shelves · 2 the reading corner · 3 the lending desk · 4 the carpet · 5 the book swap · 6 the courtyard. Example: “Here the students swap their books.” → 5",
          help: "Um welchen Ort geht es? Wähle die Nummer.",
          shuffle: false,
          questions: [
            { q: "Tom is responsible for the books here.", options: ["1 the shelves", "3 the lending desk", "4 the carpet", "6 the courtyard"], correct: 1 },
            { q: "The little children sit here and listen.", options: ["2 the reading corner", "4 the carpet", "5 the book swap", "1 the shelves"], correct: 1 },
            { q: "Here the students read outside on the grass.", options: ["6 the courtyard", "2 the reading corner", "3 the lending desk", "5 the book swap"], correct: 0 },
            { q: "Here you find the tall shelves of the library.", options: ["4 the carpet", "6 the courtyard", "1 the shelves", "2 the reading corner"], correct: 2 },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your favourite place",
          intro: "Which place do you like best? Write one sentence.",
          help: "Welcher Ort gefällt dir am besten? Schreibe einen Satz mit because.",
          starters: ["I like place ___, because …"],
        },
        {
          type: "multiple-choice",
          kind: "Problem lösen",
          title: "Which idea is best?",
          intro: LE_PROBLEM + " Which idea helps most?",
          help: "Welche Idee ist am besten? Wähle eine aus.",
          shuffle: false,
          questions: [{ q: "Which idea is best?", options: LE_IDEAS, correct: 1 }],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Say why",
          intro: "Now finish the sentence. Say why your idea is the best one.",
          help: "You can use: there is room for everybody · the carpet is big · ten is not enough · then nobody can listen",
          starters: ["Idea 2 is best, because …"],
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the word from the text letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you read",
          intro:
            "Next week ten new students come to your school. Write one sentence: what would you show them first?",
          help: "Was würdest du neuen Schüler·innen zuerst zeigen?",
          starters: ["First I would show them …"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Nobody eats alone",
          intro:
            "Read about Buddy Week at Riverbend High School. The small numbers on the left are line numbers — you need them to prove your answers. Tap the underlined words for German help.",
          lineNumbers: true,
          paraStarts: ARTICLE_PARAS,
          paragraphs: ARTICLE,
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "True, false or not in the text?",
          intro:
            "Careful: “not in the text” is not the same as “false”. Some sentences are not wrong — the text simply says nothing about them.",
          help: "„Nicht im Text“ ist nicht dasselbe wie „falsch“.",
          shuffle: false,
          questions: TFN_QUESTIONS,
        },
        {
          type: "gap-fill",
          kind: "Belege",
          title: "Which line proves it?",
          intro:
            "Now write the line number that proves each answer. Where the text says nothing, there is no line — write a dash (—).",
          help: "Bei true und false gehört eine Zeilenangabe dazu; bei „not in the text“ bleibt sie leer.",
          items: LINE_GAPS,
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer in full sentences",
          intro:
            "Write a full sentence under each question. Begin with the words after the arrow. Example: How old is Jess? → Jess is seventeen years old. (not just “seventeen”)",
          help: "Antworte in ganzen Sätzen. Einzelne Wörter zählen nicht.",
          answerLines: 2,
          questions: [
            { q: "1. What does a buddy do in the cafeteria?", starter: "A buddy …" },
            { q: "2. Why did Mr Alvarez start Buddy Week?", starter: "He started it because …" },
            { q: "3. What does a buddy get for the work?", starter: "A buddy gets …" },
            { q: "4. What will Jess miss most when she leaves school?", starter: "She will miss …" },
          ],
        },
        {
          type: "event-order",
          kind: "Reihenfolge",
          title: "The order of the story",
          intro: "Put the five events into the order of the text, then press Check.",
          help: "Bringe die fünf Ereignisse in die Reihenfolge des Textes.",
          events: ARTICLE_EVENTS,
        },
        {
          type: "match-up",
          kind: "Wörter finden",
          title: "Find the words",
          intro:
            "Which word or phrase from the text means this? Example: somebody in the last year at school → a senior.",
          help: "Suche im Text den Ausdruck mit dieser Bedeutung.",
          options: WORD_HUNT.options,
          items: WORD_HUNT.items,
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Which idea is best?",
          intro:
            GK_PROBLEM +
            " Which idea is best — 1, 2 or 3? " +
            GK_IDEAS.join("  ") +
            " Write two sentences. There is no single right answer — what counts is your reason.",
          help: "Tipp: Der Text sagt in Zeile 4, dass die Neuen sich nicht trauen zu fragen.",
          answerLines: 2,
          questions: [{ q: "Which idea is best, and why?", starter: "Idea ___ is best, because …" }],
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the word from the text letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          type: "written",
          kind: "Aufwärmen",
          title: "Before you read",
          intro:
            "Next week ten new students come to your school. Write one sentence: what would you show them first?",
          starters: ["First I would show them …"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Nobody eats alone",
          intro:
            "Read about Buddy Week at Riverbend High School. The small numbers on the left are line numbers — you need them to prove your answers. Tap the underlined words for German help.",
          lineNumbers: true,
          paraStarts: ARTICLE_PARAS,
          paragraphs: ARTICLE,
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "True, false or not in the text?",
          intro:
            "Careful: “not in the text” is not the same as “false”. Some sentences are not wrong — the text simply says nothing about them.",
          shuffle: false,
          questions: TFN_QUESTIONS,
        },
        {
          type: "gap-fill",
          kind: "Belege",
          title: "Which line proves it?",
          intro:
            "Now write the line number that proves each answer. Where the text says nothing, there is no line — write a dash (—).",
          items: LINE_GAPS,
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer in full sentences",
          intro:
            "Write a full sentence under each question. Begin with the words after the arrow.",
          answerLines: 2,
          questions: [
            { q: "1. What does a buddy do in the cafeteria?", starter: "A buddy …" },
            { q: "2. Why did Mr Alvarez start Buddy Week?", starter: "He started it because …" },
            { q: "3. What does a buddy get for the work?", starter: "A buddy gets …" },
            { q: "4. What will Jess miss most when she leaves school?", starter: "She will miss …" },
          ],
        },
        {
          type: "event-order",
          kind: "Reihenfolge",
          title: "The order of the story",
          intro: "Put the five events into the order of the text, then press Check.",
          events: ARTICLE_EVENTS,
        },
        {
          type: "match-up",
          kind: "Wörter finden",
          title: "Find the words",
          intro:
            "Which word or phrase from the text means this? Example: somebody in the last year at school → a senior.",
          options: WORD_HUNT.options,
          items: WORD_HUNT.items,
        },
        {
          type: "written",
          kind: "Schlussfolgern",
          title: "Read between the lines",
          intro:
            "Answer both questions in full sentences — two to three sentences each. The answer is not written in the text; you have to work it out.",
          help: "Die Antwort steht nicht wörtlich im Text.",
          answerLines: 3,
          questions: [
            { q: "1. What does Jess mean when she says: “That is the whole trick”?", starter: "She means that …" },
            { q: "2. Which sentence in the text shows best that the programme works? Give the line and say why you chose it.", starter: "Line ___ shows it best, because …" },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Which idea is best?",
          intro:
            GK_PROBLEM +
            " Which idea is best — 1, 2 or 3? " +
            GK_IDEAS.join("  ") +
            " Write two sentences: one for your choice, one against another idea.",
          help: "Tipp: Der Text sagt in Zeile 4, dass die Neuen sich nicht trauen zu fragen — das spricht gegen Idee 3.",
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
            "Guess the word from the text letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Buddy Week at your school",
          intro:
            "Your school wants a Buddy Week too. Write the notice for the school board: what it is, who can take part, what a buddy has to do — and one sentence that makes somebody want to sign up.",
          min: 55,
          max: 110,
          placeholder: "BUDDY WEEK — nobody eats alone. In the first week of the school year …",
          chips: [
            "Every new student gets …",
            "A buddy shows …",
            "It only takes …",
            "You get a certificate for …",
            "Sign up with …",
            "Remember your own first day?",
          ],
          checklist: [
            "My notice says what Buddy Week is.",
            "It says who can be a buddy.",
            "It names two things a buddy does.",
            "It says what a buddy gets for it.",
            "One sentence makes somebody want to join.",
          ],
          help: "★ Bonus: Jess says the trick is to say hello. Can you get that idea into one short sentence?",
        },
      ],
    },
  ],
};
