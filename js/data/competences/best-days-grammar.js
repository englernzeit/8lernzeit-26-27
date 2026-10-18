/**
 * The best days of your life (Unit 2) — Grammar: "The -ing form"
 * (after verbs · after prepositions · as the subject).
 *
 * Built from the three differentiated worksheets (LE · G-Kurs · E-Kurs):
 *
 *   Step 1 (LE)        — Tom's first day: the -ing form after a feeling word
 *                        and after a small word, plus the school picture
 *   Step 2 (G-Kurs)    — the three rules on real sentences
 *   Step 3 (E-Kurs)    — the same, plus "find the mistake" and an objection
 *   Step 4 (Challenge) — invent your own after-school club
 *
 * Every level ends with the unit's recurring PROBLEM SOLVING task: three ideas
 * are given, you pick one and say why — E-Kurs also argues against another.
 */

/* ============ Step 1 (LE) — Tom's first day ============ */

/** The eight comic words Tom's story is built on. */
const LE_WORDS = [
  {
    label: "Tom's first day",
    accent: "coral",
    pairs: [
      ["freshman", "im 1. Schuljahr — a student in the first year"],
      ["intimidating", "einschüchternd — it makes you feel small"],
      ["hallway", "der Flur — the long room with the lockers"],
      ["locker", "das Schließfach — your own small cupboard"],
    ],
  },
  {
    label: "Around the school",
    accent: "olive",
    pairs: [
      ["senior", "im letzten Schuljahr — a student in the last year"],
      ["cafeteria", "die Mensa — where you have lunch"],
      ["announcement", "die Durchsage — what you hear over the loudspeaker"],
      ["homecoming", "das Schulfest — a big game and a dance on one day"],
    ],
  },
];

/** Exercise 1 (LE) — after a feeling word. The comic panel is the context. */
const LE_FEELING_GAPS = [
  { hint: "Panel 2 · hate", segments: ["Tom hates ", { answer: "standing", size: 11 }, " in the crowd. (stand)"] },
  { hint: "Panel 3 · don't like", segments: ["He doesn't like ", { answer: "walking", size: 10 }, " down the long hallway alone. (walk)"] },
  { hint: "Panel 4 · hate", segments: ["He hates ", { answer: "opening", size: 10 }, " his locker. (open)"] },
  { hint: "Panel 5 · don't mind", segments: ["He doesn't mind ", { answer: "asking", size: 9 }, " a senior for help. (ask)"] },
  { hint: "Panel 7 · stop", segments: ["Everybody stops ", { answer: "talking", size: 10 }, " and listens to the announcement. (talk)"] },
  { hint: "Panel 8 · love", segments: ["He loves ", { answer: "dancing", size: 10 }, " at the homecoming party. (dance)"] },
];

/** Exercise 2 (LE) — after a small word. The small word is already there. */
const LE_PREP_GAPS = [
  { hint: "Panel 1 · afraid of", segments: ["Tom is afraid of ", { answer: "starting", size: 11 }, " at a new school. (start)"] },
  { hint: "Panel 4 · good at", segments: ["He is not good at ", { answer: "opening", size: 10 }, " his locker. (open)"] },
  { hint: "Panel 5 · good at", segments: ["The senior is good at ", { answer: "helping", size: 10 }, " other students. (help)"] },
  { hint: "Panel 8 · looking forward to", segments: ["Tom is looking forward to ", { answer: "going", size: 9 }, " to the next party. (go)"] },
];

/** Exercise 3 (LE) — both rules, this time in the six rooms of the school. */
const LE_ROOM_GAPS = [
  { hint: "Room 2 · the library", segments: ["The girls like ", { answer: "reading", size: 10 }, " books in the library. (read)"] },
  { hint: "Room 5 · the music room", segments: ["The students enjoy ", { answer: "making", size: 9 }, " music. (make)"] },
  { hint: "Room 1 · the hallway", segments: ["The boy is good at ", { answer: "opening", size: 10 }, " lockers. (open)"] },
  { hint: "Room 4 · the cafeteria", segments: ["Tom doesn't mind ", { answer: "eating", size: 9 }, " with his friends. (eat)"] },
];

/* ============ Steps 2 and 3 (G-Kurs · E-Kurs) ============ */

/** Ideas for the "write your own sentences" task (both boxes of the sheet). */
const OWN_LEFT = "good at · interested in · afraid of · enjoy · hate · don't mind · keep";
const OWN_RIGHT =
  "get up early · speak in front of the class · help in the school garden · take photos for the paper · work with people I don't know · write emails in English · climb";

