/**
 * In New York City (Unit 1) — Vocabulary (British / American) + Mediation:
 * "Two Words, One City".
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs). The lesson has two hearts:
 *
 *   1. British ↔ American vocabulary  (shop/store, lift/elevator …)
 *   2. Mediation — helping a German visitor understand New York, and
 *      passing on wishes to New Yorkers (sense, not word for word).
 *
 * Every plain vocab list from the drafts is turned into an interactive
 * MATCH task (house rule from the Reading page: no bare word lists), and
 * every level gets a 6-question multiple-choice quiz. The realia (the
 * host-mum's note, Aunt Karin's message, the bus-tour ticket, Mama's
 * shopping list) are shown as authentic message boxes above the task.
 *
 * Steps:
 *   Step 1 (LE)     — match British↔American, meanings, help Oma read signs
 *   Step 2 (G-Kurs) — complete the pairs, mediate a note and a shopping list
 *   Step 3 (E-Kurs) — variety & spelling, false friends, real mediation tasks
 *   Step 4 (★)      — "The Language Bridge": get Oma across New York
 */

export default {
  title: "Two Words, One City",

  /* ============ Picture Vocabulary — "Neon Postcard" deck ============
   * The Unit 1 (Reading) word list. Wordless neon NYC illustrations live
   * at assets/vocab/unit1/gkurs/NN.jpg (01…15, in list order). The English
   * word, German translation and example are drawn as a crisp CSS layer on
   * top; a missing image degrades to a neon placeholder. Word Master (below)
   * drills exactly these words. E-Kurs list to be added once supplied. */
  pictureVocab: {
    title: "Picture Vocabulary",
    base: "assets/vocab/unit1",
    courses: [
      {
        key: "gk",
        dir: "gkurs",
        name: "G-Kurs",
        tag: "New York — key words",
        cards: [
          { word: "state", de: "der (Bundes-)Staat", example: "New York is a state in the USA." },
          { word: "age", de: "das Alter", example: "What is your age? I am 14." },
          { word: "liberty", de: "die Freiheit", example: "The torch is a symbol of liberty." },
          { word: "island", de: "die Insel", example: "The Statue of Liberty stands on an island." },
          { word: "sight", de: "die Sehenswürdigkeit", example: "The Empire State Building is a famous sight." },
          { word: "awesome", de: "klasse, stark, großartig", example: "The view from the top is awesome!" },
          { word: "destroy", de: "zerstören", example: "A big storm can destroy old buildings." },
          { word: "since 2012", de: "seit 2012", example: "The tower has been open since 2012." },
          { word: "view (of)", de: "die Aussicht, der Ausblick (auf)", example: "We have a great view of the skyline." },
          { word: "walkway", de: "der Fußweg, der Laufgang", example: "We walked along the walkway on the bridge." },
          { word: "above", de: "oben, über, oberhalb (von)", example: "The plane flew high above the city." },
          { word: "traffic", de: "der (Straßen-)Verkehr", example: "There is a lot of traffic in New York." },
          { word: "build", de: "(er)bauen — build, built, built", example: "They built the Brooklyn Bridge long ago." },
          { word: "star", de: "der Stern", example: "You can see one bright star in the sky." },
          { word: "immigrant", de: "der Einwanderer", example: "The immigrant arrived in New York by ship." },
        ],
      },
    ],
  },

  /* ============ Word Master — same words, gap-fill drill ============ */
  wordMaster: {
    courses: [
      {
        key: "gk",
        name: "G-Kurs",
        tag: "New York — key words",
        subtitle: "Complete each sentence with the right word from the cards.",
        items: [
          { de: "der **(Bundes-)Staat**", en: "New York is a ___ in the USA.", answer: "state" },
          { de: "das **Alter**", en: "You can vote at the ___ of 18.", answer: "age" },
          { de: "die **Freiheit**", en: "The Statue of Liberty is a symbol of ___.", answer: "liberty" },
          { de: "die **Insel**", en: "The Statue of Liberty stands on an ___.", answer: "island" },
          { de: "die **Sehenswürdigkeit**", en: "The Empire State Building is a famous ___.", answer: "sight" },
          { de: "**klasse, stark, großartig**", en: "The view from the top is ___!", answer: "awesome" },
          { de: "**zerstören**", en: "A big storm can ___ old buildings.", answer: "destroy" },
          { de: "**seit 2012**", en: "The tower has been open ___.", answer: "since 2012", accept: ["since twenty twelve"] },
          { de: "die **Aussicht**, der **Ausblick**", en: "We have a great ___ of the skyline.", answer: "view" },
          { de: "der **Fußweg**, der **Laufgang**", en: "We walked along the ___ on the bridge.", answer: "walkway" },
          { de: "**oben, über, oberhalb**", en: "The plane flew high ___ the city.", answer: "above" },
          { de: "der **(Straßen-)Verkehr**", en: "There is a lot of ___ in New York.", answer: "traffic" },
          { de: "**(er)bauen** (build, built, built)", en: "They ___ the Brooklyn Bridge long ago.", answer: "built", accept: ["build"] },
          { de: "der **Stern**", en: "You can see one bright ___ in the sky.", answer: "star" },
          { de: "der **Einwanderer**", en: "The ___ arrived in New York by ship.", answer: "immigrant" },
        ],
      },
    ],
  },

  /* ============ Shared reference card ============ */
  guide: {
    label: "How to Mediate",
    numbered: false,
    types: [
      {
        name: "1 · Sense, not words",
        tag: "convey the meaning",
        accent: "olive",
        formula: "meaning first — never word for word",
        de: "Übertrage den Sinn, nicht jedes einzelne Wort.",
        example: "„die Rechnung, bitte“ → “The check, please.”",
      },
      {
        name: "2 · Only what they need",
        tag: "the key points",
        accent: "teal",
        formula: "pass on the important information, leave the rest",
        de: "Gib nur die wichtigen Infos weiter — nicht den ganzen Text.",
        example: "A whole note → three key points.",
      },
      {
        name: "3 · Right word, right place",
        tag: "British ↔ American",
        accent: "ochre",
        formula: "in New York, use the American word",
        de: "In New York benutzt du das amerikanische Wort.",
        example: "lift → elevator · shop → store",
      },
    ],
    tensesLabel: "Watch out — false friends & the floor trap",
    tenses: [
      { tense: "pants", accent: "coral", use: "US = die Hose · UK = die Unterwäsche — a real mix-up!", signals: "Kleidung" },
      { tense: "first floor", accent: "coral", use: "US „first floor“ = German Erdgeschoss (street level), not the floor above.", signals: "Stockwerke" },
      { tense: "check ≠ receipt", accent: "olive", use: "the check = die Rechnung · the receipt = der Kassenbon", signals: "bezahlen" },
      { tense: "candy ≠ cookie", accent: "olive", use: "candy = Süßigkeiten · a cookie = ein Keks", signals: "essen" },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "Mit Hilfe auf Deutsch",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Do you know one word that Americans say differently from the British? Write it down — or write: „No, not yet.“",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "The same thing — two words!",
          intro: "In New York people speak American English. Tap a British word, then tap its American partner. The meaning is the same!",
          leftLabel: "British",
          rightLabel: "American",
          pairs: [
            { left: "shop", right: "store" },
            { left: "lift", right: "elevator" },
            { left: "underground", right: "subway" },
            { left: "trousers", right: "pants" },
            { left: "trainers", right: "sneakers" },
            { left: "chips", right: "fries" },
            { left: "sweets", right: "candy" },
            { left: "toilet", right: "restroom" },
            { left: "taxi", right: "cab" },
            { left: "autumn", right: "fall" },
          ],
        },
        {
          type: "match-up",
          kind: "Bedeutung",
          title: "What does it mean?",
          intro: "These are American words. Match each one to its German meaning.",
          options: ["die Turnschuhe", "die Pommes", "die U-Bahn", "die Toilette", "der Laden"],
          items: [
            { left: "sneakers", answer: "die Turnschuhe" },
            { left: "fries", answer: "die Pommes" },
            { left: "subway", answer: "die U-Bahn" },
            { left: "restroom", answer: "die Toilette" },
            { left: "store", answer: "der Laden" },
          ],
        },
        {
          type: "inline-choice",
          kind: "Shopping in New York",
          title: "Fill in the American word",
          intro: "Choose the American word for each gap.",
          layout: "dialogue",
          lines: [
            { speaker: "1", segments: ["Let's take the ", { gap: 0 }, " to Times Square. It is fast."] },
            { speaker: "2", segments: ["I need new ", { gap: 1 }, ". My old trousers are too small."] },
            { speaker: "3", segments: ["This ", { gap: 2 }, " sells cool T-shirts and caps."] },
            { speaker: "4", segments: ["We take the ", { gap: 3 }, " up to the fifth floor."] },
            { speaker: "5", segments: ["I want some ", { gap: 4 }, ". I love American chocolate!"] },
          ],
          gaps: [
            { options: ["subway", "elevator", "store"], answer: "subway" },
            { options: ["pants", "candy", "store"], answer: "pants" },
            { options: ["store", "subway", "elevator"], answer: "store" },
            { options: ["elevator", "subway", "pants"], answer: "elevator" },
            { options: ["candy", "pants", "store"], answer: "candy" },
          ],
        },
        {
          type: "match-up",
          kind: "Mediation · Hilf Oma",
          title: "Help your grandma read the signs",
          intro: "Your grandma from Germany is with you in New York. She does not speak English and points at these signs. Tell her in German what they mean — match each sign to its meaning.",
          options: ["die Toilette", "der Ausgang", "die U-Bahn", "der Süßigkeitenladen", "der Aufzug"],
          items: [
            { left: "RESTROOM", answer: "die Toilette" },
            { left: "EXIT", answer: "der Ausgang" },
            { left: "SUBWAY", answer: "die U-Bahn" },
            { left: "CANDY STORE", answer: "der Süßigkeitenladen" },
            { left: "ELEVATOR", answer: "der Aufzug" },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Which word does a New Yorker use?",
          intro: "Tap the word an American in New York would say.",
          columns: 2,
          questions: [
            { q: "Let's take the ___ to the top floor.", options: ["lift", "elevator"], correct: 1 },
            { q: "I need new ___ for gym class.", options: ["trainers", "sneakers"], correct: 1 },
            { q: "Where can I buy some ___? (Süßigkeiten)", options: ["sweets", "candy"], correct: 1 },
            { q: "Let's ride the ___ downtown.", options: ["underground", "subway"], correct: 1 },
            { q: "These ___ are too small. (Hose)", options: ["trousers", "pants"], correct: 1 },
            { q: "Excuse me, where is the ___? (Toilette)", options: ["toilet", "restroom"], correct: 1 },
          ],
        },
        {
          type: "written",
          kind: "Kreativ",
          title: "My New York day",
          intro: "Make your own plan for one day in New York. Write a short shopping list with American words, and one place to visit on your city tour.",
          starters: [
            "My American shopping list — 1:",
            "2:",
            "3:",
            "On my city tour I want to see:",
            "The American word I like best is:",
          ],
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
          intro: "Why is it useful to know both British and American words? Write down one reason.",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Two kinds of English",
          intro: "Your textbook teaches British English, but in New York you hear American English. Tap a British word, then its American partner.",
          leftLabel: "British",
          rightLabel: "American",
          pairs: [
            { left: "shop", right: "store" },
            { left: "lift", right: "elevator" },
            { left: "underground", right: "subway" },
            { left: "queue", right: "line" },
            { left: "trousers", right: "pants" },
            { left: "trainers", right: "sneakers" },
            { left: "sweets", right: "candy" },
            { left: "biscuit", right: "cookie" },
            { left: "the bill", right: "the check" },
            { left: "ground floor", right: "first floor" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Übung 1",
          title: "Complete the pairs",
          intro: "Type the missing British or American word.",
          items: [
            { segments: ["British: lift   →   American: ", { answer: "elevator", size: 11 }] },
            { segments: ["British: ", { answer: "biscuit", size: 10 }, "   →   American: cookie"] },
            { segments: ["British: trousers   →   American: ", { answer: "pants", size: 9 }] },
            { segments: ["British: queue   →   American: ", { answer: "line", size: 9 }] },
            { segments: ["British: ", { answer: "shop", size: 9 }, "   →   American: store"] },
            { segments: ["British: sweets   →   American: ", { answer: "candy", size: 9 }] },
          ],
        },
        {
          type: "inline-choice",
          kind: "Übung 2",
          title: "What would an American say?",
          intro: "Choose the word an American in New York would use.",
          layout: "dialogue",
          lines: [
            { speaker: "1", segments: ["Let's take the ", { gap: 0 }, " to the top floor."] },
            { speaker: "2", segments: ["I'm looking for new ", { gap: 1 }, " for basketball."] },
            { speaker: "3", segments: ["There is a long ", { gap: 2 }, " in front of the store."] },
            { speaker: "4", segments: ["Can I have the ", { gap: 3 }, ", please?"] },
            { speaker: "5", segments: ["The toy store is on the ", { gap: 4 }, "."] },
          ],
          gaps: [
            { options: ["lift", "elevator"], answer: "elevator" },
            { options: ["trainers", "sneakers"], answer: "sneakers" },
            { options: ["queue", "line"], answer: "line" },
            { options: ["bill", "check"], answer: "check" },
            { options: ["ground floor", "first floor"], answer: "first floor" },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "American English check",
          intro: "Tap the right answer for New York.",
          columns: 2,
          questions: [
            { q: "In an American store you wait in a ___.", options: ["queue", "line"], correct: 1 },
            { q: "Can I have the ___, please? (bezahlen)", options: ["bill", "check"], correct: 1 },
            { q: "I'd love a ___ with my coffee. (Keks)", options: ["biscuit", "cookie"], correct: 1 },
            { q: "The American „first floor“ is the German ___.", options: ["Erdgeschoss", "erste Etage"], correct: 0 },
            { q: "Take the ___ up to the fifth floor.", options: ["lift", "elevator"], correct: 1 },
            { q: "These ___ don't fit. (Hose)", options: ["trousers", "pants"], correct: 1 },
          ],
        },
        {
          type: "written",
          kind: "Mediation · Übung 3",
          title: "The note from your host mum",
          intro: "Your American host mum left this note in English. Your mother is visiting and does not speak English. Explain the four most important points to her in German — you do not need to translate every word.",
          incoming: {
            from: "🏠 Susan (host mum)",
            subject: "Welcome to New York!",
            body: [
              "Hi! Welcome to New York! I put 20 dollars on the table. Please go to the store around the corner and buy some cookies and candy for our city tour tomorrow.",
              "Take the elevator — we live on the first floor (that is your German Erdgeschoss!). Please be back by 6 p.m. — Susan",
            ],
          },
          starters: [
            "1. Wo liegt das Geld, und wie viel ist es? →",
            "2. Was soll ich im Laden kaufen? →",
            "3. In welchem Stock wohnen wir (Achtung!)? →",
            "4. Wann muss ich zurück sein? →",
          ],
        },
        {
          type: "written",
          kind: "Mediation · Übung 4",
          title: "At the store",
          intro: "Your mum gives you her shopping wishes in German. You are in a New York store. Tell the shop assistant in English what you are looking for — write three polite sentences.",
          incoming: {
            from: "🛍️ Mamas Zettel",
            subject: "auf Deutsch",
            body: ["• eine Hose in Größe 38", "• Turnschuhe für Papa", "• frag bitte, ob es die Hose auch in Blau gibt"],
          },
          starters: [
            "Excuse me, I'm looking for … (Hose, size 38) →",
            "Do you also have … (sneakers for my dad) →",
            "Do you have these pants … ? (in blue) →",
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "A shopping dialogue",
          intro: "Write a dialogue (8–10 lines) in a New York store. A German teenager (YOU) buys something for the city tour. Use at least five American words from this lesson.",
          min: 50,
          max: 90,
          placeholder: "ASSISTANT: Hi there! Can I help you?\nYOU: Yes, please. I'm looking for …",
          chips: ["I'm looking for …", "Do you have … in size …?", "Where is the elevator?", "How much is it?", "Can I have the check?", "the first floor", "sneakers · pants · candy"],
          checklist: ["8–10 lines?", "At least five American words?", "A polite start and a friendly end?"],
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
          intro: "„Mediation“ does not mean word-for-word translation. What do you think it means to mediate between two languages? Write one sentence.",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Words: English · simple English",
          intro: "No German this time — match each word with its meaning in simple English.",
          leftLabel: "Word",
          rightLabel: "Meaning",
          pairs: [
            { left: "to mediate", right: "to help two people understand each other" },
            { left: "to convey", right: "to get a meaning across to someone" },
            { left: "to gist", right: "to give only the main idea of a text" },
            { left: "a variety", right: "a form of a language, e.g. British or American" },
            { left: "a receipt", right: "the paper that proves you paid" },
            { left: "to refund", right: "to give money back for a product" },
            { left: "valid", right: "something that can still be used, e.g. a ticket" },
            { left: "a landmark", right: "a famous building or place in a city" },
            { left: "a bargain", right: "something good that you buy cheaply" },
            { left: "worthwhile", right: "good enough to be worth the time or money" },
          ],
        },
        {
          type: "match-up",
          kind: "Übung 1a",
          title: "British or American?",
          intro: "Decide whether each word is British or American English.",
          options: ["British", "American"],
          items: [
            { left: "favourite", answer: "British" },
            { left: "sneakers", answer: "American" },
            { left: "queue", answer: "British" },
            { left: "center", answer: "American" },
            { left: "lift", answer: "British" },
            { left: "candy", answer: "American" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Übung 1b",
          title: "Give the other variety",
          intro: "Write the same word in the other variety of English.",
          items: [
            { segments: ["favourite (British)  →  American: ", { answer: "favorite", size: 11 }] },
            { segments: ["sneakers (American)  →  British: ", { answer: "trainers", size: 11 }] },
            { segments: ["queue (British)  →  American: ", { answer: "line", size: 9 }] },
            { segments: ["center (American)  →  British: ", { answer: "centre", size: 9 }] },
            { segments: ["lift (British)  →  American: ", { answer: "elevator", size: 11 }] },
            { segments: ["candy (American)  →  British: ", { answer: "sweets", size: 9 }] },
          ],
        },
        {
          type: "written",
          kind: "Übung 2 · Where could it go wrong?",
          title: "Spot the misunderstanding",
          intro: "Explain the possible misunderstanding in each situation in one sentence.",
          starters: [
            "1. A British tourist tells an American friend: „I love your pants!“ →",
            "2. A German shopper is told a toy store is „on the first floor“ and takes the elevator up one level. →",
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Variety & spelling",
          intro: "Tap the American English answer.",
          columns: 2,
          questions: [
            { q: "American spelling:", options: ["colour", "color"], correct: 1 },
            { q: "American spelling:", options: ["centre", "center"], correct: 1 },
            { q: "American spelling:", options: ["organise", "organize"], correct: 1 },
            { q: "In American English, „pants“ means …", options: ["die Hose", "die Unterwäsche"], correct: 0 },
            { q: "British „queue“ = American …", options: ["line", "row"], correct: 0 },
            { q: "To pay a US waiter, you ask for the …", options: ["check", "receipt"], correct: 0 },
          ],
        },
        {
          type: "essay-editor",
          kind: "Mediation · Übung 3",
          title: "A message from home",
          intro: "Your aunt in Germany sends this message. You are staying with a host family in New York. Convey her two wishes to your host family in English (3–4 sentences). Do not translate word-for-word — pass on what she needs.",
          incoming: {
            from: "💬 Tante Karin",
            subject: "auf Deutsch",
            body: [
              "„Hallo! Wie schön, dass du in New York bist! Ich hätte zwei Bitten: Könntest du mir ein typisch amerikanisches Souvenir mitbringen – aber bitte nichts Kitschiges?",
              "Und finde bitte heraus, ob man die Freiheitsstatue auch ohne lange Wartezeit besichtigen kann und was das kostet. Frag am besten deine Gastfamilie. Liebe Grüße, Tante Karin“",
            ],
          },
          min: 35,
          max: 75,
          placeholder: "My aunt in Germany has two wishes. First, she would like …",
          chips: ["a typical American souvenir", "nothing too kitschy", "the Statue of Liberty without a long wait?", "how much does it cost?", "Could you help me find out …?"],
          checklist: ["Both wishes passed on?", "In your own words (not word-for-word)?", "3–4 clear sentences?"],
        },
        {
          type: "written",
          kind: "Mediation · Übung 4",
          title: "Explain the tour ticket",
          intro: "Your friend Jonas does not understand English well. He wants to join this bus tour but has four questions. Read the English information and answer only what he needs — in German.",
          incoming: {
            from: "🎟️ BIG APPLE HOP-ON HOP-OFF TOUR",
            subject: "in English",
            body: [
              "Tickets: $59 (adults), $45 (under 16). Your ticket is valid for 24 hours. Buses leave every 20 minutes from Times Square.",
              "You can get off at any stop and catch a later bus. Please note: the ticket does not include entry to museums. Restrooms are available on the upper deck.",
            ],
          },
          starters: [
            "1. Was kostet das Ticket für mich? Ich bin 14. →",
            "2. Wie lange ist das Ticket gültig? →",
            "3. Wo starten die Busse? →",
            "4. Sind Museumsbesuche im Preis dabei? →",
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "You are the language bridge",
          intro: "Write a short dialogue (100–130 words) in which YOU are the language bridge between your German aunt (on the phone, in German) and an American shop assistant (in English) on your city tour. Take her wish, pass it on in English (not word-for-word), get the answer, and report back to her in German.",
          min: 100,
          max: 130,
          placeholder: "TANTE KARIN (am Telefon): Frag doch bitte, ob …\nYOU (to the assistant): Excuse me, do you have …?",
          chips: ["your aunt's wish (in German)", "how you convey it (in English)", "the assistant's answer (in English)", "your report back (in German)", "3+ American words: store · elevator · candy · line · check"],
          checklist: ["All four voices present?", "The wish conveyed, not translated word-for-word?", "At least three American words?", "100–130 words?"],
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
          type: "bridge-game",
          title: "The Language Bridge — get Oma across New York",
          intro:
            "You are the language bridge! Oma is visiting from Germany and speaks no English. Help her across the city: at every span someone speaks — sometimes Oma in German, sometimes a New Yorker in English. Pass on the meaning (not every word!) and pick the right American word. Get it right and your traveller walks one span further. Reach the Statue of Liberty and the two languages are connected!",
          spans: ["The Subway", "The Store", "The Floor Trap", "Candy", "The Check", "The Tour"],
          stops: [
            {
              situation: "Oma wants to reach Times Square. She points down the stairs: „Wo ist die U-Bahn?“",
              prompt: "You ask a New Yorker for the way. Which word do you use?",
              options: [
                "Excuse me, where is the subway to Times Square?",
                "Excuse me, where is the underground to Times Square?",
                "Excuse me, where is the metro to Times Square?",
              ],
              correct: 0,
              note: "In New York the U-Bahn is the subway — not the British „underground“.",
            },
            {
              situation: "Oma needs a new pair of trousers: „Ich brauche eine Hose.“",
              prompt: "You tell the shop assistant. What do you say?",
              options: [
                "Excuse me, do you have pants?",
                "Excuse me, do you have underwear?",
                "Excuse me, do you have trousers?",
              ],
              correct: 0,
              note: "American „pants“ = die Hose. Careful — in Britain „pants“ means Unterwäsche!",
            },
            {
              situation: "The assistant says the sneakers are „on the first floor.“ Oma heads for the elevator to go up.",
              prompt: "What do you tell Oma?",
              options: [
                "„Bleib hier — der amerikanische ‚first floor‘ ist unser Erdgeschoss.“",
                "„Fahr mit dem Aufzug eine Etage hoch.“",
                "„Geh zwei Etagen nach oben.“",
              ],
              correct: 0,
              note: "In the US the „first floor“ is street level = German Erdgeschoss. You are already there!",
            },
            {
              situation: "Oma has a sweet tooth: „Wo gibt es hier Süßigkeiten?“",
              prompt: "You ask an employee. What do you say?",
              options: [
                "Excuse me, where is the candy?",
                "Excuse me, where are the sweets?",
                "Excuse me, where are the biscuits?",
              ],
              correct: 0,
              note: "American „candy“ = Süßigkeiten. (British „sweets“ — and a „cookie“ is a Keks.)",
            },
            {
              situation: "After a snack, Oma wants to pay: „Frag bitte nach der Rechnung.“",
              prompt: "You call the waiter. What do you ask for?",
              options: [
                "Could we have the check, please?",
                "Could we have the bill, please?",
                "Could we have the receipt, please?",
              ],
              correct: 0,
              note: "In a US diner you ask for the check. The receipt (Kassenbon) is the paper you get after paying.",
            },
            {
              situation: "At the tour bus, Oma asks: „Gilt das Ticket den ganzen Tag?“ The guide replies: „It's valid for 24 hours.“",
              prompt: "How do you report it back to Oma?",
              options: [
                "„Ja — es gilt 24 Stunden.“",
                "„Nein — nur für eine Fahrt.“",
                "„Nur bis zwölf Uhr mittags.“",
              ],
              correct: 0,
              note: "„Valid for 24 hours“ = 24 Stunden gültig. Mediation = pass on the meaning, not every word.",
            },
          ],
          help: "★ Mediation golden rule: carry the meaning across, and use the word for the place you are in — in New York, that's American English.",
        },
      ],
    },
  ],
};
