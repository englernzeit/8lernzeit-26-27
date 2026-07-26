/**
 * In New York City (Unit 1) — Revision: "Ready for the Test"
 * (get ready for the class test).
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs) supplied for this lesson, rebuilt as one interactive page in
 * the night-map design and mapped onto our four Steps:
 *
 *   Step 1 (LE)      — Foundation: the facts, the words, a guided blog
 *   Step 2 (G-Kurs)  — the profile, British/American sort, Conditional 2
 *   Step 3 (E-Kurs)  — correct false facts, the traps, accurate grammar
 *   Step 4 (★)       — The Big Apple Quiz Show: a test-ready check
 *
 * The whole unit meets here: USA / New York facts, Simple Past vs Present
 * Perfect, British ↔ American words and Conditional 2. The shared
 * reference card ("Test Toolkit") sits at the top for every level: the
 * two grammar traps plus the Simple-Past/Present-Perfect signal-word
 * table. Every task self-checks so the learner can measure how ready
 * they are — and the star game turns the whole revision into one score.
 */

export default {
  title: "Ready for the Test",

  /* ============ Shared reference card — the test toolkit ============ */
  guide: {
    label: "Test Toolkit",
    numbered: false,
    types: [
      {
        name: "Conditional 2",
        tag: "Was wäre, wenn …?",
        accent: "teal",
        formula: "If + Simple Past , … would + infinitive",
        de: "Nicht echt – nur ein Traum. Nie „would“ im if-Satz!",
        example: "If I went to New York, I would visit Central Park.",
      },
      {
        name: "The were-trap",
        tag: "I / he / she + were",
        accent: "ochre",
        formula: "If I were … , I would …",
        de: "In Conditional 2 immer „were“, nicht „was“.",
        example: "If I were you, I wouldn't take a taxi.",
      },
      {
        name: "American ↔ British",
        tag: "in New York → the US word",
        accent: "olive",
        formula: "subway · pants · vacation · apartment",
        de: "In New York benutzt du das amerikanische Wort.",
        example: "subway = underground · pants = trousers",
      },
    ],
    tensesLabel: "Simple Past vs. Present Perfect — which one?",
    tenses: [
      {
        tense: "Simple Past",
        accent: "ochre",
        use: "A finished day — the story of what happened.",
        example: "Yesterday we took the ferry to Liberty Island.",
        signals: "yesterday · last week · on Monday · in 2024 · ago",
      },
      {
        tense: "Present Perfect",
        accent: "olive",
        use: "The trip so far — experiences and results up to now.",
        example: "We have already been to Central Park twice.",
        signals: "already · just · never · ever · so far · since · for",
      },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "Foundation · mit Hilfe auf Deutsch",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "written",
          kind: "Warm-up",
          title: "Before you start",
          intro: "Welche drei englischen Wörter aus dieser Unit weißt du noch?",
          starters: ["Three English words from Unit 1 I still remember: …"],
          help: "Kein Stress — schreib einfach drei Wörter auf, die dir einfallen.",
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "The USA quiz",
          intro: "Read each question and tap the correct answer.",
          questions: [
            { q: "What is the capital of the USA?", options: ["Washington D.C.", "New York", "Los Angeles"], correct: 0 },
            { q: "How many states does the USA have?", options: ["50", "20", "100"], correct: 0 },
            { q: "How many stars are on the American flag?", options: ["50", "13", "8"], correct: 0 },
            { q: "What money do people use in the USA?", options: ["dollar", "euro", "pound"], correct: 0 },
            { q: "When is Independence Day?", options: ["4th July", "1st January", "24th December"], correct: 0 },
            { q: "What is the nickname of New York?", options: ["The Big Apple", "The Big Orange", "The Big Star"], correct: 0 },
          ],
        },
        {
          type: "inline-choice",
          kind: "Steckbrief",
          title: "New York City — fact file",
          intro: "Choose the right word from the box for each gap.",
          bank: ["USA", "Apple", "five", "Central", "Liberty", "Times"],
          segments: [
            "New York City is in the ",
            { gap: 0 },
            ". Its nickname is The Big ",
            { gap: 1 },
            ". The city has ",
            { gap: 2 },
            " boroughs. Its most famous park is ",
            { gap: 3 },
            " Park, and its most famous statue is the Statue of ",
            { gap: 4 },
            ". The bright square full of screens is ",
            { gap: 5 },
            " Square.",
          ],
          gaps: [
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "USA" },
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "Apple" },
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "five" },
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "Central" },
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "Liberty" },
            { options: ["USA", "Apple", "five", "Central", "Liberty", "Times"], answer: "Times" },
          ],
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "American ↔ British",
          intro: "In New York people use American words. Tap an American word, then tap its British partner — the meaning is the same!",
          leftLabel: "American",
          rightLabel: "British",
          pairs: [
            { left: "soccer", right: "football" },
            { left: "subway", right: "underground" },
            { left: "fries", right: "chips" },
            { left: "pants", right: "trousers" },
            { left: "sneakers", right: "trainers" },
            { left: "fall", right: "autumn" },
            { left: "cell phone", right: "mobile phone" },
            { left: "vacation", right: "holiday" },
            { left: "apartment", right: "flat" },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "If I went to New York …",
          intro: "Complete the sentences. Use the ideas from the box — or your own!",
          starters: [
            "If I went to New York, I would … (visit the Statue of Liberty)",
            "If I went to New York, I would … (eat a hot dog)",
            "If I went to New York, I would … (take a photo of Times Square)",
            "If I had a lot of money, I would …",
          ],
          help: "Denk dran: nach If I → went / had • nach I → would + Verb.",
        },
        {
          type: "paragraph-builder",
          kind: "Finale",
          title: "My New York blog",
          intro: "You are on a trip in New York. Fill the frame line by line — your blog entry builds itself above. Careful: yesterday → Simple Past, already → Present Perfect!",
          paragraph: {
            title: "MY NEW YORK BLOG — Day 3 in the Big Apple",
            goal: "A short blog entry with already (Present Perfect) and yesterday (Simple Past).",
            sentences: [
              { label: "Where are you?", starter: "Hi everybody! I am in", hint: "z.B. New York / the Big Apple", example: "Hi everybody! I am in New York!" },
              { label: "Already seen (Present Perfect)", starter: "I have already seen", hint: "zwei Sehenswürdigkeiten", example: "I have already seen Times Square and Central Park." },
              { label: "Yesterday (Simple Past)", starter: "Yesterday we visited", hint: "yesterday → Simple Past", example: "Yesterday we visited the Statue of Liberty." },
              { label: "How was it?", starter: "It was", hint: "ein Adjektiv + !", example: "It was amazing!" },
              { label: "Already eaten (Present Perfect)", starter: "I have already eaten", hint: "already → Present Perfect", example: "I have already eaten a big hot dog." },
              { label: "Tomorrow (a plan)", starter: "Tomorrow we are going to", hint: "going to + Verb", example: "Tomorrow we are going to see the Empire State Building." },
              { label: "Sign off", starter: "See you soon!", hint: "dein Name", example: "See you soon! Mia" },
            ],
          },
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
          kind: "Warm-up",
          title: "Before you start",
          intro: "Which part of this unit was the most difficult for you? Name it — then check it carefully as you work through this page.",
          starters: ["The part of this unit I found hardest was … — I'll check it carefully today."],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "The USA quiz",
          intro: "Tap the correct answer for each question.",
          questions: [
            { q: "The capital of the USA is …", options: ["Washington D.C.", "New York", "Boston"], correct: 0 },
            { q: "The USA has … states.", options: ["50", "13", "52"], correct: 0 },
            { q: "The 13 stripes on the flag stand for …", options: ["the first 13 states", "13 presidents", "13 big cities"], correct: 0 },
            { q: "Americans celebrate Independence Day on …", options: ["4th July", "1st May", "3rd October"], correct: 0 },
            { q: "The Statue of Liberty was a present from …", options: ["France", "Great Britain", "Spain"], correct: 0 },
            { q: "New York City has … boroughs.", options: ["five", "three", "ten"], correct: 0 },
            { q: "Where does the American president live?", options: ["The White House", "The Empire State Building", "Buckingham Palace"], correct: 0 },
            { q: "What is the nickname of New York City?", options: ["The Big Apple", "The Big Orange", "The Windy City"], correct: 0 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Steckbrief",
          title: "New York City — fact file",
          intro: "Fill in the facts from memory. Type the missing word — the hint helps you.",
          items: [
            { hint: "der Bundesstaat", segments: ["New York City lies in the state of ", { answer: "New York", size: 10 }, "."] },
            { hint: "der Spitzname", segments: ["Its nickname is The Big ", { answer: "Apple", size: 8 }, "."] },
            { hint: "die Einwohnerzahl (ungefähr)", segments: ["About ", { answer: "8", accept: ["eight", "8.5", "8.4"], size: 5 }, " million people live there."] },
            { hint: "der fehlende Stadtbezirk", segments: ["The five boroughs are Manhattan, Brooklyn, Queens, the ", { answer: "Bronx", size: 8 }, " and Staten Island."] },
            { hint: "ein Wahrzeichen", segments: ["A world-famous landmark is the Statue of ", { answer: "Liberty", size: 9 }, "."] },
            { hint: "der Fluss westlich von Manhattan", segments: ["The ", { answer: "Hudson", size: 8 }, " River flows west of Manhattan."] },
            { hint: "amerikanisches Wort für U-Bahn", segments: ["Most New Yorkers travel by ", { answer: "subway", size: 8 }, "."] },
          ],
        },
        {
          type: "group-sort",
          kind: "Sortieren",
          title: "British or American?",
          intro: "Tap a word, then tap the variety it belongs to. Sort all nine, then press Check.",
          groups: [
            { label: "American 🇺🇸", items: ["soccer", "subway", "pants", "cell phone", "vacation", "apartment"] },
            { label: "British 🇬🇧", items: ["chips", "trainers", "autumn"] },
          ],
        },
        {
          type: "gap-fill",
          kind: "Grammatik",
          title: "Conditional 2",
          intro: "Put the verbs into the correct form: If + Simple Past , … would + infinitive.",
          items: [
            { hint: "If + Simple Past … would + infinitive", segments: ["If I ", { answer: "went", size: 7 }, " (go) to New York, I ", { answer: "would take", accept: ["'d take"], size: 12 }, " (take) a boat to Liberty Island."] },
            { hint: "If + Simple Past … would + infinitive", segments: ["If we ", { answer: "had", size: 6 }, " (have) more time, we ", { answer: "would visit", accept: ["'d visit"], size: 12 }, " (visit) all five boroughs."] },
            { hint: "die were-Falle: I → were", segments: ["If I ", { answer: "were", accept: ["was"], size: 6 }, " (be) a New Yorker, I ", { answer: "would live", accept: ["'d live"], size: 12 }, " (live) in Brooklyn."] },
            { hint: "Verneinung im Hauptsatz: would not + infinitive", segments: ["My mum ", { answer: "would not come", accept: ["wouldn't come"], size: 16 }, " (not/come) with us if the flight ", { answer: "were", accept: ["was"], size: 6 }, " (be) too expensive."] },
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Your New York blog",
          intro: "You are on a class trip in New York. Write a blog entry (80–100 words) about your trip so far. Use both tenses — the checklist keeps you on track.",
          min: 80,
          max: 100,
          placeholder: "Your blog entry…",
          comment: { replyTo: "My New York class trip — Day 4" },
          chips: ["3× Present Perfect (already / just / never)", "3× Simple Past (yesterday / on Monday)", "1× plan for tomorrow", "bonus: 1× Conditional 2"],
          checklist: [
            "Three sentences in the Present Perfect?",
            "Three sentences in the Simple Past?",
            "One sentence about your plans for tomorrow?",
            "Bonus: one “If I had …, I would …” sentence?",
            "80–100 words?",
          ],
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
          kind: "Warm-up",
          title: "Before you start",
          intro: "Which mistake do you make most often — with tenses, vocabulary or word order? Name it, so you can watch out for it on this page.",
          starters: ["The mistake I make most often is … — I'll watch out for it today."],
        },
        {
          type: "written",
          kind: "Quiz",
          title: "The USA quiz — short answers",
          intro: "Answer each question in a short, full sentence.",
          starters: [
            "Which city is the capital of the USA — and why do people often get it wrong? →",
            "What do the 50 stars and the 13 stripes on the flag stand for? →",
            "Which country gave the Statue of Liberty to the USA, and roughly when? →",
            "Why was Ellis Island so important for millions of people? →",
          ],
        },
        {
          type: "written",
          kind: "Fakten-Check",
          title: "Correct the false statements",
          intro: "Each statement below is wrong. Write the corrected version — a full sentence.",
          starters: [
            "“New York City is the capital of the state of New York.” →",
            "“Manhattan is the only borough of New York City.” →",
            "“Americans celebrate Thanksgiving on the 4th of July.” →",
          ],
          help: "Fix the fact, then check it against the Test Toolkit and the quiz above.",
        },
        {
          type: "written",
          kind: "Steckbrief",
          title: "New York City — a compact profile",
          intro: "Fill the fact file in your head, then use it to write a compact profile of New York (3–4 full sentences — not in note form).",
          lines: [
            "Nickname & population (approx.)",
            "The five boroughs",
            "Two or three famous landmarks",
            "Two rivers (Hudson & East River)",
            "Why so many cultures live there",
          ],
          answer: true,
          help: "Schreib in ganzen Sätzen. Beispielanfang: New York City, known as the Big Apple, has a population of about …",
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Two varieties, one language",
          intro: "Tap a British word, then tap its American partner.",
          leftLabel: "British",
          rightLabel: "American",
          pairs: [
            { left: "football", right: "soccer" },
            { left: "underground", right: "subway" },
            { left: "chips", right: "fries" },
            { left: "trousers", right: "pants" },
            { left: "trainers", right: "sneakers" },
            { left: "autumn", right: "fall" },
            { left: "mobile phone", right: "cell phone" },
            { left: "holiday", right: "vacation" },
            { left: "flat", right: "apartment" },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Fallen!",
          title: "Mind the traps",
          intro: "Some words exist in BOTH varieties — with different meanings. Tap the correct answer.",
          questions: [
            { q: "You want Pommes (like German fries) in London. You order …", options: ["chips", "crisps", "fries"], correct: 0 },
            { q: "In American English, the word “chips” means …", options: ["thin crunchy snacks (crisps)", "hot fried potatoes", "baked potatoes"], correct: 0 },
            { q: "In British English, “pants” means …", options: ["underwear", "trousers", "shorts"], correct: 0 },
            { q: "An American says “I like your pants.” They mean your …", options: ["trousers", "underwear", "shoes"], correct: 0 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Grammatik",
          title: "Conditional 2 — accurate forms",
          intro: "Complete the sentences. Watch the were-trap and the question form.",
          items: [
            { hint: "If + Simple Past … would + infinitive", segments: ["If I ", { answer: "had", size: 6 }, " (have) only one day in New York, I ", { answer: "would spend", accept: ["'d spend"], size: 12 }, " (spend) it in Manhattan."] },
            { hint: "negative if-clause + would", segments: ["If the subway ", { answer: "were not", accept: ["weren't", "wasn't", "was not"], size: 10 }, " (not/be) so cheap, far more people ", { answer: "would drive", accept: ["'d drive"], size: 12 }, " (drive) their cars."] },
            { hint: "question: would + subject + infinitive", segments: ["What ", { answer: "would", size: 7 }, " you ", { answer: "do", size: 5 }, " (do) if you ", { answer: "got", size: 6 }, " (get) lost in Times Square?"] },
            { hint: "die were-Falle", segments: ["If I ", { answer: "were", accept: ["was"], size: 6 }, " (be) you, I ", { answer: "would book", accept: ["'d book"], size: 12 }, " (book) the tickets online."] },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Fehler finden",
          title: "Spot the correct Conditional 2",
          intro: "Only one version of each sentence is correct. Tap it.",
          shuffle: false,
          questions: [
            { q: "Which sentence is correct?", options: ["If I went to New York, I would visit Harlem.", "If I would go to New York, I would visit Harlem.", "If I go to New York, I would visit Harlem."], correct: 0 },
            { q: "Which sentence is correct?", options: ["If I were a tour guide, I would show people the real Brooklyn.", "If I was a tour guide, I would show people the real Brooklyn.", "If I am a tour guide, I would show people the real Brooklyn."], correct: 0 },
            { q: "Where is the mistake? “If I would have more time, I would explore Queens.”", options: ["“would have” should be “had”", "“would explore” should be “explored”", "there is no mistake"], correct: 0 },
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Your New York travel blog",
          intro: "Spend a week in New York with your family and write a travel-blog entry (120–150 words). Idea to warm up: if you could live in New York for a year, where would you live and why? Then write the entry — the checklist is your recipe.",
          min: 120,
          max: 150,
          placeholder: "Your travel-blog entry…",
          comment: { replyTo: "A week in New York — my travel blog · 0 comments" },
          chips: [
            "Opening hook",
            "Trip so far → Present Perfect (already / so far / never / for / since)",
            "One day as a story → Simple Past + a surprise",
            "≥1 American English word",
            "1× Conditional 2 (If we had …, we would …)",
            "Closing line that invites comments",
          ],
          checklist: [
            "An opening that makes readers want to read on?",
            "A summary of the trip so far in the Present Perfect?",
            "One finished day told in the Simple Past — with a surprising detail?",
            "At least one American English word used correctly?",
            "One Conditional 2 sentence?",
            "A closing line that invites comments — and 120–150 words?",
          ],
        },
      ],
    },

    /* ================= STEP 4 — ★ The Big Apple Quiz Show ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "quizshow-game",
          title: "The Big Apple Quiz Show",
          intro:
            "Lights, camera — test time! Liberty Lou fires twelve quick questions from the whole unit: facts, tenses, American/British words and Conditional 2. Every right answer scores points and builds a 🔥 streak; a wrong tap breaks it. At the end you get a report card with your grade — see how test-ready you are, then beat your score!",
          host: { name: "Liberty Lou", avatar: "🗽", sub: "your quiz-show host" },
          rounds: [
            {
              name: "USA & New York",
              icon: "🗽",
              questions: [
                { q: "What is the capital of the USA?", options: ["Washington D.C.", "New York City", "Los Angeles"], correct: 0, note: "New York is the biggest city — but the capital is Washington D.C." },
                { q: "How many boroughs make up New York City?", options: ["Five", "Three", "Ten"], correct: 0, note: "Manhattan, Brooklyn, Queens, the Bronx and Staten Island." },
                { q: "The Statue of Liberty was a gift from …", options: ["France", "Great Britain", "Spain"], correct: 0, note: "France gave it to the USA in 1886." },
              ],
            },
            {
              name: "Simple Past or Present Perfect?",
              icon: "⏳",
              questions: [
                { q: "On Monday we ___ across Brooklyn Bridge.", options: ["walked", "have walked", "walk"], correct: 0, note: "“On Monday” = a finished time → Simple Past." },
                { q: "We ___ Central Park twice so far.", options: ["have visited", "visited", "are visiting"], correct: 0, note: "“so far” connects to now → Present Perfect." },
                { q: "Yesterday I ___ a huge hot dog.", options: ["ate", "have eaten", "have ate"], correct: 0, note: "“Yesterday” → Simple Past: ate." },
              ],
            },
            {
              name: "American or British?",
              icon: "🔤",
              questions: [
                { q: "The American word for “trousers” is …", options: ["pants", "chips", "trainers"], correct: 0, note: "trousers (BrE) = pants (AmE)." },
                { q: "“subway” is the American word for …", options: ["the underground", "the pavement", "the lift"], correct: 0, note: "subway (AmE) = the underground (BrE)." },
                { q: "Which one is American English?", options: ["vacation", "holiday", "autumn"], correct: 0, note: "vacation (AmE) = holiday (BrE)." },
              ],
            },
            {
              name: "Conditional 2",
              icon: "💭",
              questions: [
                { q: "If I ___ to New York, I would visit the Met.", options: ["went", "would go", "go"], correct: 0, note: "If + Simple Past → went. Never “would” in the if-clause!" },
                { q: "If I ___ you, I wouldn't take a taxi.", options: ["were", "was", "am"], correct: 0, note: "Conditional 2 uses “were” for I / he / she." },
                { q: "Which sentence is correct?", options: ["If I had more money, I would stay a week.", "If I would have more money, I would stay a week.", "If I have more money, I would stay a week."], correct: 0, note: "if-clause = Simple Past, main clause = would + infinitive." },
              ],
            },
          ],
        },
      ],
    },
  ],
};