/** Exercise 1 — the same eight verb gaps at G-Kurs and E-Kurs. */
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

/** Exercise 2 — the same eight preposition gaps at G-Kurs and E-Kurs. */
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

/* ============ The problems ============ */

const LE_PROBLEM = {
  problem:
    "Tom's locker is in the hallway, but his next lesson is in the gym — and he has only four minutes.",
  problemDe:
    "Toms Schließfach ist im Flur, seine nächste Stunde in der Turnhalle — und er hat nur vier Minuten.",
  ideas: [
    "He runs through the crowd.",
    "He takes his sports bag with him in the morning.",
    "He always comes late.",
  ],
};

const LE_BANK =
  "he doesn't need his locker · he is never late · it is easy · nobody has to run";

const LE_NOTE =
  "Richtig ist Idee 2. Idee 1 löst nichts, Idee 3 geht nicht jedes Mal. Beispiellösung: Idea 2 is best, because then he doesn't need his locker before sport.";

const GK_PROBLEM = {
  problem:
    "Six guests from Boston are at your school for one week. Half of your class wants to play football every afternoon. The others say that is boring.",
  problemDe:
    "Sechs Gäste aus Boston sind eine Woche an eurer Schule. Die Hälfte der Klasse will jeden Nachmittag Fußball spielen, die anderen finden das langweilig.",
  ideas: [
    "Ask the guests what they like doing.",
    "Play football every afternoon.",
    "Plan something different for every afternoon.",
  ],
};

const GK_NOTE =
  "Es gibt keine einzig richtige Idee — bewertet wird die Begründung. Idee 1 (die Gäste fragen) und Idee 3 (jeden Tag etwas anderes) sind gut begründbar. Idee 2 ist die schwächste, weil sie genau die Hälfte der Klasse übergeht — wer sie wählt, braucht ein starkes Argument. Beispiellösung: Idea 3 is best, because everybody gets one afternoon they like. Then nobody has to do something boring for a whole week.";

/* ============ The word game (Unit 1's Monster's Lunch) ============ */

const GAME_WORDS = [
  { word: "FRESHMAN", hint: "im 1. Schuljahr" },
  { word: "SENIOR", hint: "im letzten Schuljahr" },
  { word: "HALLWAY", hint: "der Flur" },
  { word: "LOCKER", hint: "das Schließfach" },
  { word: "CAFETERIA", hint: "die Mensa" },
  { word: "HOMECOMING", hint: "das Schulfest" },
  { word: "ANNOUNCEMENT", hint: "die Durchsage" },
  { word: "INTIMIDATING", hint: "einschüchternd" },
  { word: "LIBRARY", hint: "die Bücherei" },
  { word: "CHOIR", hint: "der Chor" },
  { word: "PROM", hint: "der Schulball" },
  { word: "FLUTE", hint: "die Querflöte" },
  { word: "CROWD", hint: "die Menschenmenge" },
  { word: "DANCING", hint: "-ing-Form von dance" },
  { word: "SINGING", hint: "-ing-Form von sing" },
  { word: "RUNNING", hint: "-ing-Form von run" },
  { word: "GETTING", hint: "-ing-Form von get" },
  { word: "SWIMMING", hint: "-ing-Form von swim" },
];

/**
 * The opening comic — "Gerunds in Action", the 15-slide presentation cut into
 * swipeable cards. It runs BEFORE the rule box and the tasks: the class
 * predicts, the comic answers, and the last slides collect the three rules
 * again. One picture per slide in assets/images/unit2/deck/.
 */
const DECK_SLIDES = [
  {
    src: "assets/images/unit2/deck/01.jpg",
    kind: "Cover",
    cap: "A Tale of Two Cities, Issue #1: The Gerund. Two friends, two cities — and one grammar form that tells their story.",
  },
  {
    src: "assets/images/unit2/deck/02.jpg",
    kind: "The two friends",
    cap: "Anuar is new at Boston West High. Ben is on the ferry in New York. Both of them need the same grammar trick.",
  },
  {
    src: "assets/images/unit2/deck/03.jpg",
    kind: "Prediction",
    cap: "Before you swipe on: how do you turn an action (a verb) into a thing (a noun)?",
    de: "Überlege erst selbst: Wie wird aus einem Verb ein Nomen?",
  },
  {
    src: "assets/images/unit2/deck/04.jpg",
    kind: "The answer",
    cap: "Take a verb, add -ing — and you have built a gerund: a verb that acts like a noun. play → playing",
    de: "Verb + -ing = Gerundium. Es verhält sich wie ein Nomen.",
  },
  {
    src: "assets/images/unit2/deck/05.jpg",
    kind: "Prediction",
    cap: "If the -ing form is the star of the sentence (the subject), where does it usually go?",
    de: "Wo steht die -ing-Form, wenn sie das Subjekt des Satzes ist?",
  },
  {
    src: "assets/images/unit2/deck/06.jpg",
    kind: "Rule 1 · Subject",
    cap: "Rule 1 — the -ing form as the SUBJECT. It opens the sentence: Starting at a new school can be a little intimidating.",
    de: "Regel 1: Als Subjekt steht die -ing-Form am Satzanfang.",
  },
  {
    src: "assets/images/unit2/deck/07.jpg",
    kind: "Prediction",
    cap: "What happens after verbs that show strong feelings — love, hate or enjoy?",
    de: "Was kommt nach Gefühlsverben wie love, hate, enjoy?",
  },
  {
    src: "assets/images/unit2/deck/08.jpg",
    kind: "Rule 2 · Object",
    cap: "Rule 2 — the -ing form as the OBJECT. It comes straight after the feeling verb: I love listening to the saxophone.",
    de: "Regel 2: Direkt nach like, love, enjoy, hate, don’t mind, start, stop, keep steht die -ing-Form.",
  },
  {
    src: "assets/images/unit2/deck/09.jpg",
    kind: "Prediction",
    cap: "And what do you do when you hit a ‘bridge word’ — a preposition like to, at, about or of?",
    de: "Was passiert nach einer Präposition wie to, at, about, of?",
  },
  {
    src: "assets/images/unit2/deck/10.jpg",
    kind: "Rule 3 · Preposition",
    cap: "Rule 3 — always use the -ing form after a preposition: I look forward to playing. I dream of discovering new places.",
    de: "Regel 3: Nach einer Präposition steht IMMER die -ing-Form — nie der Infinitiv mit to.",
  },
  {
    src: "assets/images/unit2/deck/11.jpg",
    kind: "Prediction",
    cap: "System failure! Which preposition goes with which feeling? Connect the wires in your head before you swipe on.",
    de: "Welche Präposition gehört zu welchem Ausdruck? Rate zuerst.",
  },
  {
    src: "assets/images/unit2/deck/12.jpg",
    kind: "The pairs",
    cap: "Power restored. These are the pairs to learn by heart: good at · terrible at · dream of · nervous about · look forward to · get used to · interested in.",
    de: "Diese Paare musst du auswendig können.",
  },
  {
    src: "assets/images/unit2/deck/13.jpg",
    kind: "Summary",
    cap: "The Gerund Survival Guide — the three places you need the -ing form: the star, the target and the bridge.",
    de: "Die drei Stellen auf einen Blick: Subjekt · nach Gefühlsverben · nach Präpositionen.",
  },
  {
    src: "assets/images/unit2/deck/14.jpg",
    kind: "Your turn",
    cap: "Final boss! Say the three missing -ing forms out loud first — the answer line is at the bottom of the slide.",
    de: "Sag die drei fehlenden -ing-Formen laut, bevor du die Lösung liest.",
  },
  {
    src: "assets/images/unit2/deck/15.jpg",
    kind: "The end",
    cap: "Learning the gerund is easy. Using it to tell your story is even better. Now it is your turn — start with Step 1.",
  },
];

export default {
  title: "The -ing form",

  /* ============ The opening comic (before the theory) ============ */
  deck: {
    label: "The Comic",
    subtitle: "Gerunds in Action — swipe through the story, then read the rule",
    accent: "ochre",
    slides: DECK_SLIDES,
  },

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
          type: "phrase-reference",
          kind: "Wortschatz",
          title: "Tom's first day — the words",
          intro:
            "These eight words tell Tom's story. Say what each one means before you look.",
          reveal: true,
          sections: LE_WORDS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Rule 1 — after a feeling word",
          intro:
            "How does Tom feel? Write the -ing form of the verb in brackets. Example: He doesn't like eating (eat) alone in the cafeteria.",
          help: "Nach hate, like, love, enjoy, don't mind und stop steht die -ing-Form.",
          items: LE_FEELING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Rule 2 — after a small word",
          intro:
            "The small word is already there. Write only the -ing form. Example: He is afraid of meeting (meet) the big students.",
          help: "Nach of, at und to steht die -ing-Form — auch nach to in looking forward to.",
          items: LE_PREP_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "What do they like doing?",
          intro:
            "Six rooms in the school: 1 hallway · 2 library · 3 principal's office · 4 cafeteria · 5 music room · 6 gym. Write the -ing form. Example: Room 6 — The boys like playing (play) basketball.",
          help: "Hier brauchst du beide Regeln. Nr. 3 ist Regel 2 (good at), die anderen sind Regel 1.",
          items: LE_ROOM_GAPS,
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 3 sentences about yourself. Use the words from Tom's comic. Example: I hate walking down the hallway alone.",
          help: "Schreibe 3 Sätze über dich. Nach dem Signalwort steht immer die -ing-Form.",
          starters: ["I like …", "I hate …", "I am good at …"],
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
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Before you start",
          intro:
            "Write one sentence about an activity you like doing after school. Begin with I like and put the next verb into the -ing form.",
          help: "Beginne mit I like und setze das nächste Verb in die -ing-Form.",
          starters: ["I like …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "After these verbs",
          intro:
            "Write the verb from the brackets into the gap, in the -ing form. One word in each gap. Example: I like swimming (swim) in the sea.",
          help: "Setze das Verb aus der Klammer in der -ing-Form ein.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Words that go together",
          intro:
            "Write the missing small word into the gap — one of these: at, in, of, to, about, for. Example: She is afraid of flying.",
          help: "Setze die fehlende Präposition ein. Zwei Wörter brauchst du zweimal.",
          bank: ["at", "in", "of", "to", "about", "for"],
          bankCap: "Word box",
          items: PREP_GAPS,
        },
        {
          type: "written",
          kind: "Umformen",
          title: "Start the sentence with -ing",
          intro:
            "Write the whole sentence again, but start it with the -ing form. The meaning stays the same. Example: It is fun to play in the school band. → Playing in the school band is fun.",
          help: "Nimm das Verb nach to, stelle es an den Anfang und hänge -ing an. Danach folgt is.",
          answerLines: 1,
          questions: REWRITE_QUESTIONS,
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your own sentences",
          intro:
            "Write 5 sentences about yourself. Take one expression from the left box and one from the right box for each sentence. Use every expression only once, and put the verb from the right box into the -ing form.",
          help: "LEFT: " + OWN_LEFT + "  ·  RIGHT: " + OWN_RIGHT,
          starters: [
            "I don't mind …",
            "I'm not very good at …",
            "I'm interested in …",
            "I'm afraid of …",
            "I enjoy …",
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
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
          title: "Before you start",
          intro:
            "Write one sentence about an activity you like doing after school. Begin with I like and put the next verb into the -ing form.",
          starters: ["I like …"],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "After these verbs",
          intro:
            "Write the verb from the brackets into the gap, in the -ing form. One word in each gap.",
          items: ING_GAPS,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Words that go together",
          intro:
            "Write the missing small word into the gap — one of these: at, in, of, to, about, for.",
          items: PREP_GAPS,
        },
        {
          type: "written",
          kind: "Umformen",
          title: "Start the sentence with -ing",
          intro:
            "Write the whole sentence again, but start it with the -ing form. The meaning stays the same. Example: It is fun to play in the school band. → Playing in the school band is fun.",
          answerLines: 1,
          questions: REWRITE_QUESTIONS,
        },
        {
          type: "written",
          kind: "Fehlersuche",
          title: "Find the mistake",
          intro:
            "In every sentence one -ing form is wrong. Write the whole sentence correctly.",
          help: "Nach einer Präposition und am Satzanfang steht die -ing-Form — nie der Infinitiv mit to.",
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
            "Write 6 sentences about yourself. Take one expression from the left box and one from the right box for each sentence. Use every expression only once, and put the verb from the right box into the -ing form.",
          help: "LEFT: " + OWN_LEFT + "  ·  RIGHT: " + OWN_RIGHT,
          starters: [
            "I'm good at …",
            "I'm interested in …",
            "I'm afraid of …",
            "I enjoy …",
            "I hate …",
            "I keep …",
          ],
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
            "Guess the high school word letter by letter and save the hero from the monster — every wrong letter feeds it!",
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
